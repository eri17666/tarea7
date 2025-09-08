import sumar from "./sumador";
import TennisScorer from "./tennisScorer.js";
import calculate from "./Totalizadordeventa.js";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});


const scorer = new TennisScorer();
const scoreDiv = document.querySelector("#score");
const player1Btn = document.querySelector("#player1-btn");
const player2Btn = document.querySelector("#player2-btn");

function updateScore() {
  scoreDiv.textContent = scorer.showScore();

  if (scorer.showScore().startsWith("Game for Player")) {
    player1Btn.disabled = true;
    player2Btn.disabled = true;
  }
}

player1Btn.addEventListener("click", () => {
  scorer.player1Scores();
  updateScore();
});

player2Btn.addEventListener("click", () => {
  scorer.player2Scores();
  updateScore();
});

const totalizerForm = document.querySelector("#totalizer-form");
const qtyInput = document.querySelector("#qty");
const priceInput = document.querySelector("#price");
const stateSelect = document.querySelector("#state");
const resultDiv = document.querySelector("#result");

totalizerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const qty = parseInt(qtyInput.value, 10);
  const price = parseFloat(priceInput.value);
  const state = stateSelect.value;

  try {
    const r = calculate({ qty, price, state });

    resultDiv.innerHTML = `
      <p><strong>Subtotal:</strong> $${r.subtotal}</p>
      <p><strong>Descuento aplicado:</strong> ${r.discountRate * 100}%</p>
      <p><strong>Monto descuento:</strong> -$${r.discount}</p>
    `;
  } catch (err) {
    resultDiv.innerHTML = `<p style="color:red;">Error: ${err.message}</p>`;
  }

});