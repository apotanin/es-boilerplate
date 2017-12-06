'use strict';

import {getExecutionTime, getValueOrNull, runner, validator} from './helper'

const data = Symbol("Data holder");

export class DataManager {

    constructor() {
        this[data] = new Map();
    }

    add(entity) {
        return new Promise((resolve, reject) => {

            const executionTime = getExecutionTime();
            console.log(`trying to insert entity with id=${entity.id} to the DB. Execution time ${executionTime}`);
            setTimeout(() => {
                try {
                    validator(entity);
                    if (this[data].get(entity.id)) throw new Error(`entity with id ${entity.id} already exists`);
                } catch (e) {
                    return reject(`ERROR(add): ${e.message}`);
                }

                this[data].set(entity.id, entity);
                console.log(`entity with id=${entity.id} has been inserted to the DB.`);
                resolve(true);
            }, executionTime);
        })
    };

    getCount() {
        const getCount = () => Promise.resolve(this[data].size);
        return runner(getCount);
    }

    getEntities() {
        const getEntities = () => this[data].size ? [...this[data].values()] : null;
        return runner(getEntities);
    };

    getEntityById(id) {
        const getEntityById = (_id) => getValueOrNull(this[data].get(_id));
        return runner(getEntityById, id)
    };

    getFirstEntity() {
        const getFirstEntity = () => getValueOrNull([...this[data].values()][0]);
        return runner(getFirstEntity)
    };

    getLastEntity() {
        const getLastEntity = () => getValueOrNull([...this[data].values()].pop());
        return runner(getLastEntity);
    };

    filter(_callback = () => false) {
        const filter = (callback) => {
            if (typeof callback !== 'function') throw new Error('callback should be a function');
            const result = [...this[data].values()].filter(_callback);
            return result.length ? result : null;
        };
        return runner(filter, _callback);
    };

}

