import { describe, expect, it } from "vitest";
import { buildReport } from "./report.mjs";

describe("buildReport", () => {
  it("liste ajouts, retraits et une checklist de problèmes", () => {
    const md = buildReport({
      additions: [{ id: "kls-group2027", name: "KLS GROUP" }],
      removals: ["kaizen"],
      patched: [],
      problems: [
        { kind: "new-without-image", id: "criteo2027", name: "Criteo" },
        { kind: "removed", id: "kaizen" },
      ],
    });

    expect(md).toContain("## Ajouts");
    expect(md).toContain("`kls-group2027` — KLS GROUP");
    expect(md).toContain("## Retraits");
    expect(md).toContain("## ⚠️ À traiter manuellement");
    expect(md).toContain(
      "[ ] Nouveau sponsor **sans logo** — `criteo2027` (Criteo)",
    );
    expect(md).toContain(
      "[ ] Sponsor **retiré** (disparu de l'API) — `kaizen`",
    );
  });

  it("détaille les anomalies d'override", () => {
    const md = buildReport({
      problems: [
        {
          kind: "override-stale",
          id: "zenika2027",
          name: "Zenika",
          ignoredSha1: "6ab3095191762217390e57d6640e997dac3c05e2",
          upstreamSha1: "f0a22c67b3feaee26953d48d53ba0b0cac5e0b8c",
        },
        {
          kind: "override-missing-file",
          id: "criteo2027",
          name: "Criteo",
          logo: "/img/sponsors/criteo.2027.avif",
        },
        { kind: "override-invalid", id: "cgi2022", name: "CGI" },
      ],
    });

    expect(md).toContain("[ ] Override périmé — `zenika2027` (Zenika)");
    // les deux shas complets, pour repiquer le nouveau dans ignore_sha1
    expect(md).toContain("`6ab3095191762217390e57d6640e997dac3c05e2`");
    expect(md).toContain("`f0a22c67b3feaee26953d48d53ba0b0cac5e0b8c`");
    expect(md).toContain(
      "[ ] Override actif mais fichier absent — `criteo2027` (Criteo)",
    );
    expect(md).toContain("[ ] Override invalide — `cgi2022` (CGI)");
  });

  it("omet les sections vides", () => {
    const md = buildReport({ additions: [{ id: "x2027", name: "X" }] });

    expect(md).toContain("## Ajouts");
    expect(md).not.toContain("## Retraits");
    expect(md).not.toContain("## ⚠️ À traiter manuellement");
  });

  it("dégrade proprement un type de problème inconnu", () => {
    const md = buildReport({ problems: [{ kind: "weird", foo: 1 }] });
    expect(md).toContain("weird —");
  });
});
