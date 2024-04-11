function Pet(name) {
    this.name = name;
  
    this.getName = () => this.name;
  }
  
  const cat = new Pet('Fluffy');


//Parámetros por defecto


// Antes

function rollDice(nombreUsuario = 'Invitado', numSides = 6) {
    console.log(`${nombreUsuario}`);
    return Math.floor(Math.random() * numSides) + 1;
}

// Spread operator (...)

// Expande un iterable en una lista de argumentos;

const nums = [12, 13, 14, 15, 16, 17, 18, 19, 20];
const otros = [...nums];

otros[0] = 35;

console.log(nums, otros);

console.log(Math.max(...nums));

// spread operator objetos

const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' };

const catDog = { ...feline, ...canine };

console.log(catDog);

const dataFromForm = {
    email: 'papitas@gmail.com',
    password: '123456',
    username: 'Guzmanlover'
}

const newUser = {...dataFromForm, id: 123}

console.log(newUser);

//Operador rest

function sum(...nums) {
    return nums.reduce((total, el) => total + el);
}

console.log(sum(19,23,44,56,70,7,78,-45,312));

//Destructuración

//forma corta de sacar elementos en un arreglo u objeto

const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934, 800000];

//1er, 2do, 3ro, resto

scores.sort((a, b) => b - a);

const [gold, silver, bronze, ...left] = scores;

console.log(gold, silver, bronze, left);

// objetos

const user = {
    email: 'harvey@gmail.com',
    password: 'sCoTt1948sMiTh',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 2000,
    bio: 'Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California, where he was elected to the San Francisco Board of Supervisors',
    city: 'San Francisco',
    state: 'California'
}

const user2 = {
    email: 'Stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}

const {email, firstName, lastName, city, bio} = user;

console.log(email, city, bio);

const { born: birthYear, died: deathYear = 'N/A'} = user;

//param destructruring

function fullName({firstName, lastName}) {
    console.log(`${firstName} ${lastName}`);
}


fullName(user)


