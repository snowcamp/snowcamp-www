// I/O images : téléchargement, empreinte sha1 des octets sources, conversion avif.
import { createHash } from "node:crypto";
import sharp from "sharp";

/** Hauteur cible des logos (l'affichage plafonne à 100px ; ~200px = net en retina). */
export const AVIF_TARGET_HEIGHT = 200;
export const AVIF_QUALITY = 55;

/** sha1 hexadécimal d'un buffer (empreinte des octets sources, avant conversion). */
export const sha1 = (buffer) => createHash("sha1").update(buffer).digest("hex");

/**
 * Convertit des octets image hétérogènes (jpg/png/webp/svg) en avif normalisé.
 * `density` élevé rasterise proprement les SVG ; aucun agrandissement des petites sources.
 */
export const toAvif = (buffer) =>
  sharp(buffer, { density: 300 })
    .resize({
      height: AVIF_TARGET_HEIGHT,
      fit: "inside",
      withoutEnlargement: true,
    })
    .avif({ quality: AVIF_QUALITY })
    .toBuffer();

/**
 * Télécharge une image et renvoie ses octets + leur sha1 — un seul téléchargement par logo.
 */
export const fetchImage = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} sur ${url}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  return { buffer, sha1: sha1(buffer) };
};
