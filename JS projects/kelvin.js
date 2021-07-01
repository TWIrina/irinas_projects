// I assigned the value of 293 to the variable named "kelvin"
const kelvin= 293; 
//The console will display the temperature in kelvin
console.log('Kelvin='+kelvin);
// I created another variable called "Celsius" which equals 273 degrees less than Kelvin
const Celsius=273-kelvin; 
//I logged "Celsius" variable to the console and it prints -20
console.log('Celsius='+Celsius); 
//I declared the variable named "Fahrenheit" which equals -20 * (9/5) + 32
let Fahrenheit=Celsius * (9/5) + 32;
//I logged "Fahrenheit" variable to the console and it prints -4
console.log ('Fahrenheit='+Fahrenheit);
//I used the math.floor() function that returns the largest integer less than or equal to the value(number) that Fahrenheit variable will get after above calculations.
console.log('Round Fahrenheit='+Math.floor(Fahrenheit));
//I used interpolation method by adding a variable in the string as a placeholder, so that it displays the temperature in Fahrenheit
console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit.`);
