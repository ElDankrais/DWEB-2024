'use strict';
// var x = 5;
// x = 'perro';
// console.log(x);

// let tiempos = 4;

// if (tiempos > 3) {
//     tiempos = 30;
//     let horas = 5;
//     console.log(horas);
// }

// console.log(horas);

//HOISTING:

var boca;

console.log(boca);

boca = 'Boca el más grande';


//strings 

let pokemon = '  cyndaquil ';
console.log(pokemon.length);

// métodos strings
console.log(pokemon.substring(3, 6));
console.log(pokemon.charAt(2));
console.log(pokemon.toUpperCase());
console.log(pokemon);

//eliminar espacios

console.log(pokemon.replace('cyn', '*'));
console.log(pokemon.slice(0, 7));
console.log(pokemon.includes('*'));
console.log(pokemon + '  AWITA');

// LO RARO
console.log('5'+3);


//Template strings;

const nombre = 'Juanito';

const apellido = 'Apellido';

const edad = 29;

console.log(`${nombre} se apellida ${apellido} y va a cumplir ${edad}`);
