import { describe, expect, it, vi } from "vitest";
import {
  buildCatalog,
  groupByType,
  resolveSponsors,
  type CatalogEntry,
  type PresenceEntry,
  type ResolvedSponsor,
} from "./sponsors";

const catalog: CatalogEntry[] = [
  {
    id: "kaizen",
    name: "KAIZEN Solutions",
    logo: "/img/sponsors/kaizen.avif",
    link: { fr: "https://kaizen.fr", en: "https://kaizen.com" },
  },
  {
    id: "cgi2022",
    name: "CGI",
    logo: "/img/sponsors/cgi.2022.jpg",
    link: { fr: "https://cgi.com/fr", en: "https://cgi.com/en" },
  },
];

describe("resolveSponsors", () => {
  it("résout une présence via le catalogue et le lien de la langue demandée", () => {
    const presence: PresenceEntry[] = [
      { id: "kaizen", type: "etoile", meetgreet: true },
    ];

    const [sponsor] = resolveSponsors(presence, buildCatalog(catalog), "en");

    expect(sponsor).toEqual<ResolvedSponsor>({
      id: "kaizen",
      name: "KAIZEN Solutions",
      logo: "/img/sponsors/kaizen.avif",
      link: "https://kaizen.com",
      type: "etoile",
      meetgreet: true,
    });
  });

  it("positionne meetgreet à false quand le champ est absent", () => {
    const presence: PresenceEntry[] = [{ id: "cgi2022", type: "flocon" }];

    const [sponsor] = resolveSponsors(presence, buildCatalog(catalog), "fr");

    expect(sponsor.meetgreet).toBe(false);
    expect(sponsor.link).toBe("https://cgi.com/fr");
  });

  it("ignore une présence dont l'id est absent du catalogue et avertit", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    const presence: PresenceEntry[] = [
      { id: "kaizen", type: "etoile" },
      { id: "inconnu2027", type: "flocon" },
    ];

    const resolved = resolveSponsors(presence, buildCatalog(catalog), "fr");

    expect(resolved.map((s) => s.id)).toEqual(["kaizen"]);
    expect(warn).toHaveBeenCalledOnce();
    warn.mockRestore();
  });
});

describe("groupByType", () => {
  it("répartit par niveau en préservant l'ordre d'origine", () => {
    const presence: PresenceEntry[] = [
      { id: "kaizen", type: "etoile" },
      { id: "cgi2022", type: "flocon" },
    ];

    const grouped = groupByType(
      resolveSponsors(presence, buildCatalog(catalog), "fr"),
    );

    expect(grouped.etoiles.map((s) => s.id)).toEqual(["kaizen"]);
    expect(grouped.flocons.map((s) => s.id)).toEqual(["cgi2022"]);
    expect(grouped.chamois).toEqual([]);
  });
});
