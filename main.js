let result = [];
let randomAnswer;
let prev;

function getAllPossibleDicesValues() {
  result = [];
  const dice1 = [1, 2, 3, 4, 5, 6];
  const dice2 = [1, 2, 3, 4, 5, 6];

  for (let i = 0; i < dice1.length; i++) {
    for (j = 0; j < dice2.length; j++) {
      result.push(dice1[i] + dice2[j]);
    }
  }
}

function removeDrawnCardFromArray(index) {
  result.splice(index, 1);
}

function reduceProbabilityOfSameCards(curr) {
  if (curr === prev) {
    if (Math.random() < 0.33) {
      randomAnswer = drawCard();
    }
  }
  prev = curr;
}

function drawCard() {
  let randomAnswer = result[Math.floor(Math.random() * result.length)];
  return randomAnswer;
}

function drawRandomCard() {
  if (result.length < 12) {
    getAllPossibleDicesValues();
  }

  randomAnswer = drawCard();
  reduceProbabilityOfSameCards(randomAnswer);
  removeDrawnCardFromArray(result.indexOf(randomAnswer));

  return randomAnswer;
}

function displayResult() {
  let resultDiv = document.querySelector(".result");
  resultDiv.classList.remove("active");
  resultDiv.textContent = drawRandomCard();

  setTimeout(() => {
    resultDiv.classList.add("active");
  }, 50);
}

let button = document.querySelector("button");

button.addEventListener("click", displayResult);

displayResult();
