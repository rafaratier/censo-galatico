export const createPlanetsButtons = (planets, parentElement) => {
  planets.forEach(planet => {
    const btn = document.createElement('button');

    btn.id = planet.name;
    btn.className = 'planet-btn';
    btn.textContent = planet.name;

    parentElement.appendChild(btn);
  });
};

export const showPlanetData = (planetData, parentElement) => {
  const dataElems = parentElement.children;

  for (let elem of dataElems) {
    const infoName = elem.id.split('-')[1];
    elem.textContent = `${infoName}: ${planetData[infoName]}`;
  };
};