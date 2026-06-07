import type { Language } from "./types";

// Formate une durée (en secondes) en français/anglais, en ne gardant que les
// deux plus grosses unités significatives (ex. "2 jours et 3 heures").
export function formatDuration(seconds: number, lang: Language): string {
  if (seconds <= 0) return lang == "fr" ? "0 seconde" : "0 second";

  const unites = [
    { value: 30 * 24 * 3600, en: "month", fr: "mois" },
    { value: 24 * 3600, en: "day", fr: "jour" },
    { value: 3600, en: "hour", fr: "heure" },
    { value: 60, en: "minute", fr: "minute" },
    { value: 1, en: "second", fr: "seconde" },
  ];

  let resultat = [];
  let rest = seconds;

  for (const unite of unites) {
    if (rest >= unite.value) {
      const quantity = Math.floor(rest / unite.value);
      rest %= unite.value;

      const displayName =
        quantity > 1 && unite[lang] !== "mois"
          ? unite[lang] + "s"
          : unite[lang];

      resultat.push(`${quantity} ${displayName}`);
    }

    if (resultat.length === 2) break;
  }

  return resultat.join(lang == "fr" ? " et " : " and ");
}
