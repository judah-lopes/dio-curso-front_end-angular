const pokemonList = document.querySelector(`#pokemonList`)

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon planta">
            <span class="dex-number">#001</span>
            <span class="name">${pokemon.name}</span>
            
            <div class="details">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>

                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="${pokemon.name}">
            </div>
        </li>
    `
}

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')  
})