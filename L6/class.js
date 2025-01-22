"use strict";
// console.log("Hello from classes");
class Department {
    constructor(name) {
        this.name = name;
    }
    displayName() {
        return this.name + " Department";
    }
}
const dep1 = new Department("Account");
console.log(dep1.displayName());
