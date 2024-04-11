enum PokemonStatus {
    pending = 'PENDING',
    healing = 'HEALING',
    healed = 'HEALED',
}

interface Person {
    nombre: string
    gender?: string
    frutaFavorita?: string
}

interface PokemonTrainer extends Person {
    id: number;
    pokemonStatus: PokemonStatus
}

let nombre: string = 'Juan Sebastian';

const numero_magico: number = 2;

function multiply(a: number, b: number): number {
    return a * b;
}

function greeting(nombre: string, date: Date): string {
    return `Hola ${nombre}. Hoy es ${date.toISOString()}`
}

console.log(multiply(numero_magico, numero_magico));
console.log(greeting(nombre, new Date()));

function atenderPokemon(pokemonStatus: PokemonStatus) {
    if (pokemonStatus === PokemonStatus.healing) {
        return 'pokemon en sala';
    }
    if (pokemonStatus === PokemonStatus.healed) {
        return 'pokemon curado'
    }
    return 'pokemon no atendido';
}

const myPokemonStatus = PokemonStatus.healing;

console.log(atenderPokemon(myPokemonStatus));

const elverMP: PokemonTrainer = {
    id: 20202020,
    pokemonStatus: PokemonStatus.healed,
    nombre: 'Elver'
}