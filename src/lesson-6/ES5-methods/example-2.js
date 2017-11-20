'use strict';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = data.filter((item, index, array) => {
    return item % 2 === 0;
});

console.log(evenNumbers); // [ 2, 4, 6, 8, 10 ]
