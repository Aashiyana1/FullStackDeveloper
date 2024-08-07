class User {
    #firstName;
    #lastName;

    constructor(f, l) {
        this.#firstName = f;
        this.#lastName = l;
    }

    fullName() {
        return this.#firstName + " " + this.#lastName;
    }

    get firstName() {
        return this.#firstName.toUpperCase();
    }

    get lastName() {
        return this.#lastName;
    }

    set firstName(f) {
        this.#firstName = f;
    }

    set lastName(l) {
        this.#lastName = l;
    }
}

let u1 = new User("John", "Doe");
u1.firstName = "Madhuri";

// Display User's fullName and firstName
document.write("<h2>User Information</h2>");
document.write("<p>First Name (modified): " + u1.firstName + "</p>");
document.write("<p>Full Name: " + u1.fullName() + "</p>");

class Employee extends User {
    #salary;

    constructor(f, l, s) {
        super(f, l);
        this.#salary = s;
    }

    get salary() {
        return this.#salary;
    }

    set salary(num) {
        this.#salary = num;
    }
}

let e1 = new Employee("Mahesh", "Jadhav", 20000);

// Display Employee's information
document.write("<h2>Employee Information</h2>");
document.write("<p>First Name: " + e1.firstName + "</p>");
document.write("<p>Last Name: " + e1.lastName + "</p>");
document.write("<p>Salary: " + e1.salary + "</p>");
document.write("<p>Full Name: " + e1.fullName() + "</p>");