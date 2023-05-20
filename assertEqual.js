// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("\u2705\u2705 " + "Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("\u274C\u274C " + "Assertion Failed: " + actual + " !== " + expected);
  }

};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("abc", "abc");
assertEqual(2, 3);