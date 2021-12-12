const DOM = {
  form: null,
  image: null,
  location: null,
  vacationsContainer: null,
};

function init() {
  DOM.form = document.querySelector("#addVacationForm");
  DOM.image = DOM.form["image"];
  DOM.location = DOM.form["location"];
  DOM.vacationsContainer = document.querySelector("#vacationsContainer");
  const button = document.querySelector("#addButton");
  button.addEventListener("click", addVacation);
}

init();
function addVacation() {
  const locationValue = DOM.location.value;
  const imageValue = DOM.image.value;
  const vacation = getVacation(imageValue, locationValue);
  const vacationCard = getCardUI(vacation);
  if (!vacationCard) return;
  DOM.vacationsContainer.innerHTML += vacationCard;
}
function getCardUI(vacation) {
  if (typeof vacation !== "object") return;
  return `<div class='card' style='width: 18rem;'>
      <img src='${vacation.image}' class='card-img-top'>
      <div class='card-body'>
        <h5 class='card-title'>${vacation.location}</h5>
      </div>
    </div>
    `;
}

function getVacation(image, location) {
  return {
    image,
    location,
  };
}
