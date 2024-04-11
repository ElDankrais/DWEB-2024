// // //FUNCIONES

// // function saludo(saludo) {
// //     console.log(saludo);
// //     return 9;
// // }

// // console.log(saludo('Buenos días estrellitas'));

// // function sumar(x, y) {
// //     if (typeof x !== 'number' || typeof y !== 'number') {
// //         return 'No se puede sumar';
// //     }
// //     return x + y;
// // }

// // console.log(sumar(1, 3));

// // //Scope

// // //Lexical Scope

// // function bankRobbery() {
// //     const heroes = ['Batman', 'Chapulin', 'Rey Misterio'];
// //     return function cryForHelp() {
// //         for (let hero of heroes) {
// //             console.log(`HELP ${hero}`);
// //         }
// //     }
// // }

// // bankRobbery()();

// // //Function expressions

// // const square = function(num) {
// //     return num ** 2;
// // }

// // console.log(square(10));

// // //THIS

// // this.a = 40;
// // function alpha() {
// //     this.b = 90;
// //     console.log(this);
// // }



// // alpha();


// const objeto = {
//     value: 2,
//     greet: function() {
//         console.log(this.value + 7)
//     }
// }

// objeto.greet();

// //THIS

// const object2 = {
//     message: 'Hello, World!'
// };

// function logMessage() {
//     console.log(this.message); // "Hello, World!"
// }

// logMessage();

// // Cambiar contextos

// // 1. Call: Recibe argumentos como parámetros

// logMessage.call(object2);

// // 2. apply: Recibe argumentos como una lista

// logMessage.apply(object2);

// // 3. Bind

// const miPrimeraFuncion = logMessage.bind(object2);
// console.log(miPrimeraFuncion());
// //High order functions
// //Funciones que trabajan con otras funciones (reciben o retornan)

// const func1 = function(a, b) {
//     return a + b
// }

// function maxValue(a, b, c, func) {
//     return a > func(b, c)
// };

// console.log(maxValue(5,2,9, func1));


// //Arrow functions y Callbacks

// const func2 = (a,b) => a + b;

// console.log(maxValue(5,2,9, func2));

// const object = {
//     who: 'Guillermo',

//     saludar() {
//         console.log(this);
//     },

//     despedir: () => console.log(this)
// };

// console.log(object.saludar());
// console.log(object.despedir());

//forEach, map, filter

const movies = [
    {
        title: 'El señor de los anillos',
        score: 78
    },
    {
        title: 'Star wars',
        score: 82
    },
    {
        title: 'Spiderman 2',
        score: 90
    },
    {
        title: 'El Paseo 5',
        score: 100
    },
]

const funcionFiltrado = a => a.includes('El')

function filtrarPeliculas(arreglo, funcFiltrado) {
    const arregloFiltrado = [];
    for (let elemento of arreglo) {
        if (funcFiltrado(elemento.title)) {
            arregloFiltrado.push(elemento);
        }
    }
    return arregloFiltrado;
}

console.log(filtrarPeliculas(movies, funcionFiltrado));

//filter

console.log(movies.filter(pelicula => funcionFiltrado(pelicula.title)));

//forEach

movies.forEach(movie => console.log(`El puntaje de esta película es: ${movie.score}`));

//map

console.log(movies.map(movie => movie.score))



//setTimeout, setInterval

//every, some

console.log(movies.some(pelicula => funcionFiltrado(pelicula.title)));
console.log(movies.every(pelicula => funcionFiltrado(pelicula.title)));

//reduce: Reduce el arreglo a un solo valor:

const scores = movies.map(movie => movie.score);

//suma

console.log(scores.reduce((total, curr) => {
    console.log(`Valor acumulado: ${total}`);
    console.log(`Valor actual: ${curr}`);

    return total + curr;
}));

// máximo de un arreglo

const numeroMaximo = scores.reduce((numMax, numero) => {
    if (numero > numMax) {
        numMax = numero;
    }

    return numMax
})

console.log(numeroMaximo);

// Contador

const  frutas  = ["manzana", "banano", "limón", "manzana", "limón", "coco", "banano", "limón"];

const contador = frutas.reduce((acumulador, fruta) => {
    if(!Object.keys(acumulador).includes(fruta)) {
        acumulador[fruta] = 0;
    }
    acumulador[fruta]++;
    return acumulador;
}, {})

console.log(contador);