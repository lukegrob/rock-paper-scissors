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

choiceContainer.addEventListener("click",function(e){
    if(e.target !== choiceContainer) {
        // alert(e.target.textContent);
    }
})

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

function getHumanChoice()
{
    let theHumanChoice = prompt(`Score: ${humanScore} : ${computerScore} || Make your choice: Rock, Paper, or Scissors`,"").trim().toLowerCase();
    
    switch(theHumanChoice)
    {
        case("rock"):
        case("paper"):
        case("scissors"):
            break;
        default:
            theHumanChoice = "paper";
    }

    return theHumanChoice;
}

let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

function resetGame()
{
    // window.location.reload(); this would be naughty
    humanScore = 0;
    computerScore = 0;
    roundCount = 0;
}

function playGame()
{
    while(humanScore+computerScore <5)
    {
        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice();
        console.log(playRound(humanSelection,computerSelection));   
    }
        if(humanScore>computerScore)
        {
            bigResult = "-----YOU WON!-----";
            
        }
        else{
            bigResult = "-----YOU LOST!-----";
        }

        console.log(bigResult);
        alert(bigResult);
    

    function playRound(humanChoice,computerChoice)
    {   
    
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

    return roundMessage;
    }

}