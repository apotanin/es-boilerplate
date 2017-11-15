'use strict';

import { generateData } from '../helpers';
import { getInfo } from '../after';

// function getInfo should NOT contain:
//   dot notation for accessing object properties
//   apply method
//   for loop
//   Array push method

// helper function generateData returns an object
// which can contain arr1, arr2, arr3 properties.
// arr1, arr2, arr3 are dynamically generated properties
// arr2 and arr3 are optional.
/*
{
   arr1: [1,2,3],
   arr2: [2,3,4],
   arr3: [3,5,7],
   created: 2017-11-15
}
*/

const data = generateData();
const getMetaInfo = () => {
    const arr = [];

    for (let key in data) {
        if (Array.isArray(data[key])) {
            for (let i = 0; i < data[key].length; i++) {
                arr.push(data[key][i]);
            }
        }
    }

    const max = Math.max.apply(null, arr);
    const min = Math.min.apply(null, arr);

    return {
        length: arr.length,
        max,
        min
    };
};

console.log(getMetaInfo());
console.log(getInfo(data));
