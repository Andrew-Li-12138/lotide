
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  //Add code to loop over all the items in the array
  for (const item of allItems) {
    //Add an if condition to only increment our count in results if the item is found in the itemsToCount object
    if (itemsToCount[item]) {
      // increment the counter for each item:
      //   set a property with that string key to:
      //     the value that was already there (or zero if nothing there) with 1 added to it.
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;
