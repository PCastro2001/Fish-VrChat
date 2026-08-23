import { FISH_CATALOG, MUTATION_NAMES } from "./data/fish-catalog.js";
import { searchFish } from "./domain/search-fish.js";

const get = <T extends Element>(selector: string): T => {
  const element = document.querySelector<T>(selector);
  if (!element) throw new Error(`Missing element: ${selector}`);
  return element;
};

const query = get<HTMLInputElement>("#fishQuery");
const habitat = get<HTMLSelectElement>("#habitatFilter");
const water = get<HTMLSelectElement>("#waterFilter");
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
fillOptions(weather, FISH_CATALOG.map(({ weather }) => weather).filter((value) => value !== "Any"));
fillOptions(time, FISH_CATALOG.map(({ timeOfDay }) => timeOfDay).filter((value) => value !== "Any"));

function render(): void {
  const matches = searchFish(FISH_CATALOG, {
    query: query.value,
    habitat: habitat.value,
    waterType: water.value,
    weather: weather.value,
    timeOfDay: time.value,
  });
  count.textContent = String(matches.length);
  results.innerHTML = matches.length ? matches.map((fish) => `
    <article class="fish-card">
      <span class="fish-habitat">${escapeHtml(fish.habitat)}</span>
      <h2>${escapeHtml(fish.name)}</h2>
      <dl>
        <div><dt>Agua</dt><dd>${escapeHtml(fish.waterType)}</dd></div>
        <div><dt>Clima</dt><dd>${escapeHtml(fish.weather)}</dd></div>
        <div><dt>Horario</dt><dd>${escapeHtml(fish.timeOfDay)}</dd></div>
      </dl>
    </article>`).join("") : `<div class="results-placeholder"><h2>Sin coincidencias</h2><p>Prueba quitando uno de los filtros.</p></div>`;
}

for (const control of [query, habitat, water, weather, time]) {
  control.addEventListener("input", render);
}
mutations.innerHTML = MUTATION_NAMES.map((name) =>
  `<span class="mutation-chip ${name === "Blessed" || name === "Cursed" ? "featured" : ""}">${escapeHtml(name)}</span>`,
).join("");
render();
