'use strict';

import {isNumInRange} from "../helper/index";

class Timer {
    constructor() {
        this.counter = 0;
        this.intervalId = 0;
    }

    init(initTime = 0, callback) {
        this.counter = isNumInRange(initTime, 0, Number.MAX_SAFE_INTEGER) ? initTime : 0;
        if (typeof callback === 'function') callback();
    }

    getTime() {
        return {
            minutes: Math.floor(this.counter / 60),
            seconds: this.counter % 60
        };
    };

    start(factor = 1, callback) {
        const _factor = isNumInRange(factor, 1, 1000) ? factor : 1;

        if (typeof callback === 'function') {
            this.intervalId = setInterval(
                () => {
                    this.counter++;
                    return callback(this.getTime());
                }
                , 1000 / _factor);
        }
    };

    stop(callback) {
        clearInterval(this.intervalId);
        callback(this.getTime());
        this.counter = 0;
    };

    pause(callback) {
        clearInterval(this.intervalId);
        callback(this.getTime())
    };

}

export default Timer;
