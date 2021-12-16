const fetch = require('isomorphic-fetch');

const getPeoplePromise = fetch => {
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

const getPeople = async (fetch) => {
    const getRequest = await fetch('https://swapi.co/api/people')
    const data = await getRequest.json()
    return {
        count: data.count,
        results: data.results
    };
};

getPeople(fetch);