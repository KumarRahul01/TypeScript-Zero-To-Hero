// console.log("Hello from classes");

class Department {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  displayName() {
    return this.name + " Department";
  }
}

const dep1 = new Department("Account");
console.log(dep1.displayName());
