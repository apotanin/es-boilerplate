'use strict';

const data = {
    value: 0,
    getValue: function () {
        return () => this.value;
    }
}

const f = data.getValue();

console.log(f()); // 0