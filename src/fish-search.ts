import { FISH_CATALOG, MUTATION_BENEFITS } from "./data/fish-catalog.js";
import { searchFish } from "./domain/search-fish.js";

const get = <T extends Element>(selector: string): T => {
  const element = document.querySelector<T>(selector);
  if (!element) throw new Error(`Missing element: ${selector}`);
  return element;
};

const query = get<HTMLInputElement>("#fishQuery");
const habitat = get<HTMLSelectElement>("#habitatFilter");
const water = get<HTMLSelectElement>("#waterFilter");
const rarity = get<HTMLSelectElement>("#rarityFilter");
const weather = get<HTMLSelectElement>("#weatherFilter");
const time = get<HTMLSelectElement>("#timeFilter");
const results = get<HTMLElement>("#fishResults");
const count = get<HTMLElement>("#resultCount");
const mutations = get<HTMLElement>("#mutationCatalog");

const escapeHtml = (value: string): string =>
  value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char] ?? char);

function fillOptions(select: HTMLSelectElement, values: readonly string[]): void {
  select.insertAdjacentHTML("beforeend", [...new Set(values)].sort().map((value) =>
    `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`,
  ).join(""));
}

fillOptions(habitat, FISH_CATALOG.map(({ habitat }) => habitat));
fillOptions(water, FISH_CATALOG.map(({ waterType }) => waterType));
fillOptions(rarity, FISH_CATALOG.flatMap(({ rarity }) => rarity ? [rarity] : []));
fillOptions(weather, FISH_CATALOG.map(({ weather }) => weather).filter((value) => value !== "Any"));
fillOptions(time, FISH_CATALOG.map(({ timeOfDay }) => timeOfDay).filter((value) => value !== "Any"));

function render(): void {
  const matches = searchFish(FISH_CATALOG, {
    query: query.value,
    habitat: habitat.value,
    waterType: water.value,
    rarity: rarity.value,
    weather: weather.value,
    timeOfDay: time.value,
  });
  count.textContent = String(matches.length);
  results.innerHTML = matches.length ? matches.map((fish) => `
    <article class="fish-card">
      <div class="fish-card__visual">
        ${fish.imageUrl ? `<img src="${escapeHtml(fish.imageUrl)}" alt="" loading="lazy">` : `<span aria-hidden="true">🐟</span>`}
      </div>
      <div class="fish-card__body">
        <div class="fish-card__meta">
          <span class="fish-habitat">${escapeHtml(fish.habitat)}</span>
          ${fish.rarity ? `<span class="rarity-badge rarity-${escapeHtml(fish.rarity.toLowerCase())}">${escapeHtml(fish.rarity)}</span>` : ""}
        </div>
        <h2>${escapeHtml(fish.name)}</h2>
        <dl>
        <div><dt>Agua</dt><dd>${escapeHtml(fish.waterType)}</dd></div>
        <div><dt>Clima</dt><dd>${escapeHtml(fish.weather)}</dd></div>
        <div><dt>Horario</dt><dd>${escapeHtml(fish.timeOfDay)}</dd></div>
      </dl>
      ${fish.minWeight && fish.maxWeight ? `<div class="weight-range"><span>Peso base</span><strong>${escapeHtml(fish.minWeight)} — ${escapeHtml(fish.maxWeight)}</strong></div>` : ""}
      </div>
    </article>`).join("") : `<div class="results-placeholder"><h2>Sin coincidencias</h2><p>Prueba quitando uno de los filtros.</p></div>`;
}

for (const control of [query, habitat, water, rarity, weather, time]) {
  control.addEventListener("input", render);
}
mutations.innerHTML = MUTATION_BENEFITS.map(({ name, valueMultiplier, poolBonus }) => `
  <article class="mutation-card ${valueMultiplier >= 3 ? "featured" : ""}">
    <span class="mutation-card__multiplier">${valueMultiplier}×</span>
    <h3>${escapeHtml(name)}</h3>
    <p>Multiplica el valor de venta del pez por <strong>${valueMultiplier}×</strong>.</p>
    ${poolBonus ? `<small>${escapeHtml(poolBonus)}</small>` : ""}
  </article>
`).join("");
render();
