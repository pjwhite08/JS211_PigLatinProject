// 'use strict';

// // brings in the assert module for unit testing
// const assert = require('assert');
// // brings in the readline module to access the command line
// const readline = require('readline');
// // use the readline module to print out to the command line
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

//PRACTICE 
//Pig Latin word with consonant as first letter:
// let str = "banana";
// let firstLetter = str.substring(0, 1);
// console.log(firstLetter)
// let wordMissingFirst = str.substr(1);
// console.log(wordMissingFirst)
// // let makeArray = wordMissingFirst.split()
// // console.log(makeArray)
// // let firstToEnd = makeArray.push("a")
// // console.log(makeArray)
// let letterToEnd = wordMissingFirst.concat(firstLetter)
// console.log(letterToEnd)
// let ay = "ay"
// let pigLatinWord = letterToEnd.concat(ay)
// console.log(pigLatinWord)

//Dealing with vowels
const pigLatin = (word) => {
  let firstLetter = word.substring(0, 1);
    console.log(firstLetter);
  let wordMissingFirst = word.substr(1);
    console.log(wordMissingFirst)
  let yay = "yay"
  let vowels = ["a", "e", "i", "o", "u"]
  const manageVowels = (letter) => {
    for (i=0; i<= vowels.length - 1; i++) {
      let yesVowel = vowels[i]
      console.log(yesVowel)
      if (yesVowel == firstLetter) {
        console.log("yes, the first letter is a vowel")
        let vowelPigLatinWord = word.concat(yay)
        console.log(vowelPigLatinWord)
        return vowelPigLatinWord
      }
      else {
        let wordMissingFirst = word.substr(1);
        console.log(wordMissingFirst)
        let letterToEnd = wordMissingFirst.concat(firstLetter)
        console.log(letterToEnd)
        let ay = "ay"
        let pigLatinWord = letterToEnd.concat(ay)
        console.log(pigLatinWord)
      }
    }
  }
   manageVowels(vowels)
}
pigLatin("Coolio")
//-----------------------------------------------------------------------------

// const pigLatin = (word) => {
//     let firstLetter = word.substring(0, 1);
//     console.log(firstLetter)
//     let wordMissingFirst = word.substr(1);
//     console.log(wordMissingFirst)
//     let letterToEnd = wordMissingFirst.concat(firstLetter)
//     console.log(letterToEnd)
//     let ay = "ay"
//     let pigLatinWord = letterToEnd.concat(ay)
//     console.log(pigLatinWord)
//   }
//   pigLatin("Pamela")

//------------------------------------------------------------------------
// // the first function called in the program to get an input from the user
// // to run the function use the command: node main.js
// // to close it ctrl + C
// const getPrompt = () => {
//   rl.question('word ', (answer) => {
//     console.log( pigLatin(answer) );
//     getPrompt();
//   });
// }

// // Unit Tests
// // to use them run the command: npm test main.js
// // to close them ctrl + C
// if (typeof describe === 'function') {

//   describe('#pigLatin()', () => {
//     it('should translate a simple word', () => {
//       assert.equal(pigLatin('car'), 'arcay');
//       assert.equal(pigLatin('dog'), 'ogday');
//     });
//     it('should translate a complex word', () => {
//       assert.equal(pigLatin('create'), 'eatecray');
//       assert.equal(pigLatin('valley'), 'alleyvay');
//     });
//     it('should attach "yay" if word begins with vowel', () => {
//       assert.equal(pigLatin('egg'), 'eggyay');
//       assert.equal(pigLatin('emission'), 'emissionyay');
//     });
//     it('should lowercase and trim word before translation', () => {
//       assert.equal(pigLatin('HeLlO '), 'ellohay');
//       assert.equal(pigLatin(' RoCkEt'), 'ocketray');
//     });
//   });
// } else {

//   getPrompt();

// }






// // **********
// //   HINTS
// // **********

// // break your code into pieces and focus on one piece at a time...
// // 1. if word begins with a vowel send to one function: adds "yay"
// // 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// // 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
