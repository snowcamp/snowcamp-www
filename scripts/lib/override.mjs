// Dérogations manuelles sur les logos, PUR (aucune I/O).
//
// Une entrée du catalogue peut porter :
//
//   logo_override:
//     ignore_sha1: 6ab3095191762217390e57d6640e997dac3c05e2
//     reason: "logo dark illisible sur fond clair"
//
// Tant que le logo amont fait exactement ce sha, la synchro n'écrit plus rien pour
// ce sponsor : le fichier référencé par `logo` est maintenu à la main. Dès que
// l'amont publie autre chose, le pipeline normal reprend la main et la PR le
// signale — l'épinglage porte sur des octets précis, jamais sur un sponsor.
//
// `logo_override` n'est jamais écrit ni supprimé par le script : il reste en place
// après une reprise et se réactive si l'amont régresse vers les octets refusés.

const SHA1 = /^[0-9a-f]{40}$/i;

const sameSha = (a, b) => a.toLowerCase() === b.toLowerCase();

/** Comportement historique : réécrire le fichier sauf s'il est déjà à jour. */
const refresh = (existing, downloadedSha, targetExists) =>
  existing?.source_sha1 !== undefined &&
  sameSha(existing.source_sha1, downloadedSha) &&
  targetExists
    ? "patch-only"
    : "write";

/**
 * Décide du sort du logo d'un sponsor une fois ses octets amont téléchargés.
 *
 * @param {object} args
 * @param {object} [args.existing] entrée du catalogue, absente pour un nouveau sponsor
 * @param {string} args.downloadedSha sha1 des octets amont qui viennent d'être récupérés
 * @param {boolean} args.targetExists le fichier avif que produirait la synchro existe déjà
 * @param {boolean} args.logoExists le fichier référencé par `logo` existe
 * @returns {{action: "write" | "patch-only" | "skip", problem?: {kind: string}}}
 *   `write` : convertir en avif, écrire le fichier, patcher les champs ;
 *   `patch-only` : fichier déjà à jour, seuls les champs sont patchés ;
 *   `skip` : override actif, rien n'est écrit (ni fichier, ni champ).
 */
export const decideLogo = ({
  existing,
  downloadedSha,
  targetExists,
  logoExists,
}) => {
  const override = existing?.logo_override;
  if (override === undefined) {
    return { action: refresh(existing, downloadedSha, targetExists) };
  }

  const ignored = override.ignore_sha1;
  if (typeof ignored !== "string" || !SHA1.test(ignored)) {
    return {
      action: refresh(existing, downloadedSha, targetExists),
      problem: { kind: "override-invalid" },
    };
  }

  if (!sameSha(ignored, downloadedSha)) {
    return {
      action: refresh(existing, downloadedSha, targetExists),
      problem: {
        kind: "override-stale",
        ignoredSha1: ignored,
        upstreamSha1: downloadedSha,
      },
    };
  }

  return logoExists
    ? { action: "skip" }
    : {
        action: "skip",
        problem: { kind: "override-missing-file", logo: existing.logo },
      };
};
