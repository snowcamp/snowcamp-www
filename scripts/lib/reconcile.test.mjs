import { describe, expect, it } from "vitest";
import { computeId, normalizeName, reconcile } from "./reconcile.mjs";

const api = (
  name,
  sponsorTypeName,
  logo = "",
  registrationDate = "2026-01-01T00:00:00.000Z",
) => ({
  name,
  sponsorTypeName,
  logo,
  registrationDate,
});

const run = (overrides) =>
  reconcile({
    apiSponsors: [],
    previousPresence: [],
    catalog: [],
    editionYear: 2027,
    ...overrides,
  });

describe("normalizeName / computeId", () => {
  it("normalise accents, casse et espaces", () => {
    expect(normalizeName("  KAIZEN   Sölutions ")).toBe("kaizen solutions");
  });

  it("forge un id slug + année d'édition", () => {
    expect(computeId("Sopra Steria Group Grenoble", 2027)).toBe(
      "sopra-steria-group-grenoble2027",
    );
  });
});

describe("reconcile — premier run", () => {
  it("crée les présences, additions et téléchargements, triés par date d'inscription", () => {
    const { presence, additions, downloads, problems } = run({
      apiSponsors: [
        api("CGI", "Flocon", "https://x/cgi.jpg", "2026-06-21T00:00:00.000Z"),
        api(
          "KAIZEN Solutions",
          "Etoile",
          "https://x/kzs.webp",
          "2026-06-15T00:00:00.000Z",
        ),
      ],
    });

    expect(presence).toEqual([
      { id: "kaizen-solutions2027", type: "etoile" },
      { id: "cgi2027", type: "flocon" },
    ]);
    expect(additions.map((a) => a.id)).toEqual([
      "cgi2027",
      "kaizen-solutions2027",
    ]);
    expect(downloads.map((d) => d.id).sort()).toEqual([
      "cgi2027",
      "kaizen-solutions2027",
    ]);
    expect(problems).toEqual([]);
  });

  it("signale un nouveau sponsor sans logo et n'ajoute pas de téléchargement", () => {
    const { downloads, problems } = run({
      apiSponsors: [api("Criteo", "Etoile", "")],
    });

    expect(downloads).toEqual([]);
    expect(problems).toContainEqual({
      kind: "new-without-image",
      id: "criteo2027",
      name: "Criteo",
    });
  });
});

describe("reconcile — types", () => {
  it("écarte un type inconnu et le signale", () => {
    const { presence, problems } = run({
      apiSponsors: [api("Mystère", "Diamant", "https://x/m.png")],
    });

    expect(presence).toEqual([]);
    expect(problems).toContainEqual({
      kind: "unknown-type",
      name: "Mystère",
      type: "Diamant",
    });
  });
});

describe("reconcile — Meet&Greet", () => {
  it("pose meetgreet:true sur l'étoile du même nom", () => {
    const { presence } = run({
      apiSponsors: [
        api("KAIZEN Solutions", "Etoile", "https://x/kzs.webp"),
        api("KAIZEN Solutions", "Meet&Greet"),
      ],
    });

    expect(presence).toEqual([
      { id: "kaizen-solutions2027", type: "etoile", meetgreet: true },
    ]);
  });

  it("signale un Meet&Greet orphelin (sans étoile correspondante)", () => {
    const { problems } = run({
      apiSponsors: [api("Solo", "Meet&Greet")],
    });

    expect(problems).toContainEqual({ kind: "orphan-meetgreet", name: "Solo" });
  });

  it("signale plusieurs Meet&Greet", () => {
    const { problems } = run({
      apiSponsors: [
        api("A", "Etoile", "https://x/a.png"),
        api("A", "Meet&Greet"),
        api("B", "Meet&Greet"),
      ],
    });

    expect(problems).toContainEqual({ kind: "multiple-meetgreet", count: 2 });
  });
});

describe("reconcile — gel d'id et appariement inter-runs", () => {
  it("réutilise l'id figé du run précédent malgré une graphie API différente", () => {
    const { presence, additions } = run({
      apiSponsors: [api("KAIZEN Solutions", "Etoile", "https://x/kzs.webp")],
      previousPresence: [{ id: "kaizen", type: "etoile" }],
      catalog: [
        {
          id: "kaizen",
          name: "KAIZEN Solutions",
          source_url: "https://x/kzs.webp",
        },
      ],
    });

    expect(presence).toEqual([{ id: "kaizen", type: "etoile" }]);
    expect(additions).toEqual([]); // déjà au catalogue, pas de nouvelle entrée
  });
});

describe("reconcile — frontière de propriété", () => {
  it("ne télécharge jamais une entrée manuelle (sans source_url)", () => {
    const { downloads, additions } = run({
      apiSponsors: [api("CGI", "Flocon", "https://x/cgi.jpg")],
      previousPresence: [{ id: "cgi2022", type: "flocon" }],
      catalog: [
        { id: "cgi2022", name: "CGI", logo: "/img/sponsors/cgi.2022.jpg" },
      ],
    });

    expect(downloads).toEqual([]);
    expect(additions).toEqual([]);
  });

  it("rafraîchit une entrée gérée (avec source_url)", () => {
    const { downloads } = run({
      apiSponsors: [api("X", "Flocon", "https://x/new.png")],
      previousPresence: [{ id: "x2026", type: "flocon" }],
      catalog: [{ id: "x2026", name: "X", source_url: "https://x/old.png" }],
    });

    expect(downloads).toEqual([
      { id: "x2026", name: "X", sourceUrl: "https://x/new.png", isNew: false },
    ]);
  });
});

describe("reconcile — retraits", () => {
  it("retire et signale un sponsor disparu de l'API", () => {
    const { presence, removals, problems } = run({
      apiSponsors: [],
      previousPresence: [{ id: "gone2026", type: "flocon" }],
      catalog: [
        { id: "gone2026", name: "Gone", source_url: "https://x/g.png" },
      ],
    });

    expect(presence).toEqual([]);
    expect(removals).toEqual(["gone2026"]);
    expect(problems).toContainEqual({ kind: "removed", id: "gone2026" });
  });
});

describe("reconcile — dédoublonnage", () => {
  it("ignore un doublon d'id au même niveau", () => {
    const { presence } = run({
      apiSponsors: [
        api("Kelkoo Group", "Flocon", "https://x/k1.png"),
        api("KELKOO GROUP", "Flocon", "https://x/k2.png"),
      ],
    });

    expect(presence).toEqual([{ id: "kelkoo-group2027", type: "flocon" }]);
  });
});
