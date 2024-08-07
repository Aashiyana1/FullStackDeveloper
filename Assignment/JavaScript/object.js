// Create and display results on the browser
document.open();
document.write("<h1>JavaScript Object Methods and Properties</h1>");

let u1 = {
    mobile: "+91892345678"
};

u1.name = "John Doe";
u1.gender = "Male";
u1.dob = new Date("01-01-2025");

document.write("<p>u1.gender: " + u1.gender + "</p>");

var u2 = new Object();
u2.name = "Maria Doe";
u2.gender = "Female";
u2.dob = new Date("01-01-2029");

document.write("<p>u2.dob: " + u2.dob + "</p>");

function User(name, gender, dob, mobile, email) {
    this.innerName = name;
    this.innerGender = gender;
    this.iDob = dob;
    this.iMobile = mobile;
    this.iEmail = email;

    document.write("<p>User created: name=" + this.innerName + ", gender=" + this.innerGender + ", dob=" + this.iDob + ", mobile=" + this.iMobile + ", email=" + this.iEmail + "</p>");
}

let u3 = new User("Mantissa", "Female", "01-01-1996", "+91976787123", "mantissa@gmail.com");

document.write("<p>u3.mobile: " + u3.iMobile + "</p>");

let fobj = { name: "John Doe" };
let sObj = { email: "john@gmail.com" };

Object.assign(fobj, sObj);

document.write("<p>fobj after Object.assign: name=" + fobj.name + ", email=" + fobj.email + "</p>");

let p1 = {
    firstName: "Sonali",
    lastName: "Bedre",
    fullName: function(jOp) {
        return this.firstName + jOp + this.lastName;
    }
};

document.write("<p>p1.fullName(\",\"): " + p1.fullName(",") + "</p>");

let p2 = {
    firstName: "Manisha",
    lastName: "Koyirala"
};

fn = p1.fullName.bind(p2);
document.write("<p>fn(\"$\"): " + fn("$") + "</p>");
document.write("<p>p1.fullName.call(p2, \"^\"): " + p1.fullName.call(p2, "^") + "</p>");
document.write("<p>p1.fullName.apply(p2, [\"/\"]): " + p1.fullName.apply(p2, ["/"]) + "</p>");

document.write("<p>Object.entries(p1): " + Object.entries(p1).map(e => e.join(": ")).join(", ") + "</p>");
document.write("<p>Object.values(p1): " + Object.values(p1).join(", ") + "</p>");
document.write("<p>Object.keys(p1): " + Object.keys(p1).join(", ") + "</p>");

Object.freeze(p1);
document.write("<p>p1 after Object.freeze: firstName=" + p1.firstName + ", lastName=" + p1.lastName + "</p>");

p1.email = "abcd@gmail.com";  // This should not change the object as it's frozen
document.write("<p>p1.email after trying to set it: " + p1.email + "</p>");
document.write("<p>Object.isFrozen(p1): " + Object.isFrozen(p1) + "</p>");

Object.preventExtensions(p1);
document.write("<p>p1 after Object.preventExtensions: firstName=" + p1.firstName + ", lastName=" + p1.lastName + "</p>");

document.write("<h2>Additional Object Methods</h2>");

let proto = { greet: "Hello" };
let obj = Object.create(proto, { name: { value: "John" } });
document.write("<h3>Object.create</h3>");
document.write("<p>Object created with prototype: name=" + obj.name + ", greet=" + obj.greet + "</p>");

let person = {};
Object.defineProperties(person, {
    name: { value: "Jane", writable: true },
    age: { value: 30, writable: false }
});
document.write("<h3>Object.defineProperties</h3>");
document.write("<p>Person object: name=" + person.name + ", age=" + person.age + "</p>");

let student = {
    name: 'John Doe',
    age: 22,

// Custom toString method
toString: function() {
    return "Student: Name=" + this.name + ", Age=" + this.age;
},

// Custom valueOf method
valueOf: function() {
    return "Student Name: " + this.name + ", Age: " + this.age;
}
};
document.write("<h3>Object.defineProperty</h3>");
document.write("<p>Student object with name: name=" + student.name + "</p>");

let entriesArray = [['subject1', 'Math'], ['subject2', 'Science']];
let objFromEntries = Object.fromEntries(entriesArray);
document.write("<h3>Object.fromEntries</h3>");
document.write("<p>Object created from entries: " + Object.entries(objFromEntries).map(e => e.join(": ")).join(", ") + "</p>");

let descriptor = Object.getOwnPropertyDescriptor(student, 'name');
document.write("<h3>Object.getOwnPropertyDescriptor</h3>");
document.write("<p>Descriptor of name property: </p>");
document.write("<ul>");
Object.entries(descriptor).forEach(([key, value]) => {
    document.write("<li>" + key + ": " + value + "</li>");
});
document.write("</ul>");

let descriptors = Object.getOwnPropertyDescriptors(student);
document.write("<h3>Object.getOwnPropertyDescriptors</h3>");
document.write("<p>Descriptors of student object: </p>");
document.write("<ul>");
Object.entries(descriptors).forEach(([key, desc]) => {
    document.write("<li><strong>" + key + ":</strong></li>");
    document.write("<ul>");
    Object.entries(desc).forEach(([descKey, descValue]) => {
        document.write("<li>" + descKey + ": " + descValue + "</li>");
    });
    document.write("</ul>");
});
document.write("</ul>");

let propertyNames = Object.getOwnPropertyNames(student);
document.write("<h3>Object.getOwnPropertyNames</h3>");
document.write("<p>Property names of student object: </p>");
document.write("<ul>");
propertyNames.forEach(name => {
    document.write("<li>" + name + "</li>");
});
document.write("</ul>");


let extensible = Object.isExtensible(student);
document.write("<h3>Object.isExtensible</h3>");
document.write("<p>Is student object extensible? " + extensible + "</p>");

let person2 = {};
Object.defineProperties(person2, {
    name: { value: "Jane", writable: true },
    age: { value: 30, writable: false }
});

let sealed = Object.isSealed(person2);
document.write("<h3>Object.isSealed</h3>");
document.write("<p>Is person2 object sealed? " + sealed + "</p>");

Object.preventExtensions(student);
document.write("<h3>Object.preventExtensions</h3>");
document.write("<p>Is student object extensible after preventExtensions? " + Object.isExtensible(student) + "</p>");

Object.prototype.sayHello = function() { return "Hello!"; };
document.write("<h3>Object.prototype</h3>");
document.write("<p>Prototype method sayHello: " + ({}).sayHello() + "</p>");

Object.seal(person2);
document.write("<h3>Object.seal</h3>");
document.write("<p>Is person2 object sealed after seal? " + Object.isSealed(person2) + "</p>");

document.write("<h3>Object.toString</h3>");
document.write("<p>String representation of student object: " + student.toString() + "</p>");

document.write("<h3>Object.valueOf</h3>");
document.write("<p>Primitive value of student object: " + student.valueOf() + "</p>");

let values = Object.values(student);
document.write("<h3>Object.values</h3>");
document.write("<p>Values of student object: " + values.join(", ") + "</p>");

document.close();
