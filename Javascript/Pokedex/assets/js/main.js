import { Pokemon } from "./pokemonModel.js";

async function api() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=9');
    return await response.json();
}


async function getPokemon() {
    const pokemons = await api();
    const promises = pokemons.results.map(async function (x) {
        const response = await fetch(x.url);
        const data = await response.json();
        return convertJsonParaModel(data);
    } )
    return await Promise.all(promises);
}

function convertJsonParaModel (results) {
    const pokemon = new Pokemon;
    pokemon.nome = results.name;
    pokemon.numero = results.id;

    const tipos = results.types.map((x)=> x.type.name);
    pokemon.tipos = tipos;
    const [tipo] = tipos
    pokemon.tipo = tipo

    pokemon.foto = results.sprites.other.showdown.front_default;

    return pokemon;
}


function pokemonTypes(pokemon, obj) {
    return pokemon.tipos.map((x)=>`<li class="badge rounded-pill text-bg-${obj[x]}">${x}</li>`)
}

async function insertData(idElement) {
    const tipos = {
        grass : 'success',
        fire : 'orange',
        water : 'primary',
        bug : 'indigo',
        electric : 'warning',
        normal : 'light',
        poison : 'danger',
        flying: 'info',
        ground: 'marrom',
        fairy: 'pink',
        fighting: 'verdeEscuro',
        ice: 'cyan',
        psychic: 'verdeAgua',
        rock: 'dark',
        ghost: 'cinza',
        dragon: 'dragon',
        dark: 'escuro'
    }

    const teste = document.querySelector(idElement)
    const pokemon = await getPokemon()
    const card = pokemon.map((x)=> `<li class="border-0 shadow-sm bg-light col-12 col-md-3 col-sm-5 d-flex flex-column list-group-item rounded text-dark">
        <div class=" d-flex justify-content-between">
            <span class="text-capitalize">${x.nome}</span>
            <span class="fw-bold">#${x.numero}</span>
        </div>
        <div class="d-flex justify-content-between my-auto">
            <ol class="p-0 d-flex gap-1 flex-column my-auto" style="list-style: none;">
                ${pokemonTypes(x, tipos).join('')}
            </ol>
            <img class="align-self-end" style="max-width: 45%;" src="${x.foto}" alt="" srcset="">
        </div>
    </li>`);
    teste.innerHTML = card.join('');

    
    
}



// Main
document.addEventListener('DOMContentLoaded', async function () {
    const id = '#pokemon-list'
    insertData(id)
    
})