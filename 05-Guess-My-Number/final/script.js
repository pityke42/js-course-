'use strict';
/*
console.log(document.querySelector('.message').textContent); 
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
document.querySelector('.number').textContent = secretNumber;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

const displayScore = function(score){
    document.querySelector('.score').textContent = score;
}
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    //when there is no input
    if(!guess){
        // document.querySelector('.message').textContent = 'No number!';
        displayMessage('No number!')
    //when the player won
    } else if(guess === secretNumber){
        displayMessage('Correct number!')
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '36rem';
        document.querySelector('.title').textContent = 'You won';

        if(score > highscore){
            document.querySelector('.highscore').textContent = highscore;
            highscore = score;
        }
    } else if(guess !== secretNumber){
        if(score > 1){
            // document.querySelector('.message').textContent = guess > secretNumber ? 'Too high number!' : 'Too low number!';
            displayMessage(guess > secretNumber ? 'Too high number!' : 'Too low number!')
            score--;
            // document.querySelector('.score').textContent = score;
            displayScore(score)
        } else {
            displayMessage('You lost the game');
            // document.querySelector('.score').textContent = 0;
            displayScore(0)
        }
    }

    //when the guessed number is too high
    // } else if(guess > secretNumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = 'Too high number!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You lost the game';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // //when the guessed number is too low
    // } else if(guess < secretNumber){
    //     document.querySelector('.message').textContent = 'Too low number!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     if(score < 1){
    //         document.querySelector('.message').textContent = 'You lost the game';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
    
    
});
//coding challange 1

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber =  Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = secretNumber 
    document.querySelector('.score').textContent = score;
    document.querySelector('.title').textContent = 'Guess my number!' 
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = null;
    document.querySelector('body').style.backgroundColor = '#222'; 
    document.querySelector('.message').textContent = 'Start guessing the number the number...';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.highscore').textContent = highscore 
})

