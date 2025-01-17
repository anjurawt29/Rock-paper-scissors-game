let userScore= 0;
let compScore= 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#mssg");
const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score");

const genCompChoice = ()=> {
   const options = ["rock","paper","scissors"]
   const randIdx = Math.floor(Math.random() * 3);
   return options[randIdx];
};

const drawGame = () =>{
   msg.innerText = "game was draw.";
   msg.style.backgroundColor = "#081b31";
};
const showWinner = (userWin, userchoice,CompChoice) => {
   if(userWin){
      userScore++;
      userScorePara.innerText = userScore;

      msg.innerText = `You win! Your  ${userchoice} beats ${CompChoice}`;
      msg.style.backgroundColor = "green";
   } else {
      compScore++;
      compScorePara.innerText = compScore;
      
      msg.innerText = `You lose.  ${CompChoice} beats Your ${userchoice}`;
      msg.style.backgroundColor = "red";
   }
};

const playGame = (userchoice) => {
   const CompChoice = genCompChoice();

   if(userchoice === CompChoice) {
      drawGame();
   } else{
      let userWin =  true;
      if(userchoice === "rock") {
        userWin=  CompChoice==="paper" ? false:true;
      } else if(userchoice==="paper") {
         userWin = CompChoice === "scissors" ? false:true;
      } else if( userchoice==="scissors") {
        userWin= CompChoicec==="rock"?false:true;
      }
      showWinner(userWin, userchoice, CompChoice);
    }
};

choices.forEach((choice) => {
   choice.addEventListener("click",() => {
      const userchoice = choice.getAttribute("id");
      playGame(userchoice);
   });
});