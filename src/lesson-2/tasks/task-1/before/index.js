'use strict';

import { findString } from '../after';

const text =
    'There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.';

const pattern = /is a miracle/y;

console.log(findString(text, pattern));

// Important: Task should be done with the help of lastIndex property. Split method is restricted.
// The function should count how many times `is a miracle` is met in a string.


