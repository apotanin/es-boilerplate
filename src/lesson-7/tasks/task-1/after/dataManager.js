'use strict';

import {getValueOrNull, validator} from '../helper'

const DataManager = (function () {

    const data = new Map();

    function DataManager() {

    }

    DataManager.prototype.add = (entity) => {
        validator(entity);
        if (data.get(entity.id)) throw new Error('entity has been placed previously');
        data.set(entity.id, entity);
    };

    DataManager.prototype.getCount = () => data.size;

    DataManager.prototype.getEntities = () => data.size ? [...data.values()] : null;

    DataManager.prototype.getEntityById = (id) => getValueOrNull(data.get(id));

    DataManager.prototype.getFirstEntity = () => getValueOrNull([...data.values()][0]);

    DataManager.prototype.getLastEntity = () => getValueOrNull([...data.values()].pop());

    DataManager.prototype.filter = (callback = () => false) => {
        if (typeof callback !== 'function') throw new Error('callback should be a function');
        const result = [...data.values()].filter(callback);
        return result.length ? result : null;
    };

    return DataManager;
})();

export {DataManager};
