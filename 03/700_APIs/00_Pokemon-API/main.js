// https://youtu.be/tFVdxGgJPCo
const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: '25',
};

// Destructuring
const {url, type, id} = apiData;
// Same as:
// const url = apiData.url;
// const type = apiData.type;
// const id = apiData.id;

// Build URL to get data
// const apiUrl = `${apiData.url}${apiData.type}/${apiData.id}`;
const apiUrl = `${url}${type}/${id}`; // Template litteral
// Object Literals: {}
// Boolean Literals: true, false
// String Literals: '', ""
// Template Literals: ``

console.log(apiUrl);

// fetch API returns a promise
fetch(apiUrl)
    .then( (data) => {
        // return in JSON format
        return data.json();
    } )
    .then( (pokemon) => {
        //return console.log(pokemon);
        return generateHTML(pokemon);
    });

const generateHTML = (data) => {
    console.log(data);

    const html = `
        <div class="name">${data.name}</div>
        <img src="${data.sprites.front_default}" alt="">
        <div class="details">
            <span>Height: ${data.height}</span>
            <span>Weight: ${data.weight}</span>
        </div>
    `;

    const pokemonDiv = document.querySelector('.pokemon');

    pokemonDiv.innerHTML = html;
};