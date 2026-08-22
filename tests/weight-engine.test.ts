import { describe, expect, it } from "vitest";
import {
  calculateWeight,
  expectedWeight,
  expectedWeightPercentile,
  weightPercentile,
} from "../src/domain/weight-engine.js";

describe("weight engine", () => {
  it("uses the sine curve for the roll", () => {
    expect(weightPercentile(0, 0)).toBe(0);
    expect(weightPercentile(1, 0)).toBeCloseTo(1, 10);
  });

  it("limits a -90 Big Catch build to 89.10% of the range", () => {
    expect(weightPercentile(1, -90)).toBeCloseTo(0.8910065, 6);
  });

  it("raises the minimum percentile with +90 Big Catch", () => {
    expect(weightPercentile(0, 90)).toBeCloseTo(0.4539905, 6);
  });

  it("calculates the unmodified expected percentile exactly", () => {
    expect(expectedWeightPercentile(0)).toBeCloseTo(2 / Math.PI, 10);
  });

  it("calculates expected weight inside a fish range", () => {
    expect(expectedWeight({ minKg: 1, maxKg: 5 }, 0)).toBeCloseTo(3.546479, 6);
  });

  it("rejects invalid ranges", () => {
    expect(() => calculateWeight({ minKg: 5, maxKg: 1 }, 0.5, 0)).toThrow(
      RangeError,
    );
  });
});
