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

const secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = secretNumber;

const message = document.querySelector('.message');

document.querySelector('.check').addEventListener('click' , function() {
    const guess  = Number(document.querySelector('.guess').value);
    
    if(!guess) {  
        message.textContent = "🚫 No Number Inserted!";
    }
    else if(guess === secretNumber) {
        message.textContent = "🍾 Correct Answer!";
    }
    else if(guess < secretNumber) {
        message.textContent = "📉 Too Low!";
    }
    else if(guess > secretNumber) {
        message.textContent = "📈 Too High!";
    }
} )