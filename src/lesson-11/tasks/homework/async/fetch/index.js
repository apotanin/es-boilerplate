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

(async () => {
    const fetchAll = async (iterableUriSource, parser) => {
        return await Promise.all(iterableUriSource.map(async url => {
                try {
                    const resp = await fetch(url);
                    const {articles} = await resp.json();
                    return articles.map(({author, title}) => ({author, title}));
                } catch (e) {
                    return {error: `error upon fetching url ${url}`};
                }
            }
            )
        )
    };

    const fetchResult = await fetchAll(uriSource);
    console.log(fetchResult);
})();
