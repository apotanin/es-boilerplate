'use strict';

let validator = (obj) => {

    if (obj.id === undefined || obj.id === null) throw new Error('id should be defined');

    if (obj.firstName === undefined) throw new Error('firstName should be defined');
    if (typeof obj.firstName !== 'string') throw new Error('firstName should be a string');
    if (!obj.firstName.length) throw new Error('firstName should not be an empty string');

    if (obj.lastName === undefined) throw new Error('lastName should be defined');
    if (typeof obj.lastName !== 'string') throw new Error('lastName should be a string');
    if (!obj.lastName.length) throw new Error('lastName should not be an empty string');

    if (obj.age === undefined) throw new Error('age should be defined');
    if (typeof obj.age !== 'number') throw new Error('age should be a number');
    if (obj.age < 0) throw new Error('age should be a positive number');

    if (obj.sex === undefined) throw new Error('sex should be defined');
    if (obj.sex !== 'male' && obj.sex !== 'female') throw new Error('sex should be male or female');
};

let getEntity = (id, dataArray) => {
    let result = null;
    if (id === undefined || id === null) throw new Error('id should be defined');
    if (dataArray !== undefined && dataArray !== null && dataArray.length) {
        let entity = dataArray.filter((obj) => obj.id === id);
        result = entity.length ? entity : null;
    }

    return result;
};

let toInt = (arg) => {
    if (typeof arg === 'string') {
        let parsedArg = parseInt(arg);
        if (isNaN(parsedArg)) {
            throw new Error(`argument type is ${typeof arg} and value is ${arg}. The string contains not a parsable number`);
        }
        arg = parsedArg;
    }
    if (typeof arg !== 'number') {
        throw new Error(`argument type is ${typeof arg} and value is ${arg}. It should be a number`);
    } else {
        if (arg < Number.MIN_SAFE_INTEGER || arg > Number.MAX_SAFE_INTEGER || isNaN(arg))
            throw new Error(`Number is ${arg}. It should be in the range ${Number.MIN_SAFE_INTEGER}...${Number.MAX_SAFE_INTEGER}`);
    }

    return arg;
};

let isNumInRange = (arg, min, max) => {
    let num = toInt(arg);
    return (num => min) && (num <=max);
};

let logAndReturn = (expr) => {
    console.log(expr);
    return expr;
};

export {validator, getEntity, toInt, logAndReturn, isNumInRange};
