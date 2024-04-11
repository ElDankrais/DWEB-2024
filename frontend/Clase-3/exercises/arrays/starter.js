//Arreglos

let array = [1,2,3,4,5,6,7,8,9,10,11];
// console.log(array.length);


// //Agregar y quitar elementos

// array.push(40); //agrega un elemento al final
// array[480] = 400; 
// console.log(array);
// console.log(array.length);
// console.log(array[500]);
// console.log(array);
// console.log(array.pop()); //Quita el último elemento
// console.log(array);

//Sin indice

const indice = array.indexOf(7);
console.log(array.splice(0, indice));
console.log(array);

//ordenamiento

console.log(array.sort((a, b) => b - a ));

//includes

console.log(array.includes(7));

const string = array.join('-');

const arreglo = string.split('-');

console.log(arreglo, string);

//ITERAR:

for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
}

arreglo.forEach((value, index) => console.log(value, index));

// filter

console.log(array.filter(numero => numero !== 7));

