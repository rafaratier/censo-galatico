const allPlanetsEndpoint = 'https://swapi.dev/api/planets';

export const getPlanet = (planetName, allPlanets) => {
  return allPlanets.find(p => p.name.toLowerCase()
    .includes(planetName.toLowerCase()));
}

export const getAllPlanets = async () => {
  let cachedPlanets = getCachedData('planets');

  if (cachedPlanets == null) {
    return await fetchAndCachePlanets();
  }

  return cachedPlanets;
};

const fetchData = async (url) => {
  try {
    const res = await fetch(url);

    if (res.ok) return await res.json();

    throw new Error(`Error fetching data: status ${res.status}`);
  } catch (error) {
    console.error(error);
  }
};

const fetchAndCachePlanets = async () => {
  let url = allPlanetsEndpoint;
  let allPlanets = [];

  while (url) {
    const data = await fetchData(url);

    allPlanets.push(...data.results);

    url = data.next;
  }

  cacheData('planets', allPlanets);

  return allPlanets;
};

function getCachedData(key) {
  return JSON.parse(sessionStorage.getItem(key));
};

function cacheData(key, data) {
  sessionStorage.setItem(key, JSON.stringify(data));
};