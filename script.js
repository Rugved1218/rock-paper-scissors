let humanScore=0;
let compouterScore=0

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
    b.toLowerCase();
    return b;
}

const humanSelection=getHumanChoice()
const computerSelection=getComputerChoice()

function playRound(humanChoice,computerChoice){

    if(humanChoice==="rock" && computerChoice==="scissors"){
        console.log("You win! Rock beats Scissors");
        return 1;
    }
    else if(humanChoice==="rock" && computerChoice==="paper"){
        console.log("You lose! Paper beats Rock");
        return 0;
    }
    else if(humanChoice==="rock" && computerChoice==="rock"){
        console.log("That's a tie!");
        return 2;
    }
    else if(humanChoice==="paper" && computerChoice==="scissors"){
        console.log("You lose! Scissors beats Paper");
        return 0;
    }
    else if(humanChoice==="paper" && computerChoice==="paper"){
        console.log("That's a tie!");
        return 2
    }
    else if(humanChoice==="paper" && computerChoice==="rock"){
        console.log("You win! Paper beats Rock");
        return 1;
    }
    else if(humanChoice==="scissors" && computerChoice==="scissors"){
        console.log("That's a tie!");
        return 2;
    }
    else if(humanChoice==="scissors" && computerChoice==="paper"){
        console.log("You win! Scissors beats Paper");
        return 1;
    }
    else if(humanChoice==="scissors" && computerChoice==="scissors"){
        console.log("You lose! Rock beats Scissors");
        return 0;
    }
    else{};
    
    
}


playRound(humanSelection,computerSelection);

function playGame(){
    for(let i=0;i<=5;i++){
        playRound(humanChoice,computerChoice)
    }
    
}
