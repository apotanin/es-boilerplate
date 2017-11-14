let Timer = () => {
    let time;
    let timerInterval;

    let init = (initTime = 0, func) => {
        time = initTime;
        func()
    };

    let start = (factor = 1, func) => {
        timerInterval = setInterval(
            () => func({
                minutes: new Date().getMinutes(),
                seconds: new Date().getSeconds()
            })
            , 1000 / factor);
    };

    let stop = (func) => {
      clearInterval(timerInterval);
      func({
          minutes: new Date().getMinutes(),
          seconds: new Date().getSeconds()
      })
    };

    return {
        init: init,
        start: start,
        stop: stop,
        pause: stop
    }
};

export default Timer;
