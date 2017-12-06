import fetch from 'isomorphic-fetch';

fetch('https://newsapi.org/v2/sources?language=ru&apiKey=886faf57284140dd830bf5d6ddadd32f')
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then(function(stories) {
        console.log(stories);
    });