function getComputerChoice()
{
    const a=Math.floor((Math.random())*3)+1;
    if(a===1){
        return "rock";
    }
    else if(a===2){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanChoice(){
    const b=prompt("Enter your choice out of rock,paper and scissors");
    console.log(b)
}

getHumanChoice()