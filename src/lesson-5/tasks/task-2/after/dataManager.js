'use strict';

import {getEntity, validator} from '../../task-2/helper'

export function DataManager() {
    this.data = [];

    this.add = (entity) => {
        validator(entity);
        if (getEntity(entity.id, this.data)) throw new Error('entity has been placed previously');
        this.data.push(entity);
    };

    this.getCount = () => this.data.length;

    this.getEntities = () => this.data.length ? this.data : null;

    this.getEntityById = (id) => getEntity(id, this.data);

    this.getFirstEntity = () => this.data.length ? this.data[0] : null;

    this.getLastEntity = () => this.data.length ? this.data[this.data.length - 1] : null;

    this.filter = (callback = () => false) => {
        if (typeof callback !== 'function') throw new Error('callback should be a function');
        return this.data.filter(callback);
    };
}
