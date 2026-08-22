import {
  BOBBERS,
  ENCHANTMENTS,
  LINES,
  RODS,
} from "./data/equipment-catalog.js";
import {
  createRecommendationPlan,
  type FutureBuildRecommendation,
  type RecommendationPlan,
} from "./domain/create-recommendation-plan.js";
import type { BuildRecommendation } from "./domain/recommend-builds.js";
import type {
  FishingContext,
  RecommendationGoal,
} from "./domain/recommend-builds.js";
import type { BuildSelection, BuildStats } from "./domain/equipment.js";
import type { PlayerProgress } from "./domain/player-progress.js";

const form = document.querySelector<HTMLFormElement>("#advisorForm");
const equipmentContainer = document.querySelector<HTMLDivElement>("#ownedEquipment");
const enchantmentContainer =
  document.querySelector<HTMLDivElement>("#ownedEnchantments");
const results = document.querySelector<HTMLElement>("#recommendations");

if (!form || !equipmentContainer || !enchantmentContainer || !results) {
  throw new Error("Advisor UI could not be initialized.");
}

const STARTER_IDS = new Set([
  "stick-and-string",
  "basic-line",
  "basic-bobber",
]);

function escapeHtml(value: string): string {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character] ?? character,
  );
}

function renderOwnedOptions(): void {
  const equipment = [...RODS, ...LINES, ...BOBBERS].filter(
    ({ id }) => !STARTER_IDS.has(id),
  );

  equipmentContainer.innerHTML = equipment
    .map(
      ({ id, name, type }) =>
        `<label><input name="ownedEquipment" type="checkbox" value="${escapeHtml(id)}"> ${escapeHtml(name)} <small>${type}</small></label>`,
    )
    .join("");

  enchantmentContainer.innerHTML = ENCHANTMENTS.map(
    ({ id, name, rarity }) =>
      `<label><input name="ownedEnchantments" type="checkbox" value="${escapeHtml(id)}"> ${escapeHtml(name)} <small>${rarity}</small></label>`,
  ).join("");
}

function checkedValues(name: string): ReadonlySet<string> {
  return new Set(
    [...document.querySelectorAll<HTMLInputElement>(
      `input[name="${name}"]:checked`,
    )].map(({ value }) => value),
  );
}

function numberValue(selector: string): number {
  const input = document.querySelector<HTMLInputElement>(selector);
  return Math.max(0, Number(input?.value ?? 0));
}

function collectInventory(): ReadonlyMap<string, number> {
  return new Map(
    [...document.querySelectorAll<HTMLInputElement>("[data-material]")]
      .map((input): [string, number] => [
        input.dataset.material ?? "",
        Math.max(0, Math.trunc(Number(input.value) || 0)),
      ])
      .filter(([id, quantity]) => id.length > 0 && quantity > 0),
  );
}

function collectProgress(): PlayerProgress {
  return {
    level: Math.max(1, Math.trunc(numberValue("#level"))),
    money: Math.trunc(numberValue("#money")),
    fishSold: Math.trunc(numberValue("#fishSold")),
    completedIndexLocations: Math.min(
      8,
      Math.trunc(numberValue("#indexLocations")),
    ),
    completedQuestIds: checkedValues("quests"),
    unlockedLocationIds: checkedValues("locations"),
    availableVendorIds: checkedValues("vendors"),
    ownedEquipmentIds: checkedValues("ownedEquipment"),
    ownedEnchantmentIds: checkedValues("ownedEnchantments"),
    inventory: collectInventory(),
  };
}

function collectContext(): FishingContext {
  const time = document.querySelector<HTMLSelectElement>("#timeOfDay")?.value;
  const weather = document.querySelector<HTMLSelectElement>("#weather")?.value;
  const context: FishingContext = {};

  if (time === "DAY" || time === "NIGHT") {
    context.timeOfDay = time;
  }
  if (
    weather === "CLEAR" ||
    weather === "FOG" ||
    weather === "RAIN" ||
    weather === "STORM"
  ) {
    context.weather = weather;
  }

  return context;
}

