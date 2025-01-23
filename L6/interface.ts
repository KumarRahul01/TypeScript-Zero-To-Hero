console.log("Hello from interfaces");

//! Interface => In TypeScript, an interface is a way to define a contract or a structure for an object, class, or function. Udes To enforce a consistent structure in your code

interface Person {
  name: string;
  age: number;
  greet(): void;
}

//* Interface for object

const user: Person = {
  name: "Rahul",
  age: 22,
  greet() {
    console.log("Hello");
  },
};

console.log(user);

interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log("Bark");
  }
}

const dog1 = new Dog("Kalu");
dog1.makeSound();

//! Extending Interface

interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(): void;
}

class Demo implements Greetable {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  greet(): void {
    console.log("Hello Demo");
  }
}

const d1 = new Demo("Demo1");
d1.greet();
console.log(d1.name);

//! Optional

interface Animal {
  move: string;
  // name?: string;
}
