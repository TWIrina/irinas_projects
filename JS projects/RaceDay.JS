let raceNumber=Math.floor(Math.random() * 1000);
let registredEarly=false;
let Age=21;
let earlyRegistration=9.30;

if (Age>=18 && earlyRegistration<=9.30) {
    registredEarly=true;
    console.log(raceNumber+=1000);
}
if (registredEarly) {
    console.log(`The participant ${raceNumber} will race at 9:30 am`)
} 
else if (Age>=18 && !registredEarly) {
    console.log(`The participant ${raceNumber} will race at 11:00am`)
}
else if (Age<18) {
    console.log(`The participant ${raceNumber}  will race at 12:30 `)
}