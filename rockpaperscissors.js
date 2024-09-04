/*---PSEUDOCODE---



*/
function getComputerChoice()
{   let result;
    let compChoice = Math.ceil(Math.random()*3);
    //console.log(compChoice);
    switch(compChoice)
    {
        case(1):
            result = "rock";
            break;
        case(2):
            result = "paper";
            break;
        case(3):
            result = "scissors";
    }
    return result;
}

console.log(getComputerChoice());