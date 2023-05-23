const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u274C\u274C Assertion Failed: ${actual} !== ${expected}`);
  }

};

const countLetters = function(sentence) {
//declare a new variable result as an empty object to contain return value
  let result = {};
  //create a loop over all indices of string
  for (let letter of sentence) {
    //add if condition to exclude space
    if (letter !== " ") {
      //add string's indices as keys to object result and increment key's value by 1 everytime for same indices
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  //return outside loop
  return result;
};
//test code
console.log(countLetters("lighthouse in the house"));
let testSentence = countLetters("lighthouse in the house");
assertEqual(testSentence["h"], 4);
assertEqual(testSentence["e"], 3);
assertEqual(testSentence["u"], 2);
assertEqual(testSentence["l"], 1);