// Define the Individual class
class Individual {
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

// Create a new Individual object
let ind1 = new Individual("John", "Doe");
ind1.firstName = "Madhuri";

// Display Individual's fullName and firstName
document.getElementById("user-info").innerHTML = `
    <h2>Individual Information</h2>
    <p>First Name (modified): ${ind1.firstName}</p>
    <p>Full Name: ${ind1.fullName()}</p>
`;

// Define the Employee class that extends Individual
class Employee extends Individual {
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

// Create a new Employee object
let e1 = new Employee("Mahesh", "Jadhav", 20000);

// Display Employee's information
document.getElementById("employee-info").innerHTML = `
    <h2>Employee Information</h2>
    <p>First Name: ${e1.firstName}</p>
    <p>Last Name: ${e1.lastName}</p>
    <p>Salary: ${e1.salary}</p>
    <p>Full Name: ${e1.fullName()}</p>
`;
