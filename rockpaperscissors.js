/*---PSEUDOCODE---
Click Rock/Paper/Scissors button
run playround function:
    get player choice from btn id
    getComputerChoice()
    determine round winner with comparisons
    update variables of score/round count
    
    CHECK points COUNT.
    IF player a or b has 5:
        update DOM score
        replace "make choice" with who won/draw
        remove listeners from rock/paper/scissor
        / buttons
        add Reset/New Game button underneath
        / options? OR instead of choices
        / => refreshes all
    ELSE:
        update DOM score
        replace "make choice" with
        / "paper beats rock etc"



*/
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

playGame();