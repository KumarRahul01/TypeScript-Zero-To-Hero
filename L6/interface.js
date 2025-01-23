"use strict";
console.log("Hello from interfaces");
//* Interface for object
const user = {
    name: "Rahul",
    age: 22,
    greet() {
        console.log("Hello");
    },
};
console.log(user);
class Dog {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log("Bark");
    }
}
const dog1 = new Dog("Kalu");
dog1.makeSound();
class Demo {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log("Hello Demo");
    }
}
const d1 = new Demo("Demo1");
d1.greet();
console.log(d1.name);
