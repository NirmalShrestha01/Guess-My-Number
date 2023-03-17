'use strict';

/*

// console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = "🍾 Correct Number";

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;


document.querySelector('.guess').value = 15;

*/

// if guess number is matched with secrect number display correct answer.
// if guess number is below secrect number then display Too Low.
// if guess number is above secrect number then display Too High.

// Second Phase:
// If our every wrong guess value of score need to be deducted by 1.
// if score become 0 then display message "You lost the game!"


const secretNumber = Math.trunc(Math.random() * 20 + 1);
const message = document.querySelector('.message');
const highestScore = document.querySelector('.score');
let score = 20;




document.querySelector('.number').textContent = secretNumber;
document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click' , function() {
    const guess  = Number(document.querySelector('.guess').value);
    
    if(!guess) {  
        message.textContent = "🚫 No Number Inserted!";
    }
    else if(guess === secretNumber) {
        message.textContent = "🍾 Correct Answer!";
    }
    else if(guess < secretNumber) {

        if(score > 1) {
        message.textContent = "📉 Too Low!";
        score--;
        highestScore.textContent = score;
        }
        else {
            message.textContent = "You Lost The Game!";
            highestScore.textContent = 0;
        }
        
    }
    else if(guess > secretNumber) {
        if(score > 1) {
            message.textContent = "📈 Too High!";
            score--;
            highestScore.textContent = score;
        }else {
            message.textContent = "You Lost The Game!";
            highestScore.textContent = 0;
        }      
    }
} )