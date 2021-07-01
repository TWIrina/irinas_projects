//I created a (constant) variable named "myAge" that has as value the number 31
const myAge=31;
//I logged the value to the console, that will display my age and the text "My age is"
console.log("My age is" + ' ' + myAge);
//I created a variable named "earlyYears" that has as value the number 2.
let earlyYears=2;
earlyYears=earlyYears*10.5;
console.log("Early Years" + ' ' +earlyYears);
//I created another variabe "laterYears" that equals the difference between "myAge"(31)and number 2;
let laterYears=myAge-2;
console.log("Later Years" + ' ' + laterYears);
laterYears=laterYears*4;
console.log("My age as a dog -2 human years" + " " +laterYears);
//I created a variable that will calculate the years I would have had as a dog, by adding the values of 2 variables;
const myAgeInDogYears=earlyYears+laterYears;
console.log("My Age as a Dog is"+ " "+ myAgeInDogYears)
//I create the variable myName and assign it a string as a value (Irina)
const myName="Irina";
// I used the built-in method .toLowerCase()to store the result(all the letters of the name Irina will have small letters) in a variable called myName.
console.log(myName.toLowerCase());
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
