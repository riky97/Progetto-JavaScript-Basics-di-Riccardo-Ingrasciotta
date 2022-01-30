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

  // Implementazione tasti + e - per aumentare e diminuire il counter
  let CounterButton = () => {
    let counterButton = document.querySelector("#dButton");
    let imgPlus = document.createElement("img");
    imgPlus.classList.add("img");
    imgPlus.classList.add("plus");
    imgPlus.alt = "+";
    imgPlus.src = "./img/plus.png";
    imgPlus.setAttribute("onclick", "PlusMinusClick('+')");
    let imgMinus = document.createElement("img");
    imgMinus.classList.add("img");
    imgMinus.classList.add("minus");
    imgMinus.alt = "-";
    imgMinus.src = "./img/minus.png";
    imgMinus.setAttribute("onclick", "PlusMinusClick('-')");
    let restart = document.createElement("div");
    restart.textContent = "RESTART";
    restart.className = "restart";
    restart.setAttribute("onclick", "Restart()");
    counterButton.appendChild(imgMinus);
    counterButton.appendChild(restart);
    counterButton.appendChild(imgPlus);
  };
  // Richiamo delle funzioni
  TextButton();
  CounterButton();
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
