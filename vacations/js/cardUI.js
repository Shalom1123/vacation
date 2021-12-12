function getCardUI(vacation) {
  const outerDiv = document.createElement("div");
  const innerDiv = document.createElement("div");
  const frontDiv = document.createElement("div");
  const backDiv = document.createElement("div");
  outerDiv.classList.add("flip-card");
  innerDiv.classList.add("flip-card-inner");
  frontDiv.classList.add("flip-card-front");
  backDiv.classList.add("flip-card-back");
  backDiv.innerHTML = `<h1>${Math.ceil(Math.random() * 999)}$</h1>`;
  outerDiv.style.width = "18rem";
  outerDiv.style.height = "300px";

  const img = document.createElement("img");
  img.src = vacation.image;
  img.className = "card-img-top p-3";

  const divBody = document.createElement("div");
  divBody.className = "card-body";

  const title = document.createElement("h5");
  title.innerText = vacation.location;
  title.className = "card-title";

  divBody.append(title);
  const deleteButton = _getDeleteButton();
  outerDiv.append(innerDiv);
  frontDiv.append(img, divBody, deleteButton);
  innerDiv.append(frontDiv);
  innerDiv.append(backDiv);

  outerDiv.addEventListener("mouseenter", function () {
    // this.querySelector(".deleteMeButton").classList.remove("invisible");
    // this.querySelector(".deleteMeButton").style.display = "block";
    this.querySelector(".deleteMeButton").classList.add("fade-in-visible");
  });

  outerDiv.addEventListener("mouseleave", function () {
    this.querySelector(".deleteMeButton").style.display = "none";
  });

  return outerDiv;

  function _getDeleteButton() {
    const button = document.createElement("button");
    // button.className = "btn btn-danger" WORKS
    button.classList.add("btn", "btn-danger");
    // button.classList.add("fade-in-visible");
    button.style.display = "none";
    button.classList.add("deleteMeButton");
    const trashIcon = document.createElement("i");
    trashIcon.classList.add("bi", "bi-x");
    button.append(trashIcon);

    return button;
  }
}

//
// document.querySelectorAll(".deleteMeButton").forEach(function(btn){ btn.style.visibility = "visible" })
// target all deleteMeButtons and show the button inside the outerDiv
//
