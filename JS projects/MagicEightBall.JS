let userName="";
userName = prompt("What is your name?");
userName ? console.log(`Hello ${userName} `) : console.log("Hello");
let userQuestion=prompt("Enter a question!");
    console.log(userQuestion);
    document.getElementById("question").innerHTML = "Question is:"+userQuestion;
let randomNumber;
    randomNumber=Math.floor(Math.random() * 8);
    console.log(randomNumber);
let eightBall="";
switch (randomNumber) {
    case 0:
      eightBall="It is certain"
      break;
    case 1:
      eightBall="It is decidedly so";
      break;
    case 2:
      eightBall="Reply hazy try again";
      break;
    case 3:
      eightBall="Cannot predict now";
      break;
    case 4:
      eightBall="Do not count on it";
      break;
    case 5:
      eightBall="My sources say no";
      break;
    case 6:
      eightBall="Outlook not so good";
      break;
    case 7:
      eightBall="Signs point to yes";
      break; 
    default:
      eightBall='Good luck';
  }
  console.log(eightBall);

  document.getElementById("answer").innerHTML = "Magic answer: "+eightBall+"!";

  document.getElementById("message").innerHTML = "Try again - reload the page";
