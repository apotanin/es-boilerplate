import {DataManager} from './dataManager';

import Entity from './entityManager';

// Create instance for man
const tomas = {
    id: 1,
    firstName: 'Tomas',
    lastName: 'Anderson',
    age: 21,
    sex: 'male'
};

const tomasClone = {
    id: 1,
    firstName: 'Tomas',
    lastName: 'Anderson',
    age: 21,
    sex: 'male'
};

const lisa = {
    id: 2,
    firstName: 'Lisa',
    lastName: 'Black',
    age: 19,
    sex: 'female'
};

const lisaCopy = {
    id: 3,
    firstName: 'LisaCopy',
    lastName: 'BlackCopy',
    age: 9,
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

async function init() {
    console.log(`data manager init`);
    [firstEntity, secondEntity, tomasClone, lisaCopy].forEach(async e => {
        try {
            await dataManager.add(e);
        } catch (e) {
            console.log(e)
        }
    });
}

async function dataManagerTest() {
    await init();

    console.log(await dataManager.getEntities());
    console.log(await dataManager.getEntityById(1));
    console.log(await dataManager.getCount());
    console.log(await dataManager.getFirstEntity());
    console.log(await dataManager.getLastEntity());
    console.log(await dataManager.filter(({sex, age}) => sex === 'male' && age > 20));

}

dataManagerTest();
