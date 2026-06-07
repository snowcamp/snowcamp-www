import { describe, it, expect } from "vitest";
import { formatDuration } from "./duration";

describe("formatDuration", () => {
  it("retourne 0 seconde / 0 second pour <= 0", () => {
    expect(formatDuration(0, "fr")).toBe("0 seconde");
    expect(formatDuration(-10, "fr")).toBe("0 seconde");
    expect(formatDuration(0, "en")).toBe("0 second");
    expect(formatDuration(-10, "en")).toBe("0 second");
  });

  it("singularise la première unité", () => {
    expect(formatDuration(1, "fr")).toBe("1 seconde");
    expect(formatDuration(3600, "fr")).toBe("1 heure");
    expect(formatDuration(3600, "en")).toBe("1 hour");
  });

  it("pluralise au-delà de 1 (sauf 'mois')", () => {
    expect(formatDuration(120, "fr")).toBe("2 minutes");
    expect(formatDuration(120, "en")).toBe("2 minutes");
    // 'mois' invariable en français
    const twoMonths = 2 * 30 * 24 * 3600;
    expect(formatDuration(twoMonths, "fr")).toBe("2 mois");
    expect(formatDuration(twoMonths, "en")).toBe("2 months");
  });

  it("ne garde que les deux plus grosses unités", () => {
    // 1 jour + 2 heures + 3 minutes -> seules les 2 premières sont gardées
    const d = 24 * 3600 + 2 * 3600 + 3 * 60;
    expect(formatDuration(d, "fr")).toBe("1 jour et 2 heures");
    expect(formatDuration(d, "en")).toBe("1 day and 2 hours");
  });

  it("saute les unités nulles", () => {
    // 1 jour + 5 minutes (pas d'heures) -> jour puis minutes
    const d = 24 * 3600 + 5 * 60;
    expect(formatDuration(d, "fr")).toBe("1 jour et 5 minutes");
  });

  it("joint avec 'et' en fr et 'and' en en", () => {
    const d = 2 * 3600 + 30 * 60;
    expect(formatDuration(d, "fr")).toBe("2 heures et 30 minutes");
    expect(formatDuration(d, "en")).toBe("2 hours and 30 minutes");
  });
});
