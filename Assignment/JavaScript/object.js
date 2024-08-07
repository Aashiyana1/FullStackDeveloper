// Create and display results on the browser
document.open();
document.write("<h1>JavaScript Object Methods and Properties</h1>");

// Object.assign
let target = {};
let source1 = { a: 1 };
let source2 = { b: 2 };
Object.assign(target, source1, source2);
document.write("<h2>Object.assign</h2>");
document.write("<p>Target after Object.assign: a=" + target.a + ", b=" + target.b + "</p>");

// Object.constructor
document.write("<h2>Object.constructor</h2>");
document.write("<p>Constructor of Object: " + Object.prototype.constructor.name + "</p>");

// Object.create
let proto = { greet: "Hello" };
let obj = Object.create(proto, { name: { value: "John" } });
document.write("<h2>Object.create</h2>");
document.write("<p>Object created with prototype: name=" + obj.name + ", greet=" + obj.greet + "</p>");

// Object.defineProperties
let person = {};
Object.defineProperties(person, {
    name: { value: "Jane", writable: true },
    age: { value: 30, writable: false }
});
document.write("<h2>Object.defineProperties</h2>");
document.write("<p>Person object: name=" + person.name + ", age=" + person.age + "</p>");

// Object.defineProperty
let car = {};
Object.defineProperty(car, 'model', {
    value: 'Toyota',
    writable: true,
    enumerable: true,
    configurable: true
});
document.write("<h2>Object.defineProperty</h2>");
document.write("<p>Car object with model: model=" + car.model + "</p>");

// Object.entries
let entries = Object.entries(car);
document.write("<h2>Object.entries</h2>");
let entriesHtml = entries.map(([key, value]) => key + "=" + value).join(", ");
document.write("<p>Entries of car object: " + entriesHtml + "</p>");

// Object.freeze
Object.freeze(person);
document.write("<h2>Object.freeze</h2>");
document.write("<p>Is person object frozen? " + Object.isFrozen(person) + "</p>");

// Object.fromEntries
let entriesArray = [['key1', 'value1'], ['key2', 'value2']];
let objFromEntries = Object.fromEntries(entriesArray);
document.write("<h2>Object.fromEntries</h2>");
let fromEntriesHtml = Object.entries(objFromEntries).map(([key, value]) => key + "=" + value).join(", ");
document.write("<p>Object created from entries: " + fromEntriesHtml + "</p>");

// Object.getOwnPropertyDescriptor
let descriptor = Object.getOwnPropertyDescriptor(car, 'model');
document.write("<h2>Object.getOwnPropertyDescriptor</h2>");
document.write("<p>Descriptor of model property: value=" + descriptor.value +
    ", writable=" + descriptor.writable +
    ", enumerable=" + descriptor.enumerable +
    ", configurable=" + descriptor.configurable + "</p>");

// Object.getOwnPropertyDescriptors
let descriptors = Object.getOwnPropertyDescriptors(car);
document.write("<h2>Object.getOwnPropertyDescriptors</h2>");
let descriptorsHtml = Object.entries(descriptors).map(([key, desc]) =>
    key + ": value=" + desc.value +
    ", writable=" + desc.writable +
    ", enumerable=" + desc.enumerable +
    ", configurable=" + desc.configurable
).join("<br>");
document.write("<p>Descriptors of car object:<br>" + descriptorsHtml + "</p>");

// Object.getOwnPropertyNames
let propertyNames = Object.getOwnPropertyNames(car);
document.write("<h2>Object.getOwnPropertyNames</h2>");
document.write("<p>Property names of car object: " + propertyNames.join(", ") + "</p>");

// Object.isExtensible
let extensible = Object.isExtensible(car);
document.write("<h2>Object.isExtensible</h2>");
document.write("<p>Is car object extensible? " + extensible + "</p>");

// Object.isFrozen
document.write("<h2>Object.isFrozen</h2>");
document.write("<p>Is person object frozen? " + Object.isFrozen(person) + "</p>");

// Object.isSealed
let sealed = Object.isSealed(person);
document.write("<h2>Object.isSealed</h2>");
document.write("<p>Is person object sealed? " + sealed + "</p>");

// Object.keys
let keys = Object.keys(car);
document.write("<h2>Object.keys</h2>");
document.write("<p>Keys of car object: " + keys.join(", ") + "</p>");

// Object.preventExtensions
Object.preventExtensions(car);
document.write("<h2>Object.preventExtensions</h2>");
document.write("<p>Is car object extensible after preventExtensions? " + Object.isExtensible(car) + "</p>");

// Object.prototype
Object.prototype.sayHello = function() { return "Hello!"; };
document.write("<h2>Object.prototype</h2>");
document.write("<p>Prototype method sayHello: " + ({}).sayHello() + "</p>");

// Object.seal
Object.seal(person);
document.write("<h2>Object.seal</h2>");
document.write("<p>Is person object sealed after seal? " + Object.isSealed(person) + "</p>");

// Object.toString
document.write("<h2>Object.toString</h2>");
document.write("<p>String representation of car object: " + car.toString() + "</p>");

// Object.valueOf
document.write("<h2>Object.valueOf</h2>");
document.write("<p>Primitive value of car object: " + car.valueOf() + "</p>");

// Object.values
let values = Object.values(car);
document.write("<h2>Object.values</h2>");
document.write("<p>Values of car object: " + values.join(", ") + "</p>");

document.close();
