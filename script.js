let humanScore=0;
let computerScore=0;

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

function playRound(humanChoice,computerChoice){

    if(humanChoice==="rock" && computerChoice==="scissors"){
        humanScore++;
        return("You win! Rock beats Scissors")
        
    }
    else if(humanChoice==="rock" && computerChoice==="paper"){
        computerScore++;
        return("You lose! Paper beats Rock")
    }
    else if(humanChoice==="rock" && computerChoice==="rock"){
        humanScore++;
        computerScore++;
        return("That's a tie!")
    }
    else if(humanChoice==="paper" && computerChoice==="scissors"){
        computerScore++;
        return("You lose! Scissors beats Paper");
    }
    else if(humanChoice==="paper" && computerChoice==="paper"){
        humanScore++;
        computerScore++;
        return("That's a tie!");
    }
    else if(humanChoice==="paper" && computerChoice==="rock"){
        humanScore++;
        return("You win! Paper beats Rock");
    }
    else if(humanChoice==="scissors" && computerChoice==="scissors"){
        humanScore++;
        computerScore++;
        return("That's a tie!");
    }
    else if(humanChoice==="scissors" && computerChoice==="paper"){
        humanScore++;
        return("You win! Scissors beats Paper");
    }
    else if(humanChoice==="scissors" && computerChoice==="rock"){
        computerScore++; 
        return("You lose! Rock beats Scissors");
    }
    else{};
    
    
}

let results=document.querySelector("#results");


let btncontainer = document.querySelector('#button-container');

humanScore=0;
computerScore=0;

let resultsdiv=document.createElement('div');

btncontainer.addEventListener('click',(event) => {
    let target=event.target;
    let computerSelection=getComputerChoice();
    let roundresult;
    

    switch(target.id){

        case 'rockbtn' :

            roundresult=playRound("rock",computerSelection);
            console.log(roundresult)

            resultsdiv.textContent=roundresult;
            console.log(resultsdiv);

            results.appendChild(resultsdiv);
            console.log(results);

            break;

        case 'paperbtn':

            roundresult=playRound("paper",computerSelection);
            console.log(roundresult)

            resultsdiv.textContent=roundresult;
            console.log(resultsdiv);

            results.appendChild(resultsdiv);
            console.log(results);

            break;

        case 'scissorsbtn':

            roundresult=playRound("scissors",computerSelection);
            console.log(roundresult)

            resultsdiv.textContent=roundresult;
            console.log(resultsdiv);

            results.appendChild(resultsdiv);
            console.log(results)

            break;

    }
    console.log("computerSelection : ",computerSelection)
    console.log("");
    console.log("User Score after Round : ",humanScore);
    console.log("Computer Score after Round : ",computerScore);
    console.log("");
    console.log("");

});



