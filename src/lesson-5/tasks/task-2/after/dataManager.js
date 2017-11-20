'use strict';

import {getEntity, validator} from '../../task-2/helper'

export function DataManager() {
    this.data = [];

}

DataManager.prototype.add = function (entity){
    validator(entity);
    if (getEntity(entity.id, this.data)) throw new Error('entity has been placed previously');
    this.data.push(entity);
};

DataManager.prototype.getCount = function () { return this.data.length };

DataManager.prototype.getEntities = function () { return this.data.length ? this.data : null;};

DataManager.prototype.getEntityById = function (id) { return getEntity(id, this.data);};

DataManager.prototype.getFirstEntity = function () { return this.data.length ? this.data[0] : null;};

DataManager.prototype.getLastEntity = function () { return this.data.length ? this.data[this.data.length - 1] : null};

DataManager.prototype.filter = function (callback = () => false) {
    if (typeof callback !== 'function') throw new Error('callback should be a function')
    return this.data.filter(callback);
};
