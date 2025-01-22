//! Functions in TypeScript
//? Function return type
// function which returns a number
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(10, 20));
// function which returns nothing
function greet(name) {
    console.log("Hello ".concat(name));
}
greet("Rahul");
// defining function as a function type
// let myFunction: Function;
// myFunction = 20; // invalid
// myFunction = "string"; // invalid
// myFunction = function(){} //valid
// myFunction = add; // valid
// console.log(myFunction(100, 200));
// myFunction = greet; // valid
// myFunction("Raju");
//* Good Practice:
var myFunction; // here we have defined the type myFunction as a custom function that accepts two parameters of type number and returns a number
// myFunction = greet; // not-valid
// myFunction = add;  // valid
//! Function Types & Callbacks
var myCustomFunction = function (a, b, cb) {
    var res = a + b;
    cb(res);
};
myCustomFunction(10, 200, function (num) {
    console.log(num);
});
