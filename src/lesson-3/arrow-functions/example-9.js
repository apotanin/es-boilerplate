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

console.log(f1()); // 0
