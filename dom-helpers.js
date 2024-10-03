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

export const showResidentsData = (residents, parentElement) => {
  const tbodyElem = parentElement.getElementsByTagName('tbody')[0];

  tbodyElem.innerHTML = '';

  residents.forEach(resident => {
    const newRow = tbodyElem.insertRow();
    const nameCell = newRow.insertCell();
    const birthCell = newRow.insertCell();
    nameCell.textContent = resident.name;
    birthCell.textContent = resident.birth_year;
  });
};