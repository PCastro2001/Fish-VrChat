export interface SourceConflict {
  entity: string;
  field: string;
  currentSiteValue: number;
  laborboyWorkbookValue: number;
  status: "NEEDS_REVIEW";
}

export const SOURCE_CONFLICTS: readonly SourceConflict[] = [
  { entity: "Stick and String", field: "bigCatch", currentSiteValue: 0, laborboyWorkbookValue: -100, status: "NEEDS_REVIEW" },
  { entity: "Lazy", field: "luck", currentSiteValue: 0, laborboyWorkbookValue: 10, status: "NEEDS_REVIEW" },
  { entity: "Lazy", field: "expertise", currentSiteValue: 10, laborboyWorkbookValue: 75, status: "NEEDS_REVIEW" },
  { entity: "Impatient", field: "luck", currentSiteValue: 0, laborboyWorkbookValue: -30, status: "NEEDS_REVIEW" },
  { entity: "Impatient", field: "expertise", currentSiteValue: -30, laborboyWorkbookValue: 0, status: "NEEDS_REVIEW" },
  { entity: "Unstable", field: "strength", currentSiteValue: 0, laborboyWorkbookValue: -10, status: "NEEDS_REVIEW" },
  { entity: "Money Maker", field: "attractionRate", currentSiteValue: 0.2, laborboyWorkbookValue: 0, status: "NEEDS_REVIEW" },
  { entity: "Money Maker", field: "bigCatch", currentSiteValue: 0, laborboyWorkbookValue: 20, status: "NEEDS_REVIEW" },
] as const;
