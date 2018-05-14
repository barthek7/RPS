const buttonRock = document.querySelector('[data-move="rock"]');
const buttonPaper = document.querySelector('[data-move="paper"]');
const buttonScissors = document.querySelector('[data-move="scissors"]');
const ROCK = 1;
const SCISSORS = 3;
const pS = document.querySelector('.player');
const Cs = document.querySelector('.computer');
const buttonNewGame = document.querySelector('.new-game-button');

var playerScore = 0;
var computerScore = 0;
var numberOfRounds;
var drawNumber = function () {
    return Math.floor(Math.random() * 3 + 1);
};

var playerMove = function (event) {
    var computerPlay = drawNumber();
    var playerPlay = this.dataset.move;
    if (playerScore === numberOfRounds || computerScore === numberOfRounds) {
        if (playerScore === numberOfRounds) {
            document.getElementById('number-of-rounds').innerText = numberOfRounds + " " + 'YOU WON THE ENTIRE GAME!';
        } else {
            document.getElementById('number-of-rounds').innerText = numberOfRounds + " " + 'YOU LOST THE ENTIRE GAME!';
        }


        return;
    }
    switch (playerPlay) {
        case 'rock':
            if (computerPlay === ROCK) {
                result("DRAW, you picked " + playerPlay.toUpperCase() + " and computer picked ROCK");
            } else if (computerPlay === SCISSORS) {
                result("You WIN, you picked " + playerPlay.toUpperCase() + " and computer picked SCISSORS");
                playerScore++;
                setScores(playerScore, computerScore);
            } else {
                result("You LOST, you picked " + playerPlay.toUpperCase() + " and computer picked PAPER");
                computerScore++;
                setScores(playerScore, computerScore);
            }
            break;
        case 'paper':
            if (computerPlay === ROCK) {
                result("You WIN, you picked " + playerPlay.toUpperCase() + " and computer picked ROCK");
                playerScore++;
                setScores(playerScore, computerScore);
            } else if (computerPlay === SCISSORS) {
                result("You LOST, you picked " + playerPlay.toUpperCase() + " and computer picked SCISSORS");
                computerScore++;
                setScores(playerScore, computerScore);
            } else {
                result("DRAW, you picked " + playerPlay.toUpperCase() + " and computer picked PAPER");
            }
            break;
        case 'scissors':
            if (computerPlay === ROCK) {
                result("You LOST, you picked " + playerPlay.toUpperCase() + " and computer picked ROCK");
                computerScore++;
                setScores(playerScore, computerScore);
            } else if (computerPlay === SCISSORS) {
                result("DRAW, you picked " + playerPlay.toUpperCase() + " and computer picked SCISSORS");
            } else {
                result("You WIN, you picked " + playerPlay.toUpperCase() + " and computer picked PAPER");
                playerScore++;
                setScores(playerScore, computerScore);
            }
            break;


    }
};

var result = function (gameResult) {
    var output = document.getElementById('output');
    output.innerText = gameResult;
};
var setScores = function (playerScore, computerScore) {
    pS.innerText = playerScore;
    Cs.innerText = computerScore;
};

var setNumberOfRounds = function () {
    playerScore = 0;
    computerScore = 0;
    setScores(playerScore, computerScore);
    var rounds = parseInt(prompt('How many win rounds ends the game?'));
    while (isNaN(rounds)) {
        rounds = prompt('How many win rounds ends the game?(Enter a number, please)');
    }
    numberOfRounds = rounds;
    document.getElementById('number-of-rounds').innerText = numberOfRounds;
};

buttonRock.addEventListener('click', playerMove);
buttonPaper.addEventListener('click', playerMove);
buttonScissors.addEventListener('click', playerMove);
setScores(playerScore, computerScore);
buttonNewGame.addEventListener('click', setNumberOfRounds);


