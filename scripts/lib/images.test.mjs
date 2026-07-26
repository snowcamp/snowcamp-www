import { describe, expect, it } from "vitest";
import sharp from "sharp";
import { sha1, toAvif } from "./images.mjs";

const png = (height) =>
  sharp({
    create: {
      width: 400,
      height,
      channels: 3,
      background: { r: 10, g: 20, b: 30 },
    },
  })
    .png()
    .toBuffer();

describe("sha1", () => {
  it("est déterministe et distinct selon le contenu", () => {
    const a = Buffer.from("logo-a");
    const b = Buffer.from("logo-b");
    expect(sha1(a)).toBe(sha1(Buffer.from("logo-a")));
    expect(sha1(a)).not.toBe(sha1(b));
  });
});

describe("toAvif", () => {
  it("produit un avif redimensionné à la hauteur cible", async () => {
    const avif = await toAvif(await png(600));
    const meta = await sharp(avif).metadata();

    expect(meta.format).toBe("heif"); // conteneur avif
    expect(meta.height).toBe(200);
  });

  it("n'agrandit pas une source plus petite que la cible", async () => {
    const avif = await toAvif(await png(120));
    const meta = await sharp(avif).metadata();

    expect(meta.height).toBe(120);
  });
});
