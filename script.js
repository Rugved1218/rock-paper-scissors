let humanScore=0;
let compouterScore=0;

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
    bl=b.toLowerCase();
    return bl;
}

function playRound(humanChoice,computerChoice){

    if(humanChoice==="rock" && computerChoice==="scissors"){
        console.log("You win! Rock beats Scissors");
        humanScore++;
    }
    else if(humanChoice==="rock" && computerChoice==="paper"){
        console.log("You lose! Paper beats Rock");
        compouterScore++;
    }
    else if(humanChoice==="rock" && computerChoice==="rock"){
        console.log("That's a tie!");
        humanScore++;
        compouterScore++;
    }
    else if(humanChoice==="paper" && computerChoice==="scissors"){
        console.log("You lose! Scissors beats Paper");
        compouterScore++;
    }
    else if(humanChoice==="paper" && computerChoice==="paper"){
        console.log("That's a tie!");
        humanScore++;
        compouterScore++;
    }
    else if(humanChoice==="paper" && computerChoice==="rock"){
        console.log("You win! Paper beats Rock");
        humanScore++;
    }
    else if(humanChoice==="scissors" && computerChoice==="scissors"){
        console.log("That's a tie!");
        humanScore++;
        compouterScore++;
    }
    else if(humanChoice==="scissors" && computerChoice==="paper"){
        console.log("You win! Scissors beats Paper");
        humanScore++;
    }
    else if(humanChoice==="scissors" && computerChoice==="scissors"){
        console.log("You lose! Rock beats Scissors");
        compouterScore++;
    }
    else{};
    
    
}

function playGame(){
    for(let i=1;i<=5;i++){
        console.log("Round ",i)
        let userChoice=getHumanChoice();
        console.log("Your Choice: ",userChoice);
        let computerChoice=getComputerChoice();
        console.log("Computer Choice: ",computerChoice);

        playRound(userChoice,computerChoice);
        console.log(" ")

        console.log("Scores at end of Round ",i," :")
        console.log("Your Score: ",humanScore);
        console.log("Computer Score: ",compouterScore);

        console.log(" ");
        
    } 

    console.log(" ");

    console.log("Final Scores :")
    console.log("Your Score: ",humanScore);
    console.log("Computer Score: ",compouterScore);
    console.log(" ");
    
    if(humanScore>compouterScore){
        console.log("You Win!")
    }
    else if(humanScore<compouterScore){
        console.log("You Lose!")
    }
    else{
        console.log("Tie")
    }

    
    
}

playGame();