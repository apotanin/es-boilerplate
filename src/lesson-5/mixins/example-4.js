'use strict';

const order = {
    a: null,
    0: null,
    c: null,
    2: null,
    b: null,
    1: null
};

order.d = null;

console.log(Object.getOwnPropertyNames(order).join(', '));
