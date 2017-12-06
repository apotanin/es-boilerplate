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
    return iterableUriSource.forEach(async url => {
            try {
                const resp = await fetch(url);
                const {articles} = await resp.json();
                articles.forEach(({author, title}) => {
                    console.log(`author: ${author} \t title ${title}`);
                });
            } catch (e) {
                console.log(`error upon fetching url ${url}`);
            }
        }
    )
};

fetchAll(uriSource);

