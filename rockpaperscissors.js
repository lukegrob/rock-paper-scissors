/*---PSEUDOCODE---
Click Rock/Paper/Scissors button
=> run playround function:
    get player choice from btn id
    getComputerChoice()
    determine round winner with comparisons
    update variables of score/round count
    update #roundScore

    CHECK points COUNT
    IF player a or b has 5:
        update #gameStatus with who won/draw
        remove listeners from rock/paper/scissor
        / buttons
        add Reset/New Game button underneath
        / options? OR instead of choices
        / modal popup maybe?
        / => refreshes all
    ELSE:
        update #gameStatus with 
        / paper beats rock etc.



*/

//window.addEventListener("load", (event) => {
//});

//DOM Elements
const choiceContainer = document.querySelector("#choiceContainer");
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

choiceContainer.addEventListener("click",function(e) {
    if(e.target !== choiceContainer) {
        // alert(e.target.textContent);
        playRound(e.target.textContent);
    }
});

const roundScore = document.querySelector("#roundScore");

const gameStatus = document.querySelector("#gameStatus");
// gameStatus.innerText = "Round 0";

// window.onbeforeunload = function(event) {
//     event.preventDefault();
// };

function getComputerChoice()
{   
    let compChoice = Math.floor((Math.random()*3)+1);
    //console.log(compChoice);
    switch(compChoice)
    {
        case(1):
            compChoice = "rock";
            break;
        case(2):
            compChoice = "paper";
            break;
        case(3):
            compChoice = "scissors";
    }
    return compChoice;
}

let humanScore = 0;
let computerScore = 0;
let gameOver = false;

function playRound(choice)
{   
    if(gameOver)
    {
        
    }
    else {
        let computerChoice = getComputerChoice();
        let humanChoice = choice.toLowerCase();;
        let roundMessage = "";

        if(humanChoice == computerChoice)
        {
            roundMessage = "DRAW!"
        }
        else if(humanChoice == "rock")
        {
            if(computerChoice == "paper")
            {
                roundMessage = "You Lose! Paper beats rock.";
                computerScore++;
            }
            else if(computerChoice == "scissors")
            {
                roundMessage = "You Win! Rock beats scissors.";
                humanScore++;
            }
        }
        else if(humanChoice == "paper")
            {
            if(computerChoice == "rock")
            {
                roundMessage = "You Win! Paper beats rock.";
                humanScore++;
            }
            else if(computerChoice == "scissors")
                {
                    roundMessage = "You Lose! Scissors beats paper.";
                    computerScore++;
                }
        }
        else if(humanChoice == "scissors")
            {
                if(computerChoice == "paper")
                {
                    roundMessage = "You Win! Scissors beats paper.";
                    humanScore++;
                }
                else if(computerChoice == "rock")
                {
                    roundMessage = "You Lose! Rock beats scissors.";
                    computerScore++;
                }
        }

        gameStatus.innerText = roundMessage;
        roundScore.innerText = `${humanScore} - ${computerScore}`;
        
        if((computerScore === 5) || (humanScore === 5))
        {
            gameOver = true;
            let winner ="";
            if(humanScore === 5){
                winner = "You won!";
            }
            else {
                winner = "You lost!";
            }

            roundScore.innerText = `${winner}\n` +
            `${humanScore} - ${computerScore}`;

            const resetButton = document.createElement("button");
            resetButton.innerText = "NEW GAME";
            resetButton.setAttribute("id","resetButton");
            document.body.insertBefore(resetButton, document.querySelector("footer"));
            resetButton.addEventListener("click",resetGame);
        }
        
    }   
}

function resetGame()
{
    gameOver = false;
    // window.location.reload(); this would be naughty
    humanScore = 0;
    computerScore = 0;
    roundScore.innerText = "0 - 0";
    gameStatus.innerText = "Make your choice to start the game:";
    document.querySelector("#resetButton").remove();
}