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
