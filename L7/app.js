// console.log("Type Guards");
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return +a + +b;
    }
    return a + b;
}
var emp1 = {
    name: "Rahul",
    privilages: ["Developer", "Coder"],
    startDate: new Date(),
};
var emp2 = {
    name: "Raj",
    // startDate: new Date(),
    privilages: ["Tester"], // we can defien only one property either it will be an Admin or an Employee
};
// Type Guard function to check if it's an Admin
function isAdmin(emp) {
    return emp.privilages !== undefined;
}
// Type Guard function to check if it's an Employee
function isEmployee(emp) {
    return emp !== undefined;
}
// Apply Type Guards
// if (isAdmin(emp2)) {
//   emp2.privilages = ["Tester"];
// } else if (isEmployee(emp2)) {
//   emp2.startDate = new Date();
// }
function printValues() {
    // Type Guards to print privilages of Admin
    if ("privilages" in emp2) {
        console.log(emp2.privilages);
    }
    // Type Guards to print startDate of Employee
    if ("startDate" in emp2) {
        console.log(emp2.startDate);
    }
}
// printValues();
//! In Classes
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("driving car...");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("driving Truck...");
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("Total ".concat(amount, " are loaded"));
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(400);
    }
    if ("loadCargo" in vehicle) {
        vehicle.loadCargo(200);
    }
    else {
        console.log("No");
    }
}
// useVehicle(v1);
useVehicle(v2);
//! Type Casting ||Type Assertion
// const userInput = <HTMLInputElement>document.getElementById("user-input")!;
var userInput = document.getElementById("user-input");
userInput.value = "Hello";
