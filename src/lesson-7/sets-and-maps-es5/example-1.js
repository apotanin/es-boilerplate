'use strict';

const set = Object.create(null); // ← null?

set.name = true;

if (set.name) { // ← check if property exist
    console.log('Property exist!');
}


