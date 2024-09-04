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
    let humanChoice = prompt("Make your choice: Rock, Paper, or Scissors","").trim().toLowerCase();
    
    switch(humanChoice)
    {
        case("rock"):
        case("paper"):
        case("scissors"):
            break;
        default:
            humanChoice = "paper";
    }

    return humanChoice;
}

console.log(getComputerChoice());
console.log(getHumanChoice());







