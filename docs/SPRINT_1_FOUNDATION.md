# Sprint 1 — TypeScript foundation

## Objective

Create a typed and testable domain layer without changing the current user-facing application in `index.html`.

## Included

- Vite and TypeScript configuration.
- Vitest test configuration through package scripts.
- Canonical equipment and enchantment types.
- Normalized catalogs from the Laborboy workbook:
  - 16 rods.
  - 10 lines.
  - 10 bobbers.
  - 42 enchantments.
- Build-stat aggregation.
- Exact sine-curve weight engine.
- Source-conflict registry.
- Unit tests for the first domain rules.

## Canonical units

- Weight: kilograms.
- Attraction: decimal ratio (`0.25 = 25%`).
- Money: integer game coins.
- Luck, Strength, Expertise and Big Catch: game points.
- Missing values: `null`, never `"-"` or `"Blank"`.

## Important limitation

The new catalog uses the Laborboy workbook as its imported candidate source. Records that disagree with the current `index.html` are marked `CONFLICTED` and listed in `src/data/source-conflicts.ts`. They must be validated before the new engine replaces the legacy calculations.

## Local setup

```bash
npm install
npm run typecheck
npm test
npm run dev
```

The legacy application remains available through the root `index.html`. The TypeScript modules are not connected to the UI yet.

## Definition of Done

- `index.html` remains unchanged.
- TypeScript strict mode is enabled.
- Every imported catalog row has a stable ID.
- Units are normalized.
- Known source conflicts are explicit.
- Weight formulas have deterministic unit tests.
- Build-stat calculations have unit tests.
