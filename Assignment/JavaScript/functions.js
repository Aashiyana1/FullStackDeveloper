// Standalone Function
function calculateAge(birthYear) {
    let currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

// Object with a Method
let user = {
    name: "Aashiyana",
    birthYear: 1999,
    getAge: function() {
        return calculateAge(this.birthYear); // Calling the standalone function
    }
};

// Display the results using document.getElementById
document.getElementById("functionOutput").innerText = "Standalone Function: Age is " + calculateAge(1999);
document.getElementById("methodOutput").innerText = "Method: Age of " + user.name + " is " + user.getAge();
        
        
/*a = 10;
b = 20;
c = (function addition() {
var a = "ABC";
            var b = 80;
            return a + b;
        })();

        // Display result of IIFE
        document.write("<h2>IIFE Result</h2>");
        document.write("<p>" + c + "</p>");

        // Closure Example
        function outer() {
            var a = 30;
            var b = 40;
            return function inner() {
                return a + b;
            }
        }

        let innerFunction = outer();

        // Display result of Closure
        document.write("<h2>Closure Result</h2>");
        document.write("<p>" + innerFunction() + "</p>");*/