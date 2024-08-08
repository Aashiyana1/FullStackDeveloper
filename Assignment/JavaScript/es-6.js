// Arrow Functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const greet = () => 'Hello, World!';

// Template Literals
const name = 'Aashiyana';
const greeting = `Hello, ${name}!`;

// Destructuring Assignment
const [x, y] = [10, 5];
const { name: personName, age } = { name: 'Aashiyana', age: 25 };

// Default Parameters
function greetUser(name = 'Guest') {
    return `Hello, ${name}!`;
}

// Rest and Spread Operators
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];
function sum(...nums) {
    return nums.reduce((acc, curr) => acc + curr, 0);
}

// Classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, ${this.name}!`;
    }
}
const Aashiyana = new Person('Aashiyana', 25);

// Promises
const fetchData = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data received'), 1000);
});

// Display Results
document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('output');
    output.innerHTML = `
        <p><strong>Arrow Functions:</strong> Add: ${add(10, 5)}, Subtract: ${subtract(10, 5)}, Greet: ${greet()}</p>
        <p><strong>Template Literals:</strong> ${greeting}</p>
        <p><strong>Destructuring Assignment:</strong> x: ${x}, y: ${y}, Name: ${personName}, Age: ${age}</p>
        <p><strong>Default Parameters:</strong> ${greetUser()} ${greetUser('Aashiyana')}</p>
        <p><strong>Rest and Spread Operators:</strong> Sum: ${sum(1, 2, 3, 4)}, More Numbers: ${moreNumbers.join(', ')}</p>
        <p><strong>Classes:</strong> ${Aashiyana.greet()}</p>
    `;

    fetchData().then(data => {
        output.innerHTML += `<p><strong>Promises:</strong> ${data}</p>`;
    });
});
