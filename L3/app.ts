//! Union => Union is used when we have to accept more than one type of data type for a variable and function

function combine(arg1: string | number, arg2: string | number) {
  if (typeof arg1 === "number" && typeof arg2 === "number") {
    console.log(arg1 + arg2);
  } else {
    console.log(arg1.toString() + arg2.toString());
  }
}

combine(10, 20);
combine("Rahul ", "Patel");

//! Literal Types => Used to define custom types to any variable or functions.

function updatedCombine(
  arg1: string | number,
  arg2: string | number,
  customType: "asString" | "asNumber"
) {
  if (
    (typeof arg1 === "number" && typeof arg2 === "number") ||
    customType === "asNumber"
  ) {
    console.log(+arg1 + +arg2);
  } else {
    console.log(arg1.toString() + arg2.toString());
  }
}

updatedCombine(10, "50", "asNumber");
updatedCombine("Rahul ", "Patel", "asString");

//! Type Alias || custom types => used to define custom types to pre-defined types, makes the process of defining multiple types to a single variable easy. Also improves the readbility of the code. Ex: type CombinedType = number | string | boolean | string[]

// ? Example 1:

type combineNumAndStirng = number | string;
type customTypeCheck = "asString" | "asNumber";

function updatedCombineTypeAlias(
  arg1: combineNumAndStirng,
  arg2: combineNumAndStirng,
  customType: customTypeCheck
) {
  if (
    (typeof arg1 === "number" && typeof arg2 === "number") ||
    customType === "asNumber"
  ) {
    console.log(+arg1 + +arg2);
  } else {
    console.log(arg1.toString() + arg2.toString());
  }
}

updatedCombineTypeAlias(10, "90", "asNumber");
updatedCombineTypeAlias("Rahul ", "Patel", "asString");

// ? Example 2:

type User = {
  name: string;
  age: number;
  skills: string[];
};

const student: User = {
  name: "Raju",
  age: 12,
  skills: ["React", "node"],
};

function greet(user: User) {
  console.log(`Hello ${user.name}`);
}

greet(student);
