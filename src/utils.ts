type translation = { fr: string; en: string };
type language = keyof translation;

// Offset (ms) de Europe/Paris applicable à l'instant donné, calculé via Intl (gère automatiquement l'heure d'été/hiver).
function parisOffsetMs(instant: number): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Paris",
    timeZoneName: "longOffset",
  }).formatToParts(instant);
  const tz = parts.find((p) => p.type === "timeZoneName")?.value ?? "GMT";
  const match = /GMT([+-])(\d{1,2})(?::(\d{2}))?/.exec(tz);
  if (!match) return 0;
  const sign = match[1] === "-" ? -1 : 1;
  return sign * (Number(match[2]) * 60 + Number(match[3] ?? 0)) * 60_000;
}

// Interprète une heure "YYYY-MM-DD[THH:mm]" comme heure de Paris et renvoie l'instant absolu (epoch ms).
function parisToEpoch(wallClock: string): number {
  const clean = wallClock.replace(/\[.*\]$/, "");
  const [date, time = "00:00"] = clean.split("T");
  const [y, mo, d] = date.split("-").map(Number);
  const [h, mi] = time.split(":").map(Number);
  const naiveUTC = Date.UTC(y, mo - 1, d, h, mi);
  return naiveUTC - parisOffsetMs(naiveUTC);
}

// Année d'édition portée par l'ancre start_date (ex. "2027-01-14T08:00").
export function editionYear(anchor: string): number {
  return Number(anchor.slice(0, 4));
}

// Résout une valeur de date vers un instant (epoch ms).
// - Valeur avec année explicite ("YYYY-MM-DD…", ex. start_date) : telle quelle.
// - Valeur "MM-DD[THH:mm]" : janvier => année d'édition, sinon année - 1.
function resolveEpoch(value: string, year: number): number {
  if (/^\d{4}-/.test(value)) return parisToEpoch(value);
  const month = Number(value.slice(0, 2));
  const resolvedYear = month === 1 ? year : year - 1;
  return parisToEpoch(`${resolvedYear}-${value}`);
}

function resolveDate(value: string, year: number): Date {
  return new Date(resolveEpoch(value, year));
}

function url(
  path: string[] | string,
  opts: { anchor?: string; lang?: language } = {},
) {
  const lang = opts.lang ?? "fr";
  const langPart = lang === "en" ? ["en"] : [];
  const pathArray = typeof path === "string" ? path.split("/") : path;
  const a = [langPart, pathArray].flatMap((p) => p);
  const result =
    `${import.meta.env.BASE_URL}/${a.join("/")}/${opts.anchor ?? ""}`.replaceAll(
      /\/+/g,
      "/",
    );
  return result.length === 1 || !result.endsWith("/")
    ? result
    : result.slice(0, -1);
}

export function getLang(url: URL): "fr" | "en" {
  return url.pathname.includes("/en/") || url.pathname.endsWith("/en")
    ? "en"
    : "fr";
}

export default { url, getLang, editionYear, resolveEpoch, resolveDate };
