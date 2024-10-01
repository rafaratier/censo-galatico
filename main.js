import { getAllPlanets } from "./data-helpers.js";
import { createButton } from "./dom-helpers.js";

const allPlanets = await getAllPlanets();

allPlanets.forEach(planet => {
  createButton(planet.name);
});
