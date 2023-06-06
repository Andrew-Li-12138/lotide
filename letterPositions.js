const letterPositions = function(sentence) {
  //create an empty object to correct output to return later
  const results = {};
  //create a loop over string
  for (let i = 0; i < sentence.length; i++) {
    //exclude space
    if (sentence[i] !== " ") {
      //when results[sentence[i]] is not in object, create key resulys[sentence[i]] and assign an empty array as its value
      if (!results[sentence[i]]) {
        results[sentence[i]] = [];
      }
      //when reuslts[sentence[i]] already exist in the object, push index number to the existed empty array
      results[sentence[i]].push(i);
    }
  }
  return results;
};

module.exports = letterPositions;

