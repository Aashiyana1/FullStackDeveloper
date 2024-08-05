let y= "Number Method";
const num = 123.456;

document.getElementById("Heading2").innerHTML=y;
document.write("The number is in string:" + num.toString());
document.write("<br>The exponential of the number is:" + num.toExponential(2));
document.write("<br>The fixed number is:" + num.toFixed(2));
document.write("<br> The Precision number is:" + num.toPrecision(5));
document.write("<br> The value of number is:" + num.valueOf());


// Number toString()
/*console.log("toString():", num.toString());

// Number toExponential()
console.log("toExponential(2):", num.toExponential(2));

// Number toFixed()
console.log("toFixed(2):", num.toFixed(2));

// Number toPrecision()
console.log("toPrecision(5):", num.toPrecision(5));

// Number valueOf()
console.log("valueOf():", num.valueOf());*/