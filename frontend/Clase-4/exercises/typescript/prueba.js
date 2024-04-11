var PokemonStatus;
(function (PokemonStatus) {
    PokemonStatus["pending"] = "PENDING";
    PokemonStatus["healing"] = "HEALING";
    PokemonStatus["healed"] = "HEALED";
})(PokemonStatus || (PokemonStatus = {}));
var nombre = 'Juan Sebastian';
var numero_magico = 2;
function multiply(a, b) {
    return a * b;
}
function greeting(nombre, date) {
    return "Hola ".concat(nombre, ". Hoy es ").concat(date.toISOString());
}
console.log(multiply(numero_magico, numero_magico));
console.log(greeting(nombre, new Date()));
function atenderPokemon(pokemonStatus) {
    if (pokemonStatus === PokemonStatus.healing) {
        return 'pokemon en sala';
    }
    if (pokemonStatus === PokemonStatus.healed) {
        return 'pokemon curado';
    }
    return 'pokemon no atendido';
}
var myPokemonStatus = PokemonStatus.healing;
console.log(atenderPokemon(myPokemonStatus));
