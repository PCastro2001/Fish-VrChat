import { describe, expect, it } from "vitest";
import { searchFish } from "../src/domain/search-fish.js";

const catalog = [
  { name: "Goldfish", habitat: "Coconut Bay", waterType: "Freshwater", weather: "Clear", timeOfDay: "Any" },
  { name: "Lionfish", habitat: "Crescent Isle", waterType: "Saltwater", weather: "Any", timeOfDay: "Night" },
] as const;

describe("searchFish", () => {
  it("filters by partial name without case sensitivity", () => {
    expect(searchFish(catalog, { query: "GOLD" })).toHaveLength(1);
  });

  it("treats Any fish conditions as compatible with a selected condition", () => {
    expect(searchFish(catalog, { weather: "Stormy" }).map(({ name }) => name)).toContain("Lionfish");
  });

  it("combines habitat, water and time filters", () => {
    expect(searchFish(catalog, {
      habitat: "Crescent Isle",
      waterType: "Saltwater",
      timeOfDay: "Night",
    })).toHaveLength(1);
  });
});
