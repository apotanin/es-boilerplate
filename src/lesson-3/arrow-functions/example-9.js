'use strict';

const data = {
    value: 0,
    getValue: function () {
        return () => this.value;
    }
}

const newData = {
    data: 1
}

const f1 = data.getValue().bind(newData);
const f2 = data.getValue().call(newData);

console.log(f1()); // 0
console.log(f2()); // 0