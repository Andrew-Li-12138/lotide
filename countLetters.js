
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

module.exports = countLetters;
