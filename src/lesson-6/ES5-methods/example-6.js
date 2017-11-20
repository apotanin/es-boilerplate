'use strict';

const data = [1, 2, 3];

const sum = data.reduce((prev, currentItem, index, array) => {
    return prev + currentItem;
});

console.log(sum); // 6
