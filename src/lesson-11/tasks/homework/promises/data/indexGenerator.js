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

function* dataManagerTest() {
    console.log(`data manager test start`);
    yield Promise.all([
            firstEntity,
            secondEntity,
            tomasClone,
            lisaCopy
        ].map(e => dataManager.add(e).catch((e) => console.log(e)))
    );


    yield dataManager.getEntities();
    yield dataManager.getEntityById(1);
    yield dataManager.getCount();
    yield dataManager.getFirstEntity();
    yield dataManager.getLastEntity();
    yield dataManager.filter(({sex, age}) => sex === 'male' && age > 20);

}

function testExecutor(generator) {
    let next = generator.next();

    if (!next.done) {
        next.value
            .then(_ => {
                console.log(_);
                return testExecutor(generator);
            })
            .catch(e => {
                console.log(e)
            })
    }
}

testExecutor(dataManagerTest());
