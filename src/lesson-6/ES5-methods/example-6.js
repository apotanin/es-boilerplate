'use strict';

const data = [1, 2, 3];

const sum = data.reduce((previousItem, currentItem, index, array) => {
    return previousItem + currentItem;
});

console.log(sum); // 6
