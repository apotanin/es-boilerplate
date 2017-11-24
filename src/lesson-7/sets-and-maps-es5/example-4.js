'use strict';

const map = Object.create(null);
const key1 = {};
const key2 = {};

map[key1] = 'Jon';

console.log(map[key2]); // Jon
console.log(key1.toString()); // [object Object]
console.log(key1 === key2);


