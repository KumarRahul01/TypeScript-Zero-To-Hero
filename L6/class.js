"use strict";
console.log("Hello from classes.ts");
// class Department {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   displayName(): string {
//     return this.name + " Department";
//   }
// }
// const dep1 = new Department("Account");
// console.log(dep1.displayName());
// const dep2 = new Department("Admision");
// console.log(dep2.displayName());
//! Private and Public Access Modifier
//! Static method and properties
class School {
    constructor(name, affiliated = false) {
        this.name = name;
        this.affiliated = affiliated;
        this.teachersArr = [];
    }
    chageSchoolName(schName) {
        this.name = schName;
        console.log(`School name is changed to ${this.name}`);
    }
    addTeacher(teacherName) {
        this.teachersArr.push(teacherName);
        School.totalTeachers++;
        console.log(`${teacherName} is added to the teachersArr`);
    }
    makeSchoolAffiliated(val) {
        console.log(this.affiliated);
        if (val && !this.affiliated) {
            this.affiliated = val;
            console.log(`School Affiliated to CBSE`);
        }
        else {
            console.log(`School is already Affiliated to CBSE`);
        }
    }
    static totalTeachersStrength() {
        console.log("Total teachers " + School.totalTeachers);
    }
}
School.totalTeachers = 0;
//! Readonly access modifier => It is a access modifier which is initialized only once. Just like static keyword in JS.
//! Override properties and protected access modifier
class TutionCenter extends School {
    constructor(name, affiliated = false) {
        super(name, affiliated);
        // this.totalTeachers = 10; // Not possible
        this.id = Date.now().toString();
    }
    calculateMonthlyFees(totalBatches) {
        return totalBatches * 500;
    }
    // Overriding Properties
    addTeacher(teacherName) {
        if (teacherName.startsWith("Tut")) {
            return;
        }
        else {
            this.teachersArr.push(teacherName);
        }
    }
    get getBatchDetails() {
        return `Timing is MWF=> 04:00PM - 06:00PM`;
    }
    set setBatchDetails(val) {
        console.log(`Timing is TTF=> ${val}`);
    }
}
const rk = new School("RK");
rk.makeSchoolAffiliated(true);
rk.addTeacher("Doremon");
rk.addTeacher("Anupma");
rk.addTeacher("Pratibha");
// rk.totalTeachersStrength();
School.totalTeachersStrength(); // Static
rk.chageSchoolName("Rahul Kumar");
console.log(rk); // private variables are also logged in console for help in debugging but we can not acces them outside the same class
const extraMind = new TutionCenter("ExtraMind");
console.log(extraMind);
extraMind.addTeacher("Akhilo Bhandari");
extraMind.addTeacher("Chand Ali");
extraMind.makeSchoolAffiliated(true);
TutionCenter.totalTeachersStrength(); // Static
console.log(extraMind.getBatchDetails);
extraMind.setBatchDetails = "08:00PM - 09:00PM";
//! Abstract classes => Abstract methods are those methods which have no implementation, must be implemented by subclasses.
class Animal {
    move() {
        // Concrete method
        console.log("Moving...");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Bark!"); // Implementation of abstract method
    }
}
const dog = new Dog();
dog.makeSound(); // Bark!
dog.move();
