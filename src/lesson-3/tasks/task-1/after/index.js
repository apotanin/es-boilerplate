export default (count = 10, timeout = 1000, callback = v => v) => {
    if (typeof count !== 'number') throw new Error('Count should be a number');
    if (typeof timeout !== 'number') throw new Error('Timeout should be a number');
    if (typeof callback !== 'function') throw new Error('Callback should be a function');

    for (let i = 0; i < count; i++) {
        ((item) => {
            setTimeout(() => {
                console.log(callback(item))
            }, i * timeout)
        })(i)
    }
}
