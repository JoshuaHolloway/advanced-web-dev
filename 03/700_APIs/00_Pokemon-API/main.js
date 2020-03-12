const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: '25',
};

// Deconstruction
const {url, type, id} = apiData;

// Build URL to get data
// const apiUrl = `${apiData.url}${apiData.type}/${apiData.id}`;
const apiUrl = `${url}${type}/${id}`;

console.log(apiUrl);