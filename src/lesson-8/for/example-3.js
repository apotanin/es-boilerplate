'use strict';

const a = Symbol.for('A');
const a1 = Symbol.keyFor(a);
console.log(a1);
