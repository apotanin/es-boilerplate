import {
    DataManager
} from '../after/dataManager';

import Entity from '../after/entityManager';

// Create instance for man
const tomas = {
    firstName: 'Tomas',
    lastName: 'Anderson',
    age: 21,
    sex: 'male'
};
const lisa = {
    firstName: 'Lisa',
    lastName: 'Black',
    age: 19,
    sex: 'female'
};

const man = new Entity(tomas);
const woman = new Entity(lisa);

// Create data Manager
const dataManager = new DataManager();

// Get data for man
const firstEntity = man.getEntity();

// Get data for woman
const secondEntity = woman.getEntity();

// Add man to collection
dataManager.add(firstEntity);

// Add woman to collection
dataManager.add(secondEntity);

// Get all entities
const all = dataManager.getEntities();

// Print entities count
const count = dataManager.getCount();

// Get entity by entity.id
const entityById = dataManager.getEntityById(1);

// Get first entity
const first = dataManager.getFirstEntity();

// Get last entity
const last = dataManager.getLastEntity();

// Filter entities by callback
const filtered = dataManager.filter(({ sex, age }) => sex === 'male' && age > 20);

console.log(filtered);
