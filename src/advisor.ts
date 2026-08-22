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

function requireElement<T extends Element>(selector: string): T {
  const element = document.querySelector<T>(selector);
  if (!element) {
    throw new Error(`Required UI element not found: ${selector}`);
  }
  return element;
}

const form = requireElement<HTMLFormElement>("#advisorForm");
const equipmentContainer =
  requireElement<HTMLDivElement>("#ownedEquipment");
const enchantmentContainer =
  requireElement<HTMLDivElement>("#ownedEnchantments");
const results = requireElement<HTMLElement>("#recommendations");

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

function selectedRodEnchantments(): ReadonlyMap<string, string> {
  return new Map(
    [...document.querySelectorAll<HTMLSelectElement>(
      "[data-rod-enchantment]",
    )]
      .filter(({ value }) => value.length > 0)
      .map((select): [string, string] => [
        select.dataset.rodEnchantment ?? "",
        select.value,
      ])
      .filter(([rodId]) => rodId.length > 0),
  );
}

function renderRodEnchantments(): void {
  const previous = selectedRodEnchantments();
  const ownedIds = checkedValues("ownedEquipment");
  const ownedRods = RODS.filter(
    ({ id }) => id === "stick-and-string" || ownedIds.has(id),
  );
  const options = [
    `<option value="">Sin encantamiento</option>`,
    ...ENCHANTMENTS.map(
      ({ id, name, rarity }) =>
        `<option value="${escapeHtml(id)}">[${rarity}] ${escapeHtml(name)}</option>`,
    ),
  ].join("");

  enchantmentContainer.innerHTML = ownedRods
    .map(({ id, name }) => {
      const selected = previous.get(id) ?? "";
      return `
        <div class="rod-enchantment-row">
          <span>🎣 ${escapeHtml(name)}</span>
          <select data-rod-enchantment="${escapeHtml(id)}">
            ${options}
          </select>
        </div>`;
    })
    .join("");

  for (const select of document.querySelectorAll<HTMLSelectElement>(
    "[data-rod-enchantment]",
  )) {
    select.value = previous.get(select.dataset.rodEnchantment ?? "") ?? "";
  }
}

function equipmentOptions(
  equipment: readonly { id: string; name: string }[],
): string {
  return equipment
    .filter(({ id }) => !STARTER_IDS.has(id))
    .map(
      ({ id, name }) =>
        `<label><input name="ownedEquipment" type="checkbox" value="${escapeHtml(id)}"><span>${escapeHtml(name)}</span></label>`,
    )
    .join("");
}

function renderOwnedOptions(): void {
  const groups = [
    {
      id: "rods",
      icon: "🎣",
      title: "Cañas",
      description: "Selecciona las cañas únicas de tu inventario.",
      options: equipmentOptions(RODS),
    },
    {
      id: "lines",
      icon: "🧵",
      title: "Líneas",
      description: "Marca las líneas que ya compraste o desbloqueaste.",
      options: equipmentOptions(LINES),
    },
    {
      id: "bobbers",
      icon: "🔵",
      title: "Flotadores",
      description: "Marca los flotadores disponibles para tus builds.",
      options: equipmentOptions(BOBBERS),
    },
  ];

  equipmentContainer.innerHTML = groups
    .map(
      ({ id, icon, title, description, options }) => `
        <section class="equipment-group equipment-group--${id}">
          <div class="equipment-group__heading">
            <span aria-hidden="true">${icon}</span>
            <div>
              <h3>${title}</h3>
              <p>${description}</p>
            </div>
          </div>
          <div class="equipment-options">${options}</div>
        </section>`,
    )
    .join("");

  equipmentContainer.addEventListener("change", renderRodEnchantments);
  renderRodEnchantments();
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
    rodEnchantments: selectedRodEnchantments(),
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
