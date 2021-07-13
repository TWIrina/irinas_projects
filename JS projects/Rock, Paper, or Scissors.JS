const getUserChoice=(userInput)=>{

    if(userInput){
        userInput=userInput.toLowerCase(); 
    }
    else
    {
        console.log("Error! Please introduce one of the options: rock, scissors, paper.") ;
    }

   if (userInput ==='rock'|| userInput ==='paper'|| userInput ==='scissors') 
   {
       return userInput;
    } else {
        console.log("Error! Please introduce one of the options: rock, scissors, paper.") ;
    }
} 

function getComputerChoice() {
let randomNumber;
randomNumber=Math.floor(Math.random() * 2);
switch (randomNumber) {
case 0:
    return 'rock';
    break;
case 1:
    return 'paper';
    break;
case 2:
    return 'scissors';
    break;
}
}

function determineWinner (userChoice,computerChoice) {
    if (userChoice===computerChoice) return "The game was a tie"
    {
        if (userChoice==='rock' && !userChoice===computerChoice && computerChoice==='paper' )  return "You lost, try again";
         else {
             return "Congrats, you are the winner!";
        }
    }  
    {
        if (userChoice==='paper' && !userChoice===computerChoice && computerChoice==='scissors' )  return "You lost, try again";
         else return "Congrats, you are the winner!";

    }  
    {
        if (userChoice==='scissors' && !userChoice===computerChoice && computerChoice==='rock' )  return "You lost, try again";
         else return "Congrats, you are the winner!";
    }  
}

function playGame() {
   let userChoice = getUserChoice("rock");
   let computerChoice = getComputerChoice("paper");
   console.log(getUserChoice("rock"));
   console.log(getComputerChoice("paper"));
  console.log (determineWinner(userChoice,computerChoice));
}

playGame();
