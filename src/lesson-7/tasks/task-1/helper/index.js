'use strict';

let validator = ({id, firstName, surname = '', lastName, age, sex, social}) => {

    if (id === undefined || id === null) throw new Error(`id should be defined`);

    if (firstName === undefined) throw new Error(`firstName should be defined`);
    if (typeof firstName !== 'string') throw new Error(`firstName should be a string but was ${typeof firstName}`);
    if (!firstName.length) throw new Error(`firstName should not be an empty string`);

    if (typeof surname !== 'string') throw new Error(`surname should be a string but was ${typeof surname}`);

    if (lastName === undefined) throw new Error(`lastName should be defined`);
    if (typeof lastName !== 'string') throw new Error(`lastName should be a string but was ${typeof lastName}`);
    if (!lastName.length) throw new Error(`lastName should not be an empty string`);

    if (age !== undefined && typeof age !== 'number') throw new Error(`age should be a number or undefined but was ${typeof age}`);
    else if (age !== null && age < 0) throw new Error(`age should be a positive number`);

    if (sex === undefined) throw new Error(`sex should be defined`);
    if (sex !== 'male' && sex !== 'female' && sex !== 'robot') throw new Error(`sex should be male or female or robot but was ${sex}`);

    if (social !== undefined)
        if (!Array.isArray(social)) {
            throw new Error(`social should be an array but was typeof ${social}`);
        } else {
            social.forEach(el => {
                if (typeof el !== 'object') throw new Error(`social should contain only objects but was ${el}`);
                let {id, title, views} = el;
                if (id === undefined || id === null) throw new Error(`id field should be defined in ${el}`);

                if (title === undefined) throw new Error(`tittle should be defined in ${el}`);
                if (typeof title !== 'string') throw new Error(`title should be a string, but was ${typeof title} in ${el}`);
                if (!title.length) throw new Error(`title should not be an empty string in ${el}`);

                toInt(views)
            })
        }
};

const getEntity = (id, dataArray) => {
    let result = null;
    if (id === undefined || id === null) throw new Error('id should be defined');
    if (dataArray !== undefined && dataArray !== null && dataArray.length) {
        const entity = dataArray.filter(obj => obj.id === id);
        result = entity.length ? entity[0] : null;
    }

    return result;
};

const toInt = (arg) => {
    if (typeof arg === 'string') {
        const parsedArg = parseInt(arg);
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

const isNumInRange = (arg, min, max) => {
    const num = toInt(arg);
    return (num => min) && (num <= max);
};

const logAndReturn = (expr) => {
    console.log(expr);
    return expr;
};

const getValueOrNull = (data) => data === undefined ? null : data;

export {validator, getEntity, toInt, logAndReturn, isNumInRange, getValueOrNull};
