window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");

  // Implementazione valore
  let TextButton = () => {
    let divCounter = document.querySelector("#divCounter");
    let text_counter = document.createElement("span");
    text_counter.id = "textCounter";
    text_counter.textContent = 0;
    divCounter.appendChild(text_counter);
  };

  // Implementazione tasto + del counter
  let PlusButton = () => {
    let counterButton = document.querySelector("#dButton");
    let imgPlus = document.createElement("img");
    imgPlus.classList.add("img");
    imgPlus.classList.add("plus");
    imgPlus.alt = "+";
    imgPlus.src = "./img/plus.png";
    imgPlus.setAttribute("onclick", "PlusMinusClick('+')");
    counterButton.appendChild(imgPlus);
  };

  // Implementazione tasto - del counter
  let MinusButton = () => {
    let counterButton = document.querySelector("#dButton");
    let imgMinus = document.createElement("img");
    imgMinus.classList.add("img");
    imgMinus.classList.add("minus");
    imgMinus.alt = "-";
    imgMinus.src = "./img/minus.png";
    imgMinus.setAttribute("onclick", "PlusMinusClick('-')");
    counterButton.appendChild(imgMinus);
  };

  // Implementazione tasto restart del counter
  let RestartButton = () => {
    let counterButton = document.querySelector("#dButton");
    let restart = document.createElement("img");
    restart.classList.add("img");
    restart.classList.add("minus");
    restart.alt = "restart";
    restart.src = "./img/restart.png";
    restart.setAttribute("onclick", "Restart()");
    counterButton.appendChild(restart);
  };

  // Richiamo delle funzioni
  TextButton();
  MinusButton();
  RestartButton();
  PlusButton();
});

// Cambio valore
let PlusMinusClick = (ele) => {
  let text_counter = document.querySelector("#textCounter");
  ele === "-"
    ? (text_counter.textContent = --text_counter.textContent)
    : (text_counter.textContent = ++text_counter.textContent);
};

// Restart button con conferma
let Restart = () => {
  if (window.confirm("Are you sure to restart counter?")) {
    let text_counter = document.querySelector("#textCounter");
    text_counter.textContent = 0;
  }
};
