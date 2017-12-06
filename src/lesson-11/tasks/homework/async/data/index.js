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

Promise.all([
        firstEntity,
        secondEntity,
        tomasClone,
        lisaCopy
    ].map(e => dataManager.add(e).catch((e) => console.log(e)))
).then(() => {
    console.log(`adding finished`);
    dataManager.getEntities()
        .then(_ => {
            console.log('>>>>>ALL ENTRIES');
            console.log(_);
        });
    dataManager.getEntityById(1)
        .then(_ => {
            console.log('>>>>>ENTRY WITH ID=1');
            console.log(_);
        });
    dataManager.getCount()
        .then(_ => {
            console.log('>>>>>COUNT');
            console.log(_);
        });
    dataManager.getFirstEntity()
        .then(_ => {
            console.log('>>>>>FIRST');
            console.log(_);
        });
    dataManager.getLastEntity()
        .then(_ => {
            console.log('>>>>>LAST');
            console.log(_);
        });
    dataManager.filter(({sex, age}) => sex === 'male' && age > 20)
        .then(_ => {
            console.log('>>>>>FILTER');
            console.log(_);
        })
        .catch(e => {
            console.log(e)
        })
});
