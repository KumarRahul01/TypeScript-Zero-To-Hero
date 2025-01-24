// console.log("Type Guards");

//! Type Guards => In TypeScript, type guards are techniques or functions that help determine the type of a variable or object at runtime. They refine the type, allowing TypeScript to provide better type-checking and code completion.

type Combinable = string | number;
type Numberic = number | boolean;

type Universal = Combinable & Numberic; // It should be both Combinable and Numeric

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return +a + +b;
  }
  return a + b;
}

// console.log(add(10, 20));
// console.log(add("30", "20"));
// console.log(add("30", 20));

// 2.

type Admin = {
  name: string;
  privilages: Array<string>;
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;
type UnknownEmployee = Admin | Employee;

const emp1: ElevatedEmployee = {
  name: "Rahul",
  privilages: ["Developer", "Coder"],
  startDate: new Date(),
};

const emp2: UnknownEmployee = {
  name: "Raj",
  // startDate: new Date(),
  privilages: ["Tester"], // we can defien only one property either it will be an Admin or an Employee
};

// Type Guard function to check if it's an Admin
function isAdmin(emp: UnknownEmployee): emp is Admin {
  return (emp as Admin).privilages !== undefined;
}

// Type Guard function to check if it's an Employee
function isEmployee(emp: UnknownEmployee): emp is Employee {
  return (emp as Employee) !== undefined;
}

// Apply Type Guards
// if (isAdmin(emp2)) {
//   emp2.privilages = ["Tester"];
// } else if (isEmployee(emp2)) {
//   emp2.startDate = new Date();
// }

function printValues(): void {
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

class Car {
  drive() {
    console.log("driving car...");
  }
}

class Truck {
  drive() {
    console.log("driving Truck...");
  }

  loadCargo(amount: number) {
    console.log(`Total ${amount} are loaded`);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(400);
  }

  if ("loadCargo" in vehicle) {
    vehicle.loadCargo(200);
  } else {
    console.log("No");
  }
}

// useVehicle(v1);
useVehicle(v2);

//! Type Casting ||Type Assertion

// const userInput = <HTMLInputElement>document.getElementById("user-input")!;
const userInput = document.getElementById("user-input")! as HTMLInputElement;
userInput.value = "Hello";
