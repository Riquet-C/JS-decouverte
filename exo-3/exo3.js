// you can write js here
console.log('exo-3');

let playerInput = prompt('Pierre, Papier ou Ciseau ?');

function getPlayerChoice(playerInput) {
    playerChoice = playerInput.toLowerCase();
    if (playerChoice === 'bomb' || playerChoice === 'pierre' || playerChoice === 'papier' || playerChoice === 'ciseau') {
        return playerChoice;
    } else {
        console.log("Vous devez choisir: Pierre, Papier ou Ciseau");
    }
}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 2)
    if (computerChoice === 0) {
        computerChoice = 'pierre';

    } else if (computerChoice === 1) {
        computerChoice = 'papier';

    } else if (computerChoice === 2) {
        computerChoice = 'ciseau';
    }
    return computerChoice;
}

function findWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'Egalité'
    }
    else if (playerChoice === 'bomb') {
        return 'Gagné !';
    }
    else {
        if (playerChoice === 'pierre' ) {
            if (computerChoice === 'ciseau'){
                return 'Gagné !';
            }
            else {
                return 'Perdu !';
            }
        }
        if (playerChoice === 'papier' ) {
            if (computerChoice === 'pierre'){
                return 'Gagné !';
            }
            else {
                return 'Perdu !';
            }
        }
        if (playerChoice === 'ciseau' ) {
            if (computerChoice === 'papier'){
                return 'Gagné !';
            }
            else {
                return 'Perdu !';
            }
        }
    }
}

function playGame(){
    let uChoice = getPlayerChoice(playerInput);
    let computerChoice = getComputerChoice();
    console.log("l'ordinateur à choisi: " + computerChoice);
    console.log("Vous avez choisi: " + uChoice);
    console.log(findWinner(uChoice, computerChoice));
}

playGame();

