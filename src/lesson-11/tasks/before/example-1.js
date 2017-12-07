'use strict';
const func = (limit = 10, delay = 1000, callback = i => i) => {
    let chain = Promise.resolve();
    for (let i = 0; i < limit; i++) {
        chain = chain
            .then(() => new Promise(( resolve ) => {
                    setTimeout(resolve, delay)
                })
            )
            .then(() => console.log(callback(i)))
    }
};
func(3, 1000, i => i * 2);
