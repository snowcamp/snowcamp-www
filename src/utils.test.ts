import { describe, it, expect } from "vitest";
import { getLang, editionYear } from "./utils";

describe("getLang", () => {
  it("détecte l'anglais via /en/ dans le path", () => {
    expect(getLang(new URL("https://snowcamp.io/en/cfp"))).toBe("en");
  });
  it("détecte l'anglais via un path se terminant par /en", () => {
    expect(getLang(new URL("https://snowcamp.io/en"))).toBe("en");
  });
  it("retourne fr par défaut", () => {
    expect(getLang(new URL("https://snowcamp.io/"))).toBe("fr");
    expect(getLang(new URL("https://snowcamp.io/cfp"))).toBe("fr");
  });
  it("ne confond pas un segment contenant 'en' avec l'anglais", () => {
    expect(getLang(new URL("https://snowcamp.io/agenda"))).toBe("fr");
  });
});

describe("editionYear", () => {
  it("extrait l'année des 4 premiers caractères de l'ancre", () => {
    expect(editionYear("2027-01-14T08:00")).toBe(2027);
    expect(editionYear("2016-01-01")).toBe(2016);
  });
});
