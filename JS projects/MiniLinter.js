let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';
let overusedWords = ['really', 'very', 'basically'];
let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// In the code editor, there is a string called story. We want to gather some information about the individual words and sentences in the string. Let’s split the string into individual words and save them in a new array called storyWords.
let storyWords=story.split(' ');
console.log(storyWords);

//Log how many words there are in this story to the console.
console.log(storyWords.length);

/* There is an array of words that are unnecessary. Iterate over your array to filter out these words. Save the remaining words in an array called betterWords. There are several ways that you could achieve this.
HINT: As you iterate over storyWords (you can use the .filter() method to do this), if unnecessaryWords does not include the current word, you can return that word to the betterWords array. The .includes() method may prove useful.*/
let betterWords = storyWords.filter(word => {
  if (!unnecessaryWords.includes(word)) {
     return word;
    }
  });

/*There is an array of words called overusedWords. These are words overused in this story. You want to let the user of your program know how many times they have used these overused words. There are two ways to achieve this.
HINT:  a) You can iterate over the betterWords array three separate times (once for each of the words in the overusedWords array). Create a variable that represents the total times that word appears. Add 1 to the variable every time the current word is the same as that word. b) You can make this simpler by using one if, and two else if statements in the function code block of your iterator. That way, you can gather the counts of all three overused words at one time.*/

let overusedWordsIndex = betterWords.filter(word => overusedWords.includes(word));

let reallyCount = 0;
let veryCount = 0;
let basicallyCount = 0;

for (let repetition = 0; repetition <= overusedWordsIndex.length; repetition++) {
  if (overusedWordsIndex[repetition] === overusedWords[0]) {
    reallyCount++;
  }else if (overusedWordsIndex[repetition] === overusedWords[1]) {
    veryCount++;
  }else{
    basicallyCount++;
  }
};
 
/*Now, count how many sentences are in the paragraph. This may seem tricky, but remember that all of the sentences in this paragraph end with a period (.) or an exclamation mark (!). You could iterate over the array and add 1 to a sentence counter variable for each word that has a period or exclamation mark as its final character.*/
let sentenceCount = 0;
for (sentence of storyWords) {
   if (sentence[sentence.length-1] === '.' || sentence[sentence.length-1] === '!') {
     sentenceCount++
   } 
 }
 console.log('Number of sentences: ', sentenceCount);

 //Log The word count to the console:
 console.log('Number of words is '+storyWords.length);
 //Log The sentence count to the console:
 console.log ('Number of sentences is '+sentenceCount);
 //Log The number of times each overused word appears to the console:
 console.log('Number of overused Words is '+overusedWordsIndex.length)
 //Now, log the betterWords array to the console as a single string.
 console.log(betterWords.join(' '));
