'use strict';
//selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const current0El = document.getElementById('current--0');
const current1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores;
let currentScore;
let activePlayer;
let playing;

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
scores = [0, 0]
activePlayer = 0;
currentScore = 0;
playing = true;


const switchPlayer = function(){
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
}


//rolling dice functionality
btnRoll.addEventListener('click', function(){
    if(playing){
    //1.generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //2.display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3.check if rolled 1
    if (dice !== 1){
        //add dice 3to current score
        currentScore += dice;
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    } else {
        //switch to the next player
        switchPlayer();
    }
}
})


btnHold.addEventListener('click', function(){
    if(playing){
    //1. add current score to active player score
    scores[activePlayer] += currentScore; //scores[1] = scores[1] + currentScore
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
    //2.check if players score is >= 100
    if(scores[activePlayer] >= 10){
        //finish the game 
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        diceEl.classList.add('hidden');
    } else {
    //switch to the next player
    switchPlayer();
    }
}
})


const init = function(){
    scores = [0, 0]
    activePlayer = 0;
    currentScore = 0;
    playing = true;
    current0El.textContent = 0;
    current1El.textContent = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
diceEl.classList.add('hidden');
player0El.classList.remove('player--winner');
player1El.classList.remove('player--winner');
player0El.classList.add('player--active');
player1El.classList.remove('player--active');
}

init();


btnNew.addEventListener('click', init);