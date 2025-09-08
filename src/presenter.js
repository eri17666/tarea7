import sumar from "./sumador";
import TennisScorer from "./tennisScorer.js";

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