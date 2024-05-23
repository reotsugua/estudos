async function api() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10');
    return await response.json();
}


async function getPokemon() {
    const pokemons = await api();
    const promises = pokemons.results.map(async function (x) {
        const response = await fetch(x.url);
        const data = await response.json();
        return data;
    } )
    return await Promise.all(promises);
}


function pokemonTypes(params, obj) {
    return params.types.map((y) => `<li class="badge rounded-pill text-bg-${obj[y.type.name]}">${y.type.name}</li>`)
}

async function insertData(idElement) {
    const tipos = {
        grass : 'success',
        fire : 'danger',
        water : 'primary',
        bug : 'dark',
        normal : 'light'
    }
    const teste = document.querySelector(idElement)
    const data = await getPokemon()
    const card = data.map((x)=> `<li class="bg-secondary col-12 col-md-3 col-sm-5 d-flex flex-column list-group-item rounded text-white">
        <div class=" d-flex justify-content-between">
            <span>${x.name}</span>
            <span>#${x.id}</span>
        </div>
        <div class="d-flex justify-content-between my-auto">
            <ol class="p-0 d-flex gap-1 flex-column my-auto" style="list-style: none;">
                ${pokemonTypes(x, tipos).join('')}
            </ol>
            <img class="align-self-end" style="max-width: 45%;" src="${x.sprites.other.showdown.front_default}" alt="" srcset="">
        </div>
    </li>`);
    teste.innerHTML = card.join('');

    
    
}



// Main
document.addEventListener('DOMContentLoaded', async function () {
    const id = '#pokemon-list'
    insertData(id)
    
})