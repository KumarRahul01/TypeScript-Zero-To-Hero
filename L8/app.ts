console.log("Generics");

//! 1. Generics => Generics in TypeScript are a way to define reusable and flexible components (like functions, classes, and interfaces) that can work with any data type.

// one type is connected to another type is called Generic (temp Definition)

// const fruits: string[] = ["Apple", "Banana"];
const fruits: Array<string> = ["Apple", "Banana"];
fruits.push("Mango");

type Person = {
  name: string;
  age: number;
};

//! Not possible
// const boy1: Person[] = {
//   name:
// }

//* Possible
const boy: Array<Person> = [
  {
    name: "Raju",
    age: 10,
  },
];

function identity<T>(arg: T): T {
  return arg;
}

//? <T>: T is a placeholder for a type that will be passed when calling the function.
//? arg: T: The parameter arg is of the type T.
//? T is used to ensure that the type of the argument and the return value are the same.

console.log(identity(10)); // inferred as number
console.log(identity("Ram")); // inferred as string

//! 2. Generic Constraints:

function createObject<T extends string, U extends number>(
  name: T,
  age: U
): { name: T; age: U } {
  return { name, age };
}

console.log(createObject("Chutki", 19));
// console.log(createObject(10, "Chutki")); // error

//! 3. Generic Interfaces

interface Box<T> {
  value: T;
}

const obj1: Box<string> = {
  value: "Ram",
};

const obj2: Box<number> = {
  value: 20,
};

console.log(obj1);
console.log(obj2);

//! 4. Generic Defaults

interface Person2<T = string> {
  data: T;
  status: number;
}

const res: Person2 = {
  data: "Success",
  status: 201,
};

console.log(res);

//! 5. Generic with classes

class Container<T> {
  private content: T;
  constructor(content: T) {
    this.content = content;
  }

  getContent(): T {
    return this.content;
  }
}

const strContainer = new Container<string>("Hello");
const strContainer2 = new Container<number>(100);

console.log(strContainer);
console.log(strContainer2);

//! 6. Generic with Arrays:

function getFirst<T>(arr: T[]): T {
  return arr[0];
}

console.log(getFirst([1, 2]));
console.log(getFirst(["a", "b"]));

//! 7. Generic with keyof

// function getProperty(obj: object, key: string) {
//   return obj[key];
// }

// const res1 = getProperty({}, "name"); // undefined

function getProperty<T extends object, K extends keyof T>(
  obj: T,
  key: K
): T[K] {
  return obj[key];
}
const per = {
  name: "patel",
  age: 21,
};
const res1 = getProperty(per, "name"); // undefined
console.log(res1);
