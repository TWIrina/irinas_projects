//1. Display numbers from 1 to 10

for (let i = 0; i < 11; i++){
    console.log(i);
  }

 //2. Print the odd numbers less than 100

 for(let a=1; a<100; a +=2){
    console.log(a);
 }
 /* also: 
 A.
 const myArray=new Array();
    for(let i=1; i<100; i +=2){
        myArray.push(i);
        }
    console.log(myArray) 
B.
Also to determine if the number is odd:
 if(i % 2 != 0){
    console.log(i);
  }
}*/

//3.  Print the multiplication table with 7
const number = [7];
for(let u = 1; u <= 10; u++) {
    const result = u * number;
    console.log(`${number} * ${u} = ${result}`);
}

//4. Print all the multiplication tables with numbers from 1 to 10
let tableResult = '\n';
for (let b = 1; b < 11; b++) {
    for (let j = 1; j < 11; j++) {
    tableResult += (b*j) + ' ';
    }
// displaying the result as a table rows, not a string
    tableResult += '\n';
}
    console.log(tableResult);

//5. Calculate the sum of numbers from 1 to 10
function sumN(N) {
    let total = 0;
      for(let c = 1; c <= N; c++){
    total += c;
      }
      return total;
  }
    console.log(sumN(10));

// 6. Calculate 10! 
function product(Y) {
    let total1 = 1;
      for(let d = 1; d <= Y; d++){
        total1 *= d;
      }
      return total1;
  }
     console.log(product(10));


// 7. Calculate the sum of odd numbers greater than 10 and less than 30 (probably do while is also an option here)
function numberSum(N) {
    let total = 0;
      for(let d = 11; d <= N; d+=2){
        total += d;
      }
      return total;
  }
  console.log(numberSum(30));

// 8. Calculate the sum of numbers in an array of numbers
let nextarray = [1,2,3,4,75,3,5,5,2,5,99]; 
let sumOfNA = nextarray.reduce(function(e, f){
    return e + f;
}, 0);
  console.log(sumOfNA);

// 9. Calculate the average of the numbers in an array of numbers
const average = thisarray => thisarray.reduce((g, h) => g + h) / thisarray.length;
console.log(average([10,22,8,35,45]));

// 10. Create a function that receives an array of numbers and returns an array containing only the positive numbers
let arrayz = [3, -5, 0, 7, -2, -10];
const getpositiveNumbers = (arrayz) => arrayz.filter(value => value >= 0);
let positives = getpositiveNumbers(arrayz);
    console.log(positives); 

// 11.Find the maximum number in an array of numbers
function biggestNumberInArray(arr) {
    const max = Math.max(...arr);
    return max;
  }

// 12. Create a function that will return a Boolean specifying if a number is prime
  function isPrime(n){
    if (n===1) {
      return false;
    }else if(n === 2){
      return true;
    }else{
      for(var x = 2; x < n; x++){
        if(n % x === 0){
          return false;
        }
      }
      return true;  
    }
  }
    console.log(isPrime(25));

  // 13. Calculate the sum of digits of a positive integer number
  function sumDigitsFormula(l) { 
    return (--l % 9) + 1;
}
    console.log(sumDigitsFormula(356));

// 14. Print the first 100 prime numbers

let first100primes = [], o = 2;
do if (isPrime(o++)) first100primes.push(o - 1);
while (first100primes.length < 100);
function isPrime(o) {
    let sqrtn = Math.sqrt(o);
    for (let p = 2; p <= sqrtn; p++)
        if (o % p === 0) return false;
    return true;
}
    console.log(first100primes);

// 15. Rotate an array to the left 1 position
const rotateArray1 = function(nums, k) {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
    return nums;
  }

// 16. Reverse an array
const names = ["Ana", "John", "Mary", "George"];
names.reverse();
    console.log(names);

// 17. Create a function that will merge two arrays and return the result as a new array
let arrayOne= ['1','2','3'];
let arrayTwo= ['go', 'now'];
const combined = [].concat(arrayOne, arrayTwo);
    console.log(combined);

// 18. Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both

let first = [1,2,4,6,8,9];
var second = [2,4,4,6,8];
let difference = first.filter(q => second.indexOf(q) === -1);
    console.log(difference);

// 19. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements

const unique = (valuey, index, self) => {
    return self.indexOf(valuey) === index
  }
const dages = [26, 27, 26, 26, 28, 28, 29, 29, 30];
const uniqueAges = dages.filter(unique);
    console.log(uniqueAges);

/* one more option:
let a = ["1", "1", "2", "3", "3", "1"];
let unique = a.filter((item, i, ar) => ar.indexOf(item) === i);
  onsole.log(unique);*/

// 20.  Create a function that will return the number of words in a text

function WordCount(string) { 
    return string.split(" ").length;
  }
    console.log(WordCount("this year is strange"));




















