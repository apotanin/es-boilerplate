import {
    DataManager
} from '../after/dataManager';

import Entity from '../after/entityManager';

// Create instance for man
const man = new Entity({
    id: 0,
    firstName: 'Tomas',
    lastName: 'Anderson',
    age: 21,
    sex: 'male',
    social: [
        {
            id: 1,
            title: 'facebook',
            views: 21
        },
        {
            id: 2,
            title: 'youtube',
            views: 23
        },
        {
            id: 3,
            title: 'twitter',
            views: 2
        }
    ]
});

const man2 = new Entity({
    id: 2,
    firstName: 'Tomas2',
    lastName: 'Anderson2',
    age: 21,
    sex: 'male',
    social: [
        {
            id: 1,
            title: 'facebook',
            views: 1
        },
        {
            id: 2,
            title: 'youtube',
            views: 23
        },
        {
            id: 3,
            title: 'twitter',
            views: 2
        }
    ]
});

const manager = new DataManager();

// Get data for man
const firstEntity = man.getEntity();

// Add man to collection
manager.add(firstEntity);
manager.add(man2.getEntity());

const totalViews1 = manager.getEntityTotalViews(firstEntity.id);
console.log(totalViews1); // 46

const totalViews2 = manager.getEntityTotalViews(firstEntity.id, [1, 3]);
console.log(totalViews2); // 23

const totalViews3 = manager.getEntityTotalViews(firstEntity.id, ['facebook', 'twitter']);
console.log(totalViews3); // 23

const totalViews4 = manager.getEntityTotalViews(firstEntity.id, null, total => total * 3);
console.log(totalViews4); // 138

const entitiesSorted = manager.getEntitiesSortedByPopularity();
console.log(entitiesSorted);
