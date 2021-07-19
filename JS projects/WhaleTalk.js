let input= 'this will be whale talk';
let vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray=[]; 
for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
    /*To check your work, log the iterator numbered position inside the for loop and run your code. This should count the number of characters in your input string.*/
    console.log(inputIndex);
    /*this is a nested loop. It will enable you to check each letter of input against all the vowels elements during each iteration.*/
    for (let vowelCheck = 0; vowelCheck < vowels.length; vowelCheck++) {
        if (input[inputIndex] === vowels[vowelCheck]) {
            resultArray.push(input[inputIndex]);
          }
        }
        if (input[inputIndex] === 'e' || input[inputIndex] === 'u') {
            resultArray.push(input[inputIndex])
}
}
console.log(resultArray.join('').toUpperCase());
