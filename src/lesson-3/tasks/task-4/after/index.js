'use strict';

import {isNumInRange} from "../../task-2/helper/index";

let Timer = () => {
    let counter;
    let intervalId;
    let internalTimerId;

    let startInternalTimer = () => {
        internalTimerId = setInterval(() => counter++, 1000);
    };

    let stopInternalTimer = () => {
        clearInterval(internalTimerId);
    };

    let init = (initTime = 0, callback) => {
        counter = isNumInRange(initTime, 0, Number.MAX_SAFE_INTEGER) ? initTime : 0;
        if (typeof callback === 'function') callback();
    };

    let getTime = () => {
        return {
            minutes: Math.floor(counter / 60),
            seconds: counter % 60
        };
    };

    let start = (factor = 1, callback) => {
        let _factor = isNumInRange(factor, 1, 1000) ? factor : 1;
        startInternalTimer();

        if (typeof callback === 'function') {
            intervalId = setInterval(
                () => callback(getTime())
                , 1000 / _factor);
        }
    };

    let stop = (callback) => {
        stopInternalTimer();
        clearInterval(intervalId);
        callback(getTime());
        counter = 0;
    };

    let pause = (callback) => {
        stopInternalTimer();
        clearInterval(intervalId);
        callback(getTime())
    };

    return {
        init: init,
        start: start,
        stop: stop,
        pause: pause
    }
};

export default Timer;
