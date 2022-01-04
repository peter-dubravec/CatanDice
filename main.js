let result = [];

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

function drawRandomCard() {
  if (result.length < 12) {
    getAllPossibleDicesValues();
  }
  console.log(result.length);
  let randomAnswer = result[Math.floor(Math.random() * result.length)];

  let index = result.indexOf(randomAnswer);
  result.splice(index, 1);

  return randomAnswer;
}

function displayResult() {
  let resultDiv = document.querySelector(".result");
  resultDiv.textContent = drawRandomCard();
  resultDiv.classList.remove("active");

  setTimeout(() => {
    resultDiv.classList.add("active");
  }, 50);
}

let button = document.querySelector("button");

button.addEventListener("click", displayResult);

displayResult();