function formatMoney(value: number): string {
  return value === 0 ? "Sin costo" : `$${value.toLocaleString("es-CL")}`;
}

function gearMarkup(selection: BuildSelection): string {
  return [
    `🎣 ${selection.rod.name}`,
    `🧵 ${selection.line.name}`,
    `🔵 ${selection.bobber.name}`,
    selection.enchantment
      ? `✨ ${selection.enchantment.name}`
      : "✨ Sin encantamiento",
  ]
    .map((item) => `<span>${escapeHtml(item)}</span>`)
    .join("");
}

function statsMarkup(stats: BuildStats): string {
  const values = [
    ["Luck", stats.luck],
    ["Strength", stats.strength],
    ["Expertise", stats.expertise],
    ["Attraction", `${Math.round(stats.attractionRate * 100)}%`],
    ["Big Catch", stats.bigCatch],
    ["Max kg", stats.maxWeightKg.toLocaleString("es-CL")],
  ];

  return values
    .map(
      ([label, value]) =>
        `<div class="stat"><strong>${escapeHtml(String(value))}</strong><small>${escapeHtml(String(label))}</small></div>`,
    )
    .join("");
}

function availableCard(
  recommendation: BuildRecommendation,
  label: string,
  primary = false,
): string {
  return `
    <article class="result-card ${primary ? "primary" : ""}">
      <span class="result-label">${escapeHtml(label)}</span>
      <h3>${escapeHtml(recommendation.selection.rod.name)}</h3>
      <div class="gear-list">${gearMarkup(recommendation.selection)}</div>
      <div class="price">${formatMoney(recommendation.purchaseCost)}</div>
      <div class="stats">${statsMarkup(recommendation.stats)}</div>
      <ul class="reason-list">
        ${recommendation.reasons.map((reason) => `<li>${escapeHtml(reason)}</li>`).join("")}
      </ul>
    </article>`;
}

function futureCard(future: FutureBuildRecommendation): string {
  return `
    <article class="result-card">
      <span class="result-label">PRÓXIMO OBJETIVO REALISTA</span>
      <h3>${escapeHtml(future.selection.rod.name)}</h3>
      <div class="gear-list">${gearMarkup(future.selection)}</div>
      <div class="price">Costo: ${formatMoney(future.upgradeCost)}</div>
      <div class="stats">${statsMarkup(future.stats)}</div>
      <ul class="blocker-list">
        ${future.blockers.map((blocker) => `<li>${escapeHtml(blocker)}</li>`).join("")}
      </ul>
    </article>`;
}

function renderPlan(plan: RecommendationPlan): void {
  results.innerHTML = `
    <div class="results-grid">
      ${availableCard(plan.bestAvailable, "MEJOR DISPONIBLE", true)}
      ${
        plan.economicAlternative
          ? availableCard(plan.economicAlternative, "ALTERNATIVA ECONÓMICA")
          : `<article class="result-card"><span class="result-label">ALTERNATIVA ECONÓMICA</span><h3>Ya estás optimizando al mínimo costo</h3><p class="privacy-note">No existe una combinación más barata que mejore tu situación actual.</p></article>`
      }
      ${
        plan.futureUpgrade
          ? futureCard(plan.futureUpgrade)
          : `<article class="result-card"><span class="result-label">PRÓXIMO OBJETIVO REALISTA</span><h3>Sin mejoras pendientes</h3><p class="privacy-note">No encontramos equipamiento bloqueado que supere esta build.</p></article>`
      }
    </div>`;
  results.scrollIntoView({ behavior: "smooth", block: "start" });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const goalValue =
    document.querySelector<HTMLSelectElement>("#goal")?.value ?? "BALANCED";
  const plan = createRecommendationPlan(
    collectProgress(),
    goalValue as RecommendationGoal,
    collectContext(),
  );
  renderPlan(plan);
});

renderOwnedOptions();
