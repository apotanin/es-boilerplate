'use strict';

import {isNumInRange} from "../../task-2/helper/index";

const Timer = () => {
    let counter;
    let intervalId;
    let internalTimerId;

    const startInternalTimer = () => {
        internalTimerId = setInterval(() => counter++, 1000);
    };

    const stopInternalTimer = () => {
        clearInterval(internalTimerId);
    };

    const init = (initTime = 0, callback) => {
        counter = isNumInRange(initTime, 0, Number.MAX_SAFE_INTEGER) ? initTime : 0;
        if (typeof callback === 'function') callback();
    };

    const getTime = () => {
        return {
            minutes: Math.floor(counter / 60),
            seconds: counter % 60
        };
    };

    const start = (factor = 1, callback) => {
        const _factor = isNumInRange(factor, 1, 1000) ? factor : 1;
        startInternalTimer();

        if (typeof callback === 'function') {
            intervalId = setInterval(
                () => callback(getTime())
                , 1000 / _factor);
        }
    };

    const stop = (callback) => {
        stopInternalTimer();
        clearInterval(intervalId);
        callback(getTime());
        counter = 0;
    };

    const pause = (callback) => {
        stopInternalTimer();
        clearInterval(intervalId);
        callback(getTime())
    };

    return {
        init,
        start,
        stop,
        pause
    }
};

export default Timer;
