//* Objects, Arrays, Tuples, Enum
// Object
var Role;
(function (Role) {
    Role["Intern"] = "intern";
    Role["CEO"] = "ceo";
    Role["CTO"] = "cto";
    Role["HR"] = "hr";
})(Role || (Role = {}));
var person = {
    name: "Rahul",
    age: 22,
    role: Role.CTO,
    projects: ["Eduvanza", "DSAQuest"],
};
console.log(person);
console.log(person.projects.length);
if (person.role === Role.Intern) {
    console.log("you are an intern");
}
else if (person.role === Role.CEO) {
    console.log("you are ceo");
}
else if (person.role === Role.CTO) {
    console.log("you are cto");
}
else {
    console.log("you are hr");
}
//? Array type to accept anything
var arr = ["string", "Only String"];
var arr2 = ["string", 1, false, undefined]; //! If we use any then we will lose the power of ts
//? Tuples
var tupArr = [
    10,
    "Rahul",
    true,
    undefined,
];
