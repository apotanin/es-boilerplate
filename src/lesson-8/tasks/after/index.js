'use strict';

function Temperature(degrees) {
    this.degrees = degrees;
}

Temperature.prototype[Symbol.toPrimitive] = function(item) {
    switch (item) {
        case 'string':
            return `${ this.degrees }\u00b0`;
        case 'number':
            return this.degrees;
        case 'default':
            return `${ this.degrees } degrees`;
    }
};

const freezing = new Temperature(32);

console.log(freezing + '!'); // 32 degrees!
console.log(freezing / 2); // 16
console.log(String(freezing)); // 32°