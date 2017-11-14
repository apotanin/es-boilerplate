import {validator, getEntity} from '../helper'

let data = [];

let addEntity = (entity) => {
    validator(entity);
    if (getEntity(entity.id, data)) throw new Error('entity has been placed previously');
    data.push(entity);
};

let getCount = () => data.length;

let getEntities = () => data.length ? data : null;

let getEntityById = (id) => getEntity(id, data);

let getFirstEntity = () => data.length ? data[0] : null;

let getLastEntity = () => data.length ? data[data.length - 1] : null;

let filter = (callback = () => false) => {
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
