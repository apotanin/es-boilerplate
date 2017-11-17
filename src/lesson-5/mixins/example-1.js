'use strict';

// ES5 way
const mixin = (receiver, supplier) => {
    Object
        .keys(supplier)
        .forEach(key => {
            receiver[key] = supplier[key];
    });

    return receiver;
}

const emitter = {
    emit: value => console.log(value || 'emitted')
}

const user = {};
mixin(user, emitter);

user.emit();
user.emit('Hello');
