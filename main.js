import { changeFields } from "./pokemonFunctions.js"

function showStats(number) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`)
    .then(response => response.json())
    .then((pokemonShowed) => {
        const pokemonHeight = pokemonShowed.height
        const pokemonWeight = pokemonShowed.weight
        const pokemonName = pokemonShowed.name
        const pokemonType1 = pokemonShowed.types[0].type.name
        const pokemonType2 = pokemonShowed.types[1].type.name
        const pokemonImg = pokemonShowed.sprites.front_default
        changeFields(pokemonHeight, pokemonWeight, pokemonName, pokemonType1, pokemonType2, pokemonImg)
    })
    .catch(error => 'It was not possible due to: ' + error)
}

window.onload = () => {
    const selectPokemon = document.getElementsByName("number")[0]
    selectPokemon.addEventListener('input', () => {
        if (selectPokemon.value === "" || selectPokemon.value <= 0) {
            return alert("Value cannot be empty."), location.reload()
        }

        showStats(selectPokemon.value)
        
    })
}