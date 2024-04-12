let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

let restart = document.querySelector(".btn");

const genCompChoice = () =>{
    const options=["rock", "paper", "scissors"];
    const ranIdx= Math.floor(Math.random() *3);  //for the range 0-2 multiply by 3, for 0-9 multiply by 10
    return options[ranIdx];
};

const drawGame = ()=>{
    // console.log("Game was a draw");
    msg.innerText = "Game was draw. Play again!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("you win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("you lose!");
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};
const playGame = (userChoice)=>{
    console.log("userChoice=", userChoice);
    // Generate comp choice
    const compChoice = genCompChoice();
    console.log("compChoice", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            // scissors,paper
            userWin= compChoice==="paper"? false:true;
        }
        else if(userChoice=="paper"){
            userWin = compChoice==="scissors"? false:true;
        }
        else{
            userWin = compChoice ==="rock"? false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

};
choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("Choice was clicked", userChoice);
        playGame(userChoice);
    });
});

const restartGame = () =>{
    userScore=0;
    userScorePara.innerText = userScore;
    compScore=0;
    compScorePara.innerText = compScore;
    msg.innerHTML="Play your move";
};

restart.addEventListener ("click", restartGame);
