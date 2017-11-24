import {
    addEntity as add,
    getEntities,
    getEntitiesSortedByPopularity,
    getCount,
    getEntityById,
    getFirstEntity,
    getLastEntity,
    getEntityTotalviews,
    filter
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

// Get data for man
const firstEntity = man.getEntity();

// Add man to collection
add(firstEntity);

const totalViews1 = getEntityTotalviews(firstEntity.id);
console.log(totalViews1); // 46

const totalViews2 = getEntityTotalviews(firstEntity.id, [1, 3]);
console.log(totalViews2); // 23

const totalViews3 = getEntityTotalviews(firstEntity.id, ['facebook', 'twitter']);
console.log(totalViews3); // 23

const totalViews4 = getEntityTotalviews(firstEntity.id, null, total => total * 3);
console.log(totalViews4); // 138

const entitiesSorted = getEntitiesSortedByPopularity();
