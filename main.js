import { getAllPlanets, getPlanet, getResidents } from "./data-helpers.js";
import { createPlanetsButtons, showPlanetData, showResidentsData } from "./dom-helpers.js";

const allPlanets = await getAllPlanets();

const searchElem = document.getElementById('search-input');

const btnContainer = document.getElementById('planets-btn-container');

const planetCardElem = document.getElementById('planet-info-card');

const residentsTableElem = document.getElementById('residents-info-table');

createPlanetsButtons(allPlanets, btnContainer);

document.addEventListener('click', ({ target }) => {
  if (target.className == 'planet-btn') {
    const selectedPlanet = getPlanet(target.id, allPlanets);
    showPlanetData(selectedPlanet, planetCardElem);
  };
});

let searchDebouncer;
searchElem.addEventListener('input', ({ target }) => {
  clearTimeout(searchDebouncer);

  searchDebouncer = setTimeout(async () => {
    const searchTerm = target.value.toLowerCase();
    const selectedPlanet = getPlanet(searchTerm, allPlanets);

    if (selectedPlanet == undefined || searchTerm.length == 0) return;

    const residents = await getResidents(selectedPlanet.residents);

    showPlanetData(selectedPlanet, planetCardElem);
    showResidentsData(residents, residentsTableElem);

  }, 800);
});