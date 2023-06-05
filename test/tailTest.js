const assertEqual = require('../assertEqual');
const tail = require('../tail');

console.log(tail([1,2,3,4,5]));
console.log(tail([]));
console.log(tail(["only"]));
console.log(tail(["dog","fish","cat","shark"]));

const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(words.length, 3);
assertEqual(tail(words).length, 2);