let humanScore=0;
let computerScore=0;

alert("It is a game of 5 rounds");

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
        return("You win! Rock beats Scissors 🏆")
        
    }
    else if(humanChoice==="rock" && computerChoice==="paper"){
        computerScore++;
        return("You lose! Paper beats Rock 💔")
    }
    else if(humanChoice==="rock" && computerChoice==="rock"){
        humanScore++;
        computerScore++;
        return("That's a tie! ⚖️")
    }
    else if(humanChoice==="paper" && computerChoice==="scissors"){
        computerScore++;
        return("You lose! Scissors beats Paper 💔");
    }
    else if(humanChoice==="paper" && computerChoice==="paper"){
        humanScore++;
        computerScore++;
        return("That's a tie! ⚖️");
    }
    else if(humanChoice==="paper" && computerChoice==="rock"){
        humanScore++;
        return("You win! Paper beats Rock 🏆");
    }
    else if(humanChoice==="scissors" && computerChoice==="scissors"){
        humanScore++;
        computerScore++;
        return("That's a tie! ⚖️");
    }
    else if(humanChoice==="scissors" && computerChoice==="paper"){
        humanScore++;
        return("You win! Scissors beats Paper 🏆");
    }
    else if(humanChoice==="scissors" && computerChoice==="rock"){
        computerScore++; 
        return("You lose! Rock beats Scissors 💔");
    }
    else{};
    
    
}

let results=document.querySelector("#results");


let btncontainer = document.querySelector('.userChoice #button-container');

humanScore=0;
computerScore=0;



let divCompSelection=document.querySelector(".computerSelection");
let divUserSelection=document.querySelector(".userSelection");

let roundNo=1;

const currRoundResult=document.querySelector(".currResult");

const currRound=document.createElement("div");
currRound.setAttribute("class","currRound");

const currScore=document.createElement("div");
currScore.setAttribute("class","currScore");




btncontainer.addEventListener('click',(event) => {
    if(roundNo>5){
        event.stopPropagation;
        
    }
    else{
        
        
        const target=event.target;
        const computerSelection=getComputerChoice();
        let roundresult;
        let userSelection;

        const roundContainer=document.createElement('div');
        results.appendChild(roundContainer);
        roundContainer.setAttribute("class","Round-Container");

        const roundContainerScore=document.createElement('div');
        roundContainerScore.setAttribute("class","Score");

        const resultsdivRound=document.createElement('div');
        const resultsdiv=document.createElement('div');
        const resultsdivScores=document.createElement('div');
        const resultsdivUserScore=document.createElement('div');
        const resultsdivCompScore=document.createElement('div');


        resultsdivRound.textContent=("Round "+ roundNo);

        roundContainer.appendChild(resultsdivRound);
        
        

        switch(target.id){

            case 'rockbtn' :

                userSelection="rock";
                roundresult=playRound(userSelection,computerSelection);
                console.log(roundresult)

                resultsdiv.textContent=roundresult;
                console.log(resultsdiv);

                roundContainer.appendChild(resultsdiv);
                console.log(results);

                break;

            case 'paperbtn':

                userSelection="paper";
                roundresult=playRound(userSelection,computerSelection);
                console.log(roundresult)

                resultsdiv.textContent=roundresult;
                console.log(resultsdiv);

                roundContainer.appendChild(resultsdiv);
                console.log(results);

                break;

            case 'scissorsbtn':

                userSelection="scissors";
                roundresult=playRound(userSelection,computerSelection);
                console.log(roundresult)

                resultsdiv.textContent=roundresult;
                console.log(resultsdiv);

                roundContainer.appendChild(resultsdiv);
                console.log(results)

                break;

        }

        divUserSelection.textContent=("User Selected : "+userSelection);
        

        divCompSelection.textContent=("Computer Selected : " + computerSelection);
        
        
        console.log("User Score after Round : ",humanScore);
        resultsdivUserScore.textContent=("User Score : " + humanScore);
        roundContainerScore.append(resultsdivUserScore);

        console.log("Computer Score after Round : ",computerScore);
        resultsdivCompScore.textContent=("Computer Score : " + computerScore);
        roundContainerScore.append(resultsdivCompScore);

        roundContainer.append(roundContainerScore);
            
        console.log("");
        console.log("");

        currRound.textContent="ROUND "+roundNo+ " of 5";
        currRoundResult.append(currRound);

       
        currScore.textContent=+humanScore+":"+computerScore;
        currRoundResult.append(currScore);
            
        if(roundNo==5){
            let final_result=document.querySelector(".final-result");
            console.log(final_result)
            if(humanScore>computerScore){
                final_result.textContent="You Won the Game! 🏆";
                final_result.style.color="#16a34a";
            }
            else if(humanScore<computerScore){
                final_result.textContent="You Lost the Game! 💔";
                final_result.style.color="#dc2626";
            }
            else{
                final_result.textContent="It's a Tie ⚖️";
            };
            currRoundResult.appendChild(final_result);
        };

        roundNo++; 
    }
});

const compbtn=document.querySelector(".computerChoice #button-container");
compbtn.addEventListener("click",()=>{
    alert("Click User Buttons (on the left)");
}
);




