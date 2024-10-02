import { getAllPlanets, getPlanet } from "./data-helpers.js";
import { createPlanetsButtons, showPlanetData } from "./dom-helpers.js";

const allPlanets = await getAllPlanets();

const searchElem = document.getElementById('search-input');

const btnContainer = document.getElementById('planets-btn-container');

const planetCard = document.getElementById('planet-info-card');

createPlanetsButtons(allPlanets, btnContainer);

document.addEventListener('click', ({ target }) => {
  if (target.className == 'planet-btn') {
    const selectedPlanet = getPlanet(target.id, allPlanets);
    showPlanetData(selectedPlanet, planetCard);
  };
});

searchElem.addEventListener('input', ({ target }) => {
  const searchTerm = target.value.toLowerCase();
  const selectedPlanet = getPlanet(searchTerm, allPlanets);
  if (selectedPlanet != undefined) showPlanetData(selectedPlanet, planetCard);
});