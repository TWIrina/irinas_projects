let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage.length);
//removes the last string of the array.
secretMessage.pop();
console.log(secretMessage.length);
//adds elements/strings the end of the array
secretMessage.push('to','Program');
//finds the place(index) of the string/element
console.log(secretMessage.indexOf('easily'));
secretMessage[7]='right'
console.log(secretMessage);
// removes the first string of the array.
secretMessage.shift();
//adds elements/strings the beginning of the array
secretMessage.unshift('Programming');
console.log(secretMessage.indexOf('get'));
// Use an array method to remove the strings get, right, the, first, time,, and replace them with the single string know,.
let positionOfGet = 6;
let n = 4;
let removedItems = secretMessage.splice(positionOfGet, n);
console.log(secretMessage);
secretMessage[6]='know';
console.log(secretMessage.join());
console.log(secretMessage);
