/* 
While (!Game-Over) (also maybe HALT if player presses space-bar?)
        AI decides between r,p,s

        Animated Countdown R...P...S...Shoot!
            
        If player hasnt selected
           Auto lose
            Displays flipped off animation to player
                Full game window?
        If player has selected
            Display player and ai selects
            switch
                playerSelect Rock:
                playerSelect Paper:...

                if(win)
                    gameWins++
                else if(!win)
                    gameLosses++
                setState == gameWins - gameLosses
                if(setState > 1 || setState < -1)
                    displays gameOver
                    If win do win stuff
                    if lose do lose stuff
                    play again?
                        if no, flips you off
                */
let fresh = true;
let setOver = false;
let setWins = 0, setLosses = 0;
let gameWins = 0, gameLosses = 0;
let numRounds = 0;
let playerWin = null;

// while (fresh) {
//     //ask if player wants to play a game of rps
// }
console.log("Here");
while (!setOver) {
    console.log("Here");
    let playerSelection = false;
    let botSelection = false;
    for (timer = 0; timer <= 3; timer++) {
        //Show a countdown
        setInterval(function () { console.log("Executed after 1 second"); }, 1000);
    }
    botSelection = botDecision();
    playerSelection = false;
    //get player selection
    if (!playerSelection) {
        gameLosses++;
        console.log("No player selection");
        //Animate a fuck you
    }
    else {
        let didWin = checkWin(playerSelection, botSelection);
        if (didWin) {
            gameWins++;
            console.log("Player win");
        }
        else {
            gameLosses++;
            console.log("Player win");
        }

        //Restart Screen
    }
    let score = gameWins - gameLosses;
    if (numRounds >= 3 || score >= 2 || score <= 2) {
        setOver = true;
    }
}

function botDecision() {
    let botDecision = Math.floor(Math.random() * 3);
    console.log(botDecision);
    switch (botDecision) {
        case 0:
            botDecision = "Rock";
            break;
        case 1:
            botDecision = "Paper";
            break;
        case 2:
            botDecision = "Scissors";
            break;
        default:
            console.log("Error in botDecision function");
            return -1;
    }
    return botDecision;
}

function checkWin(pSelect, bSelect) {
    const re = new RegExp('(Rock|Paper|Scissors)')
    if (!pSelect.match(re) || !bSelect.match(re)) {
        console.log("Bad values passed to checkWin")
        console.log(pSelect + bSelect);
        return -1;
    }
    let isWon = null;
    if (_.isEqual(pSelect, bSelect)) {
        didWin = null;
    }
    else {
        switch (pSelect) {
            case 'Rock':
                if (_.isEqual(bSelect, "Paper")) {
                    didWin = false;
                }
                else didWin = true;
                break;
            case 'Paper':
                if (bSelect == 'Scissors') {
                    didWin = false;
                }
                else didWin = true;
            case 'Scissors':
               if (bSelect == 'Rock') {
                    didWin = false;
                }
                else didWin = true; 
        }
    }
    return didWin;
}
