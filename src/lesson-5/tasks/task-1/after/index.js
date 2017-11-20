'use strict';

import {isNumInRange, validator} from "../../task-2/helper/index";

const Entity = function (data) {
    let {id, firstName, surName, lastName, sex} = data;
    validator(data);

    this.id = id;
    this.firstName = firstName;
    this.surName = surName;
    this.lastName = lastName;
};

const talk = {
    say() {
        console.log('Hi!');
    },
    sayAge() {
        if (this.age === undefined) console.log(`hm undefined? Lets fix it...`);
        else console.log(`I'm ${this.age} years old`);
    }

};

const age = {
    fixAge(n) {
        this.age = isNumInRange(n, 0, 1000) ? n : 0;
        console.log(`now I'm ${this.age} years old, let's check it...`);
    }
};

export {Entity, talk, age};
