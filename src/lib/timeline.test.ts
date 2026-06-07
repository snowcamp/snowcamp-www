import { describe, it, expect } from "vitest";
import { instant, long, type ShortStep, type LongStep } from "./timeline";

const short: ShortStep = { title: "CFP", date: "11-01" };
const span: LongStep = { title: "SnowCamp", begin: "01-14", end: "01-16" };

describe("instant", () => {
  it("est vrai pour un ShortStep (présence de date)", () => {
    expect(instant(short)).toBe(true);
  });
  it("est faux pour un LongStep", () => {
    expect(instant(span)).toBe(false);
  });
});

describe("long", () => {
  it("est vrai pour un LongStep (présence de begin)", () => {
    expect(long(span)).toBe(true);
  });
  it("est faux pour un ShortStep", () => {
    expect(long(short)).toBe(false);
  });
});
