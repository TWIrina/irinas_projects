/* You should have:
1) A function named kelvinToFahrenheit with a single parameter named kelvin.
This function should return the temperature value in fahrenheits degrees. */
//First option
function kelvinToFahrenheit(kelvin) {
    return Math.floor((kelvin -273.15) *(9/5) + 32);

  }
   console.log(kelvinToFahrenheit(50));
// Second option
/*
   const Fahrenheit= function kelvinToFahrenheit(kelvin) {
    let Fahrenheit= Math.floor((kelvin -273.15) *(9/5) + 32);
   return Fahrenheit;
}
console.log(Fahrenheit (50)); */

/* 2) A function named humanAgeInDogYears with a single parameter named myAge.
This function should return the corresponding number of dog years.*/
function humanAgeInDogYears(myAge) {
    return (2*10.5)+(myAge-2)*4;
}
console.log(humanAgeInDogYears(31));

/*3) A function named answerMyQuestion with a parameter named userName and a second parameter userQuestion.
This function should return the corresponding eight ball answer */
function answerMyQuestion(userName,userQuestion){

    let randomNumber;
        randomNumber=Math.floor(Math.random() * 8);
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
    return eightBall;
  }
  
  /* Second option
  function  answerMyQuestion(userName,userQuestion){
  
  let answer = ["It is certain","It is decidedly so", "Reply hazy try again", "Cannot predict now", "Do not count on it", "My sources say no", "Outlook not so good", "Signs point to yes"] 
  return answer[Math.floor(Math.random() * answer.length)];
  
  }
  console.log(answerMyQuestion("Irina","Why?")); */
  
  /*4) A function named raceTime with a parameter named userAge and a second parameter registeredEarly.
This function should return the time the users will start the race.*/
function raceTime(userAge,registeredEarly) {

    if (registeredEarly && userAge >=18) {
     return "9:30am";
    } 
    else if (userAge>=18 && !registeredEarly) {
       return "11:00am"
    }
    else if (userAge<18) {
        return "12:30pm";
    }
    }
    console.log(raceTime(19,false))
