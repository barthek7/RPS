const buttonRock = document.querySelector('[data-move="rock"]');
const buttonPaper = document.querySelector('[data-move="paper"]');
const buttonScissors = document.querySelector('[data-move="scissors"]');
const ROCK = 1;
const SCISSORS = 3;

var drawNumber = function () {
    return Math.floor(Math.random() * 3 + 1);
};

var playerMove = function (event) {
    var computerPlay = drawNumber();
    var playerPlay = this.dataset.move;
    console.log(playerPlay);
    switch(playerPlay){
        case 'rock':
            if(computerPlay === ROCK){
                result("DRAW, you picked " + playerPlay.toUpperCase() + " and computer picked ROCK" );
            }else if(computerPlay === SCISSORS) {
                result("You WIN, you picked " + playerPlay.toUpperCase() + " and computer picked SCISSORS");
            }else {
                result("You LOST, you picked " + playerPlay.toUpperCase() + " and computer picked PAPER");
            }
            break;
        case 'paper':
            if(computerPlay === ROCK){
                result("You WIN, you picked " + playerPlay.toUpperCase() + " and computer picked ROCK" );
            }else if(computerPlay === SCISSORS) {
                result("You LOST, you picked " + playerPlay.toUpperCase() + " and computer picked SCISSORS");
            }else {
                result("DRAW, you picked " + playerPlay.toUpperCase() + " and computer picked PAPER");
            }
            break;
        case 'scissors':
            if(computerPlay === ROCK){
                result("You LOST, you picked " + playerPlay.toUpperCase() + " and computer picked ROCK" );
            }else if(computerPlay === SCISSORS) {
                result("DRAW, you picked " + playerPlay.toUpperCase() + " and computer picked SCISSORS");
            }else {
                result("You WIN, you picked " + playerPlay.toUpperCase() + " and computer picked PAPER");
            }
            break;
    }
};

var result = function(gameResult) {
    var output = document.getElementById('output');
    output.innerText = gameResult;
};

buttonRock.addEventListener('click', playerMove);
buttonPaper.addEventListener('click', playerMove);
buttonScissors.addEventListener('click', playerMove);

