'use strict';
function* createIterator () {
    yield 1;
    yield 2;
    yield 3;
}

const iterator = createIterator([1, 2, 3]);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
