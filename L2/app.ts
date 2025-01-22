//* Objects, Arrays, Tuples, Enum

// Object

enum Role {
  Intern = "intern",
  CEO = "ceo",
  CTO = "cto",
  HR = "hr",
}

const person: {
  name: string;
  age: number;
  role: Role;
  projects: string[];
} = {
  name: "Rahul",
  age: 22,
  role: Role.CTO,
  projects: ["Eduvanza", "DSAQuest"],
};

console.log(person);
console.log(person.projects.length);

if (person.role === Role.Intern) {
  console.log("you are an intern");
} else if (person.role === Role.CEO) {
  console.log("you are ceo");
} else if (person.role === Role.CTO) {
  console.log("you are cto");
} else {
  console.log("you are hr");
}

//? Array type to accept anything

const arr: string[] = ["string", "Only String"];
const arr2: any[] = ["string", 1, false, undefined]; //! If we use any then we will lose the power of ts

//? Tuples

const tupArr: [number, string, boolean, undefined] = [
  10,
  "Rahul",
  true,
  undefined,
];
