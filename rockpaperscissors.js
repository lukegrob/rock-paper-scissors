/*---PSEUDOCODE---



*/
function getComputerChoice()
{   
    let compChoice = Math.ceil(Math.random()*3);
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
    let theHumanChoice = prompt("Make your choice: Rock, Paper, or Scissors","").trim().toLowerCase();
    
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

        //return roundMessage;
        console.log(roundMessage);
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

playRound(humanSelection,computerSelection);

console.log("Comp: " + computerScore);
console.log("Human:" + humanScore);







