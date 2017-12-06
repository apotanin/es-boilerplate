'use strict';
function Async() {
    const promise = new Promise(function (resolve, reject) {
        console.log('Promise init'); // 1) Promise init
        setTimeout(function() {
            console.log('resolving...'); // 3) resolving...
            resolve();
        }, 2000);
    });
    return promise;
}

const promise = Async();
console.log('Next step'); // 2) Next step