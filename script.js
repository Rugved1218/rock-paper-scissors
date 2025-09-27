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



let divCompSelection=document.querySelector(".computerSelection");
let divUserSelection=document.querySelector(".userSelection");

let roundNo=1;


btncontainer.addEventListener('click',(event) => {
    if(roundNo>5){
        event.stopPropagation;
        const final_result=document.querySelector(".final-result");
        console.log(final_result)
        if(humanScore>computerScore){
            final_result.textContent="You Won the Game! 🏆";
        }
        else if(humanScore<computerScore){
            final_result.textContent="You Lost the Game! 💔";
        }
        else{
            final_result.textContent="It's a Tie ⚖️";
        };
    }
    else{
    
        const target=event.target;
        const computerSelection=getComputerChoice();
        let roundresult;
        let userSelection;

        const resultsdivRound=document.createElement('div');
        const resultsdiv=document.createElement('div');
        const resultsdivScores=document.createElement('div');
        const resultsdivUserScore=document.createElement('div');
        const resultsdivCompScore=document.createElement('div');

        resultsdivRound.textContent=("Round "+ roundNo);
        results.appendChild(resultsdivRound);
        

        switch(target.id){

            case 'rockbtn' :

                userSelection="rock";
                roundresult=playRound(userSelection,computerSelection);
                console.log(roundresult)

                resultsdiv.textContent=roundresult;
                console.log(resultsdiv);

                results.appendChild(resultsdiv);
                console.log(results);

                break;

            case 'paperbtn':

                userSelection="paper";
                roundresult=playRound(userSelection,computerSelection);
                console.log(roundresult)

                resultsdiv.textContent=roundresult;
                console.log(resultsdiv);

                results.appendChild(resultsdiv);
                console.log(results);

                break;

            case 'scissorsbtn':

                userSelection="scissors";
                roundresult=playRound(userSelection,computerSelection);
                console.log(roundresult)

                resultsdiv.textContent=roundresult;
                console.log(resultsdiv);

                results.appendChild(resultsdiv);
                console.log(results)

                break;

        }

        divUserSelection.textContent=("User Selected : "+userSelection);
        

        divCompSelection.textContent=("Computer Selected : " + computerSelection);
        
        
        console.log("User Score after Round : ",humanScore);
        resultsdivUserScore.textContent=("User Score : " + humanScore);
        results.append(resultsdivUserScore);

        console.log("Computer Score after Round : ",computerScore);
        resultsdivCompScore.textContent=("Computer Score : " + computerScore);
        results.append(resultsdivCompScore);
            
        console.log("");
        console.log("");
            
        roundNo++;
    }
});

if(roundNo==5){
    const final_result=document.querySelector(".final-result");
    console.log(final_results)
    if(humanScore>computerScore){
        final_result.textContent("You Won the Game! 🏆");
    }
    else if(humanScore<computerScore){
        final_result.textContent("You Lost the Game! 💔");
    }
    else{
        final_result.textContent("It's a Tie ⚖️");
    };
}


