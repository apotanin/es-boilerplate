'use strict';

import fetch from 'isomorphic-fetch';

const uriSource = [
    'https://newsapi.org1/v2/top-headlines?language=de',
    'https://newsapi.org/v2/top-headlines?apiKey=886faf57284140dd830bf5d6ddadd32f&language=de',
    'https://newsapi.org/v2/top-headlines?apiKey=886faf57284140dd830bf5d6ddadd32f&language=ar',
    'https://newsapi.orgWRONG/v2/top-headlines?apiKey=886faf57284140dd830bf5d6ddadd32f&language=ar',
    'https://newsapi.org/v2/top-headlines?apiKey=886faf57284140dd830bf5d6ddadd32f&language=ru',
    'https://google.com',
];

const fetchAll = (iterableUriSource) => {
    return Promise.all(iterableUriSource.map(url =>
            fetch(url)
                .then(result => ({status: 'resolved', url, result: result}))
                .catch(result => {
                    console.log(`error upon fetching url ${url}`);
                    return {status: 'rejected', url, result: result}
                })
        )
    )
};

fetchAll(uriSource)
    .then(data => {
        return Promise.all(data
            .filter(({status}) => status === 'resolved')
            .map(({result}) => result.json().catch((e) => {
                console.log(`error upon fetching json ${e}`);
                return {}
            })));
    })
    .then(data => {
        data.forEach(({articles = []}) => {
            articles.forEach(({author, title}) => {
                console.log(`author: ${author} \t title ${title}`);
            })
        });
    })
    .catch(e => {
        console.log(e);
    });


