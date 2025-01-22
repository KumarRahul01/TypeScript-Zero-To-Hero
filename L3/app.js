//! Union => Union is used when we have to accept more than one type of data type for a variable and function
function combine(arg1, arg2) {
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        console.log(arg1 + arg2);
    }
    else {
        console.log(arg1.toString() + arg2.toString());
    }
}
combine(10, 20);
combine("Rahul ", "Patel");
//! Literal Types => Used to define custom types to any variable or functions.
function updatedCombine(arg1, arg2, customType) {
    if ((typeof arg1 === "number" && typeof arg2 === "number") ||
        customType === "asNumber") {
        console.log(+arg1 + +arg2);
    }
    else {
        console.log(arg1.toString() + arg2.toString());
    }
}
updatedCombine(10, "50", "asNumber");
updatedCombine("Rahul ", "Patel", "asString");
function updatedCombineTypeAlias(arg1, arg2, customType) {
    if ((typeof arg1 === "number" && typeof arg2 === "number") ||
        customType === "asNumber") {
        console.log(+arg1 + +arg2);
    }
    else {
        console.log(arg1.toString() + arg2.toString());
    }
}
updatedCombineTypeAlias(10, "90", "asNumber");
updatedCombineTypeAlias("Rahul ", "Patel", "asString");
var student = {
    name: "Raju",
    age: 12,
    skills: ["React", "node"],
};
function greet(user) {
    console.log("Hello ".concat(user.name));
}
greet(student);
