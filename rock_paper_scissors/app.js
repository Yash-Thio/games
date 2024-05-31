const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const buttons = document.querySelectorAll(".btn");
let userChoice, computerChoice;
let result;

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    userChoice = button.textContent;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  });
});
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log(randomNumber);

  if (randomNumber === 1) {
    computerChoice = "Rock";
  }
  if (randomNumber === 2) {
    computerChoice = "Scissors";
  }
  if (randomNumber === 3) {
    computerChoice = "Paper";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}
function getResult()
{
    if (computerChoice === userChoice) 
    {
        result = 'Draw';
    }
    if (computerChoice === 'Rock' && userChoice === 'Paper') 
    {
        result = 'You Win';
    }
    if (computerChoice === 'Rock' && userChoice === 'Scissors') 
    {
        result = 'You Lost';
    }
    if (computerChoice === 'Paper' && userChoice === 'Rock') 
    {
        result = 'You Lost';
    }
    if (computerChoice === 'Paper' && userChoice === 'Scissors')
    {
        result = 'You Win';
    }
    if (computerChoice === 'Scissors' && userChoice === 'Paper') 
    {
        result = 'You Lost';
    }
    if (computerChoice === 'Scissors' && userChoice === 'Rock') 
    {
        result = 'You Win';
    }
    console.log(result);
    resultDisplay.innerHTML = result ; 
}
