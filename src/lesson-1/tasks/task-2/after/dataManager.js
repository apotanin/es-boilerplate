'use strict';

const dataHolder = new Map();

export function addEntity(entity) {
    dataHolder.set(entity.id, entity);
}

export function getEntities() {
    return Array.from(dataHolder.values());
}

export function getCount() {
    return dataHolder.size;
}

export function getEntityById(id) {
    return dataHolder.get(id);
}

export function getFirstEntity() {
    return getEntities()[0];
}

export function getLastEntity() {
    return getEntities().pop();
}

export function filter(filter) {
    return getEntities().filter(filter);
}
