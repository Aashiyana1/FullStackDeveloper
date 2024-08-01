console.log("This is for Practice Purpose")

/*----Variables----->*/

let a = 67
console.log(a)
a = "aashiyana"
console.log(a)

console.log("Variables *var-let-const*")
console.log("!!var!!")
var b = 40
var b = "Pathan"
{
    var b = 40
    console.log(b)
}
console.log(b)

console.log("!!let!!")
let c = 45
c ="Full Stack"
{
    let c = 45
    console.log(c)
}
console.log(c)

console.log("!!Const!!")

const d = 20;
console.log(d)

/*------Data Types-----------*/

console.log("*******Data Types********")
let x = null;
console.log(typeof x)
let y = 251;
console.log(typeof y)
let z = true;
console.log(typeof z)
let p = "Aashyana";
console.log(typeof p)
let q 
console.log(typeof q)

/*-------Practice-----------*/

// string and add number
let r = "HTML"
let s = 5
console.log(r + s)

/*-----------Operators-----------*/

console.log("***************Operators************************")
console.log("(!Airthmetic!)")
let num1 = 40;
let num2 = 3;
console.log("num1 + num2 =", num1+num2)
console.log("num1 - num2 =", num1-num2)
console.log("num1 * num2 =", num1*num2)
console.log("num1 / num2 =", num1/num2)
console.log("num1 % num2 =", num1%num2)
console.log("num1 ** num2 =", num1**num2)
console.log("num1++ =", num1++)
console.log("num1 =", num1)
console.log("num2-- =", num2--)
console.log("num2 =", num2)

console.log("(!Assignment!)")
let assignment = 15;
assignment +=5
console.log("assignment =", assignment)
assignment -=5
console.log("assignment =", assignment)
assignment *=5
console.log("assignment =", assignment)
assignment /=5
console.log("assignment =", assignment)
assignment %=5
console.log("assignment =", assignment)
assignment = 2;
assignment **= 3;
console.log("assignment =", assignment)

console.log("(!Comparison!)")
let comp1 = 5;
let comp2 = 2;
console.log("comp1==comp2", comp1==comp2)
console.log("comp1!=comp2", comp1!=comp2)
console.log("comp1>comp2", comp1>comp2)
console.log("comp1<comp2", comp1<comp2)
console.log("comp1>=comp2", comp1>=comp2)
console.log("comp1<=comp2", comp1<=comp2)

/*-----------Loops-----------*/

console.log("***************Loops************************")
console.log("(!For!)")
console.log("Counting from 1 to 5:");
        for (let i = 1; i <= 5; i++) {
            console.log(i);
        }

console.log("!while!")
console.log("Counting from 0 to 5:");
let i = 0;
while (i <= 5) {
    console.log(i);
    i++;
}

console.log("!do-while!")
console.log("Counting from 1 to 10:");
i = 1;
do {
    console.log(i);
    i++;
    } while (i <= 10);

/*-----------Functions-----------*/

console.log("***************Functions************************")
console.log("function to find square of a number");
function squarenum(square)
{
    return square * square;
}
let output = squarenum(3);
console.log("squarenum", output);

/*-----------Conditional Statements-----------*/

console.log("***************Conditional Statements************************")
console.log("!!if!!");
let number = 8;
if (number > 5) {
    console.log("The number is greater than 5.");
}

console.log("!!if..else!!")
number = 3;
if (number > 5) {
    console.log("The number is greater than 5.");
} else {
    console.log("The number is less than 5.");
}

console.log("!!if...else if...else!!")
number = 40;
if (number > 10) {
    console.log("The number is greater than 10.");
} else if (number > 5) {
    console.log("The number is equals to 10.");
} else {
    console.log("The number is less than 10.");
}

console.log("!!!!!!switch!!!!")
console.log("Calculator by using Switch Statement")

function calculate() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const operator = prompt("Enter the operator (+, -, *, /):");
    const num2 = parseFloat(prompt("Enter the second number:"));
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Error: Division by zero';
            }
            break;
        default:
            result = 'Error: Invalid operator';
    }
    alert("Result: " + result);
}
calculate();
