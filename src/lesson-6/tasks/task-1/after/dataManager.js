'use strict';

import {getEntity, validator} from '../helper'

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

    this.getEntityTotalViews = (id, socialKeys, callback) => {

        const entry = getEntity(id, this.data);
        const social = entry.social;

        if (Array.isArray(socialKeys)) {
            let result = 0;
            socialKeys.forEach((el) => {
                let socialField;
                if (typeof el === 'number') {
                    socialField = social.find(({id}) => id === el)
                } else if (typeof el === 'string') {
                    socialField = social.find(({title}) => title === el)
                }
                if (socialField) result += socialField.views;
            });
            return result;
        } else if (socialKeys === null && callback) {
            if (typeof callback === 'function') {
                return callback(this.getEntityTotalViews(id))
            }
            throw error(`callback is not a function`)
        }
        else {
            return social.reduce((sum, {views}) => sum + views, 0)
        }
    };

    this.getEntitiesSortedByPopularity = () => {
        let result = [];
        this.data.forEach(el => {
            result.push({obj: el, counter: el.social.reduce((sum, {views}) => sum + views, 0)})
        });
        return result.sort((f, l) => l.counter - f.counter).map(el => el.obj)
    }


}
