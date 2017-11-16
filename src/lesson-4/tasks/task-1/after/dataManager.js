'use strict';

import {getEntity, validator} from '../../task-2/helper'

const data = [];

const addEntity = (entity) => {
    validator(entity);
    if (getEntity(entity.id, data)) throw new Error('entity has been placed previously');
    data.push(entity);
};

const getCount = () => data.length;

const getEntities = () => data.length ? data : null;

const getEntityById = (id) => getEntity(id, data);

const getFirstEntity = () => data.length ? data[0] : null;

const getLastEntity = () => data.length ? data[data.length - 1] : null;

const filter = (callback = () => false) => {
    if (typeof callback !== 'function') throw new Error('callback should be a function')
    return data.filter(callback);
};

export {
    addEntity,
    getEntities,
    getCount,
    getEntityById,
    getFirstEntity,
    getLastEntity,
    filter
}
