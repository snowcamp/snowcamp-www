import type { Language } from "../lib/types";
import sponsorsData from "./sponsors.yaml";
import currentSponsorsData from "./current-sponsors.yml";
import {
  buildCatalog,
  countByType,
  groupByType,
  resolveSponsors,
  type CatalogEntry,
  type PresenceEntry,
  type SponsorCounts,
  type SponsorsByType,
} from "./sponsors";

const catalog = buildCatalog(sponsorsData.sponsors as CatalogEntry[]);
const presence = currentSponsorsData.sponsors as PresenceEntry[];

/**
 * Sponsors de l'édition courante regroupés par niveau, liens résolus pour la langue.
 */
export const currentSponsorsByType = (lang: Language): SponsorsByType =>
  groupByType(resolveSponsors(presence, catalog, lang));

/**
 * Places prises par niveau pour l'édition courante.
 */
export const currentSponsorCounts = (): SponsorCounts => countByType(presence);
