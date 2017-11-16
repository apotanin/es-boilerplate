'use strict';

const getInfo = ({arr0 = [], arr1 = [], arr2 = []}) => {
    const resultArray = [...arr0, ...arr1, ...arr2];

    return {
        length: resultArray.length,
        max: Math.max(...resultArray),
        min: Math.min(...resultArray)
    };
};

export {getInfo};
