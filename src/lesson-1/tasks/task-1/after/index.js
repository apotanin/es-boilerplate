'use strict';

export default function func(count, timeout, callBackFunc) {
    for (let i = 0; i < count; i++) {
        setTimeout(function () {
            console.log(callBackFunc(i));
        }, i * timeout);
    }
}
