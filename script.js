"use strict";

/*

User Perspective Flow

if guess number is matched with secrect number display correct answer.
if guess number is below secrect number then display Too Low.
if guess number is above secrect number then display Too High.

Second Phase:
In our every wrong guess value of score need to be deducted by 1.
if score become 0 then display message "You lost the game!"

Third Phase:
If the guessed number and secretNumber match change background color to blue.
And after that input field also need to little wider.
Display the secrect number if our guess number is correct.
Get the highscore once game finish and update once get new Highscore.

*/

const againBtn = document.querySelector(".again");
let secretNumber = Math.trunc(Math.random() * 20 + 1);
const message = document.querySelector(".message");
const currentScore = document.querySelector(".score");
const numberInputField = document.querySelector(".number");
let guessNumber = document.querySelector(".guess");

// Initial Value of Score.
let score = 20;
let highScore = 0;

document.querySelector(".score").textContent = score;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no Input.
  if (!guess) {
    message.textContent = "🚫 No Number Inserted!";
  }
  // When Player Wins.
  else if (guess === secretNumber) {
    message.textContent = "🍾 Correct Answer!";
    document.querySelector("body").style.backgroundColor = "#56AA3F";
    document.querySelector(".number").textContent = secretNumber;
    numberInputField.style.width = "30rem";
    numberInputField.style.fontSize = "8rem";

    // Updating highscore:
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }

  // If the guess number is wrong!:
  else if (guess !== secretNumber) {
    if (score > 1) {
      message.textContent =
        guess < secretNumber ? "📉 Too Low!" : "📈 Too High!";
      score--;
      currentScore.textContent = score;
    } else {
      message.textContent = "😭 You Lost The Game!";
      currentScore.textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

// When Player click Again button.

againBtn.addEventListener("click", function () {
  // location.reload();
  score = 20;
  currentScore.textContent = score;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  message.textContent = "Start guessing...";
  guessNumber.value = "";
  numberInputField.textContent = "?";
  numberInputField.style.width = "15rem";
  numberInputField.style.fontSize = "5rem";
  document.querySelector("body").style.backgroundColor = "#222";
});
