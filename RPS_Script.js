var playerChoice = "Rock"
var computerChoice = "Paper"

function getComputerChoice(){
    var int = Math.floor(Math.random() * 3);
    if (int == 0){
        computerChoice = "Rock"
        console.log("The computer chose " + computerChoice);
    }
    if (int == 1){
        computerChoice = "Paper"
        console.log("The computer chose " + computerChoice);
    }
    if (int == 2){
        computerChoice = "Scissors"
        console.log("The computer chose " + computerChoice);
    }
}

function rock(){
    playerChoice = "Rock";
    console.log(playerChoice);
}

function paper(){
    playerChoice = "Paper";
    console.log(playerChoice);
}

function scissors(){
    playerChoice = "Scissors";
    console.log(playerChoice);
}

function battle(){

    // Assign computers choice to computerChoice
    getComputerChoice();

    // If player's choice is scissors
    if (playerChoice == "Scissors"){
        if (computerChoice == "Paper"){
            console.log("Player Wins!");
        }
        else if (computerChoice == "Scissors"){
            console.log("Draw!");
        }
        else if (computerChoice == "Rock"){
            console.log("Player Loses!");
        }
    }

    // If player's choice is paper
    if (playerChoice == "Paper"){
        if (computerChoice == "Paper"){
            console.log("Draw!");
        }
        else if (computerChoice == "Scissors"){
            console.log("Player Loses!");
        }
        else if (computerChoice == "Rock"){
            console.log("Player Wins!");
        }
    }

        // If player's choice is rock
        if (playerChoice == "Rock"){
            if (computerChoice == "Paper"){
                console.log("Player Loses!");
            }
            else if (computerChoice == "Scissors"){
                console.log("Player Wins!");
            }
            else if (computerChoice == "Rock"){
                console.log("Draw!");
            }
        }
}