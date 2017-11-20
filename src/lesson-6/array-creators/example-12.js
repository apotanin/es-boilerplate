'use strict';

const f = function() {
    const array = Array.from(arguments);

    console.log(array); // [ 1, 2, 3 ]
};

f(1, 2, 3);
