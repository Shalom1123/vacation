const DOM = {
  form: null,
  image: null,
  location: null,
  vacationsContainer: null,
};
const CONFIG = { VACATIONS: "vacations" };
const state = { vacations: [] };

function init() {
  DOM.form = document.querySelector("#addVacationForm");
  DOM.image = DOM.form["image"];
  DOM.location = DOM.form["location"];
  DOM.vacationsContainer = document.querySelector("#vacationsContainer");
  const button = document.querySelector("#addButton");
  button.addEventListener("click", addVacation);

  try {
    const vacationsString = localStorage.getItem(CONFIG.VACATIONS);
    const vacations = JSON.parse(vacationsString);
    if (!vacations) return;
    state.vacations = vacations;
  } catch {}
  draw(state.vacations);
}

init();

function draw(vacations) {
  DOM.vacationsContainer.innerHTML = "";
  for (let index = 0; index < vacations.length; index++) {
    const vacationCard = getCardUI(vacations[index]);
    if (!vacationCard) return;
    DOM.vacationsContainer.append(vacationCard);
  }
}

function addVacation() {
  const locationValue = DOM.location.value;
  const imageValue = DOM.image.value;
  const vacation = getVacation(imageValue, locationValue);
  state.vacations.push(vacation);
  localStorage.setItem(CONFIG.VACATIONS, JSON.stringify(state.vacations));
  draw(state.vacations);
}

setTimeout((_bgcolor) => {
  colorbody = document.getElementById("body");
  colobody =document.innerHTML
  
}, 3000);

