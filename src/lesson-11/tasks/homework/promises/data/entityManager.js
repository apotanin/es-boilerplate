'use strict';

import {validator} from './helper'

export default class Entity {
    constructor(obj) {
        validator(obj);

        this.id = obj.id;
        this.firstName = obj.firstName;
        this.lastName = obj.lastName;
        this.age = obj.age;
        this.sex = obj.sex;
    }

    getEntity() {
        return Object.assign({}, this);
    }
}
