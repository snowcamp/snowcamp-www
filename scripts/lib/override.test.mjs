import { describe, expect, it } from "vitest";
import { decideLogo } from "./override.mjs";

const UPSTREAM = "6ab3095191762217390e57d6640e997dac3c05e2";
const OTHER = "f0a22c67b3feaee26953d48d53ba0b0cac5e0b8c";

const managed = (extra = {}) => ({
  id: "zenika2027",
  name: "Zenika",
  logo: "/img/sponsors/zenika.2027.svg",
  source_url: "https://cdn/logo_dark.svg",
  source_sha1: UPSTREAM,
  ...extra,
});

const pinned = (ignore_sha1 = UPSTREAM) =>
  managed({ source_sha1: OTHER, logo_override: { ignore_sha1 } });

describe("decideLogo sans override", () => {
  it("écrit le logo d'un sponsor inconnu du catalogue", () => {
    expect(
      decideLogo({
        existing: undefined,
        downloadedSha: UPSTREAM,
        targetExists: false,
        logoExists: false,
      }),
    ).toEqual({ action: "write" });
  });

  it("écrit quand l'amont a changé", () => {
    expect(
      decideLogo({
        existing: managed(),
        downloadedSha: OTHER,
        targetExists: true,
        logoExists: true,
      }).action,
    ).toBe("write");
  });

  it("écrit quand le sha est inchangé mais le fichier absent", () => {
    expect(
      decideLogo({
        existing: managed(),
        downloadedSha: UPSTREAM,
        targetExists: false,
        logoExists: false,
      }).action,
    ).toBe("write");
  });

  it("se contente des champs quand sha et fichier sont à jour", () => {
    expect(
      decideLogo({
        existing: managed(),
        downloadedSha: UPSTREAM,
        targetExists: true,
        logoExists: true,
      }),
    ).toEqual({ action: "patch-only" });
  });
});

describe("decideLogo avec override actif", () => {
  it("ne touche à rien quand le sha amont est celui qui est refusé", () => {
    expect(
      decideLogo({
        existing: pinned(),
        downloadedSha: UPSTREAM,
        targetExists: false,
        logoExists: true,
      }),
    ).toEqual({ action: "skip" });
  });

  it("accepte un sha épinglé en majuscules", () => {
    expect(
      decideLogo({
        existing: pinned(UPSTREAM.toUpperCase()),
        downloadedSha: UPSTREAM,
        targetExists: false,
        logoExists: true,
      }).action,
    ).toBe("skip");
  });

  it("signale un logo maintenu à la main qui a disparu du dépôt", () => {
    expect(
      decideLogo({
        existing: pinned(),
        downloadedSha: UPSTREAM,
        targetExists: false,
        logoExists: false,
      }),
    ).toEqual({
      action: "skip",
      problem: {
        kind: "override-missing-file",
        logo: "/img/sponsors/zenika.2027.svg",
      },
    });
  });
});

describe("decideLogo avec override périmé", () => {
  it("reprend le logo amont et signale la péremption", () => {
    const decision = decideLogo({
      existing: pinned(),
      downloadedSha: OTHER,
      targetExists: false,
      logoExists: true,
    });

    expect(decision.action).toBe("write");
    expect(decision.problem).toEqual({
      kind: "override-stale",
      ignoredSha1: UPSTREAM,
      upstreamSha1: OTHER,
    });
  });
});

describe("decideLogo avec override invalide", () => {
  it.each([
    ["absent", {}],
    ["vide", { ignore_sha1: "" }],
    ["tronqué", { ignore_sha1: "6ab3095" }],
    ["non hexadécimal", { ignore_sha1: "z".repeat(40) }],
  ])("ignore un override %s et le signale", (_, override) => {
    const decision = decideLogo({
      existing: managed({ logo_override: override }),
      downloadedSha: UPSTREAM,
      targetExists: true,
      logoExists: true,
    });

    expect(decision.action).toBe("patch-only");
    expect(decision.problem).toEqual({ kind: "override-invalid" });
  });
});
