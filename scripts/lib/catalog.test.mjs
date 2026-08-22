import { describe, expect, it } from "vitest";
import { parse } from "yaml";
import {
  appendEntries,
  avifFilename,
  buildEntry,
  logoFilename,
  patchEntry,
  serializeEntry,
} from "./catalog.mjs";

const base = `sponsors:
  # entrée historique curée à la main
  - name: CGI
    id: cgi2022
    logo: /img/sponsors/cgi.2022.jpg
    link:
      fr: https://www.cgi.com/fr
      en: https://www.cgi.com/en
    description:
      fr: >
        Founded in 1976, CGI is among
        the largest IT firms.
      en: >
        Founded in 1976, CGI is among
        the largest IT firms.
`;

describe("logoFilename", () => {
  it("suit la convention <slug>.<année>.avif", () => {
    expect(logoFilename("KLS GROUP", 2027)).toBe("kls-group.2027.avif");
  });
});

describe("avifFilename", () => {
  it("forge un nom depuis le sponsor quand aucun logo n'existe encore", () => {
    expect(avifFilename(undefined, "KLS GROUP", 2027)).toBe(
      "kls-group.2027.avif",
    );
  });

  it("conserve le basename existant et force l'extension avif", () => {
    expect(avifFilename("/img/sponsors/zenika.2027.svg", "Zenika", 2027)).toBe(
      "zenika.2027.avif",
    );
  });

  it("laisse intact un basename déjà en avif", () => {
    expect(
      avifFilename("/img/partners/2019/manning.avif", "Manning", 2027),
    ).toBe("manning.avif");
  });

  it("ne prend pas un suffixe d'année pour une extension", () => {
    expect(avifFilename("/img/sponsors/zenika.2027", "Zenika", 2027)).toBe(
      "zenika.2027.avif",
    );
  });
});

describe("appendEntries", () => {
  it("ajoute une entrée sans altérer une seule ligne existante", () => {
    const entry = buildEntry({
      id: "kls-group2027",
      name: "KLS GROUP",
      logo: "/img/sponsors/kls-group.2027.avif",
      sourceUrl: "https://x/kls.png",
      sourceSha1: "abc123",
    });

    const out = appendEntries(base, [entry]);

    // le préfixe (tout l'existant) est conservé octet pour octet
    expect(out.startsWith(base)).toBe(true);
    const parsed = parse(out);
    expect(parsed.sponsors.map((s) => s.id)).toEqual([
      "cgi2022",
      "kls-group2027",
    ]);
    expect(parsed.sponsors[1]).toMatchObject({
      name: "KLS GROUP",
      source_url: "https://x/kls.png",
      source_sha1: "abc123",
      link: { fr: "", en: "" },
    });
  });

  it("produit un élément de liste correctement indenté", () => {
    const yaml = serializeEntry(
      buildEntry({
        id: "x2027",
        name: "X",
        logo: "l",
        sourceUrl: "u",
        sourceSha1: "s",
      }),
    );
    expect(yaml).toMatch(/^ {2}- name: X\n {4}id: x2027\n/);
  });
});

describe("patchEntry", () => {
  const managed = `${base}  - name: KLS GROUP
    id: kls-group2027
    logo: /img/sponsors/kls-group.2027.avif
    source_url: https://x/old.png
    source_sha1: oldhash
`;

  it("met à jour un champ existant d'une entrée gérée sans toucher aux autres entrées", () => {
    const out = patchEntry(managed, "kls-group2027", {
      source_sha1: "newhash",
      logo: "/img/sponsors/kls-group.2027.avif",
    });

    const parsed = parse(out);
    expect(
      parsed.sponsors.find((s) => s.id === "kls-group2027").source_sha1,
    ).toBe("newhash");
    // l'entrée historique reste intacte
    expect(out).toContain("# entrée historique curée à la main");
    expect(parsed.sponsors.find((s) => s.id === "cgi2022").logo).toBe(
      "/img/sponsors/cgi.2022.jpg",
    );
  });

  it("insère un champ absent en fin de bloc d'entrée", () => {
    const out = patchEntry(managed, "kls-group2027", { booth: "12" });
    expect(
      parse(out).sponsors.find((s) => s.id === "kls-group2027").booth,
    ).toBe("12");
  });

  it("est un no-op si l'id est absent", () => {
    expect(patchEntry(managed, "inconnu", { source_sha1: "x" })).toBe(managed);
  });
});
