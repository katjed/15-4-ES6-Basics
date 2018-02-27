// Ex. 1
const string1 = 'Hello';
const string2 = 'World';

console.log(`${string1} ${string2}`);

// Ex. 2
const multiply = (a, b = 1) => a * b;

console.log(multiply(2, 3));
console.log(multiply(5));

// Ex. 3
const average = (...args) => args.reduce((sum, element) => sum + element) / args.length;

console.log(average(2, 2, 2));

// Ex. 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades));

// Ex. 5
const data = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , firstName, , lastName] = data;

console.log(`${firstName} ${lastName}`);
