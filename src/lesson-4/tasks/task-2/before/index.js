import Timer from '../after';

const timer = Timer();

timer.init(0, () => {
    console.log('Timer is configured.');
});

timer.start(1, ({minutes, seconds}) => {
    const template = `Minutes: ${ minutes } Seconds: ${ seconds }`;

    console.log(template);
});

setTimeout(() => {
    timer.pause(({minutes, seconds}) => {
        const template = `Last time was Minutes: ${ minutes } Seconds: ${ seconds }`;

        console.log('Timer is frozen');
        console.log(template);
    });
    timer.start(2, ({minutes, seconds}) => {
        const template = `Minutes: ${ minutes } Seconds: ${ seconds }`;

        console.log(template);
    });
    setTimeout(() => {
        timer.stop(({minutes, seconds}) => {
            const template = `Last time was Minutes: ${ minutes } Seconds: ${ seconds }`;

            console.log('Timer is stopped');
            console.log(template);
        });
    }, 3000);
}, 3000);

