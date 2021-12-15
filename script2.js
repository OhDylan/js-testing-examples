const fetch = require('isomorphic-fetch');

const getPeople = fetch => {
    return fetch('https://swapi.co/api/people')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return {
            count: data.count,
            results: data.results
        };
    })
    .catch(err => console.log('Error here: ' + err))
};

getPeople(fetch);