export const createButton = (btnText) => {
  const btnContainer = document.getElementById('planets-btn-container');

  const btn = document.createElement('button');

  btn.id = btnText;
  btn.className = 'planet-btn';
  btn.textContent = btnText;

  btnContainer.appendChild(btn);
};