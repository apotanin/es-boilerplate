'use strict';

// ES6 way
const receiver = {};

Object.assign(receiver,
    {
        type: 'js',
        name: 'index.js'
    },
    {
        type: 'css'
    }
)

console.log(receiver);
