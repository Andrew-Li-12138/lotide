# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @andrewli12138/lotide`

**Require it:**

`const _ = require('@andrewli12138/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

## Available Functions
The following functions are currently implemented:

* head(...): retrieve the first element from the array
* tail(...): retrieve every element except the head (first element) of the array
* middle(...): return an array with only the middle element(s) of the provided array. For arrays with odd number of elements, an array containing a single middle element should be returned. For arrays with an even number of elements, an array containing the two elements in the middle should be returned
* assertArraysEqual(...):compare arrays and prints out a colourful successful or failure message including easy to read emojis 
* assertEqual(...): compares two primative values and prints out a colourful successful or failure message including easy to read emojis
* assertObjectsEqual(...): compare objects and prints out a colourful successful or failure message including easy to read emojis 
* countLetters(...): take in a sentence (as a string) and then return a count of each of the letters in that sentence
* countOnly(...): take in a collection of items and return counts for a specific subset of those items
* eqArrays(...):compare arrays and return true when it's equal and false when it's not
* eqObjects(...): compare objects and return true when they are equal, false when they are not
* findKey(...): takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* findKeyByValue(...): search for a key on an object where its value matches a given value
* flatten(...): given an array with other arrays inside, it can flatten it into a single-level array
* letterPositions(...): take in a sentence (as a string) and return all the indices (zero-based positions) in the string where each character is
* map(...): take in an array to map, a callback, return a new array based on the results of the callback function
* takeUntil(...): take an array and callback function, return a slice of the array with elements taken from the beginning, keep going until the callback returns a truthy value
* without(...): take in a source array and a itemsToRemove array, return a new array with only those elements from source that are not present in the itemsToRemove array

## Usage

Here are some examples of how to use the functions:

### function head(...)

const arr = [1, 2, 3, 4, 5];
console.log(head(arr)); // Output: 1

### function tail(...)

const arr = [1, 2, 3, 4, 5];
console.log(tail(arr)); // Output: [2, 3, 4, 5]

### function middle(...)

const arr1 = [1, 2, 3];
console.log(middle(arr1)); // Output: [2]

const arr2 = [1, 2, 3, 4];
console.log(middle(arr2)); // Output: [2, 3]

const arr2 = [1, 2];
console.log(middle(arr2)); // Output: []

const arr2 = [1];
console.log(middle(arr2)); // Output: []

### assertArraysEqual(...)

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
assertArraysEqual(arr1, arr2); // Output: ✅✅ Assertion Passed: [ 1, 2, 3 ] === [ 1, 2, 3 ]

const arr3 = [1, 2, 3];
const arr4 = [1, 2, 4];
assertArraysEqual(arr3, arr4); // Output: ❌❌ Assertion Failed: [ 1, 2, 3 ] !== [ 1, 2, 4 ]

### assertEqual(...)

assertEqual(5, 5); // Output: ✅✅ Assertion Passed: 5 === 5

assertEqual(5, 10); // Output: ❌❌ Assertion Failed: 5 !== 10

### assertObjectsEqual(...)

const obj1 = { name: 'John', age: 30 };
const obj2 = { name: 'John', age: 30 };
assertObjectsEqual(obj1, obj2); // Output:  ✅✅ Assertion Passed: { name: 'John', age: 30 } === { name: 'John', age: 30 }

const obj3 = { name: 'John', age: 30 };
const obj4 = { name: 'John', age: 25 };
assertObjectsEqual(obj3, obj4); // Output: ❌❌ Assertion Failed: { name: 'John', age: 30 } !== 1{ name: 'John', age: 25 }

### countLetters(...)

const sentence = 'Hello World';
console.log(countLetters(sentence));
// Output: { H: 1, e: 1, l: 3, o: 2, W: 1, r: 1, d: 1 }

### countOnly(...)
const allItems = ['apple', 'banana', 'cherry', 'apple', 'banana'];
const itemsToCount = { apple: true, cherry: true };
console.log(countOnly(allItems, itemsToCount));
// Output: { apple: 2, cherry: 1 }

### eqArrays(...)
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
console.log(eqArrays(arr1, arr2)); // Output: true

const arr3 = [1, 2, 3];
const arr4 = [1, 2, 4];
console.log(eqArrays(arr3, arr4)); // Output: false

### eqObjects(...)
const obj1 = { name: 'John', age: 30 };
const obj2 = { name: 'John', age: 30 };
console.log(eqObjects(obj1, obj2)); // Output: true

const obj3 = { name: 'John', age: 30 };
const obj4 = { name: 'John', age: 25 };
console.log(eqObjects(obj3, obj4)); // Output: false

### findKey(...)
const obj = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
  key4: 'value4'
};

const result = findKey(obj, (value) => value === 'value3');
console.log(result); // Output: key3

### findKeyByValue(...)

const obj = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
  key4: 'value4'
};

const result = findKeyByValue(obj, 'value3');
console.log(result); // Output: key3

### flatten(...)

const nestedArray = [1, [2, [3, 4], 5], 6];
console.log(flatten(nestedArray)); // Output: [1, 2, 3, 4, 5, 6]

### letterPositions(...)

const sentence = 'hello';
console.log(letterPositions(sentence));
// Output: { h: [0], e: [1], l: [2, 3], o: [4] }

### map(...) //Lotide Version

const arr = [1, 2, 3];
const result = map(arr, (num) => num * 2);
console.log(result); // Output: [2, 4, 6]

### takeUntil(...)

const arr = [1, 2, 3, 4, 5];
const result = takeUntil(arr, (num) => num === 3);
console.log(result); // Output: [1, 2]

### without(...)

const source = [1, 2, 3, 4, 5];
const itemsToRemove = [2, 4];
const result = without(source, itemsToRemove);
console.log(result); // Output: [1, 3, 5]





