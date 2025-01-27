console.log("Generics");
//! 1. Generics => Generics in TypeScript are a way to define reusable and flexible components (like functions, classes, and interfaces) that can work with any data type.
// one type is connected to another type is called Generic (temp Definition)
// const fruits: string[] = ["Apple", "Banana"];
var fruits = ["Apple", "Banana"];
fruits.push("Mango");
//! Not possible
// const boy1: Person[] = {
//   name:
// }
//* Possible
var boy = [
    {
        name: "Raju",
        age: 10,
    },
];
function identity(arg) {
    return arg;
}
//? <T>: T is a placeholder for a type that will be passed when calling the function.
//? arg: T: The parameter arg is of the type T.
//? T is used to ensure that the type of the argument and the return value are the same.
console.log(identity(10)); // inferred as number
console.log(identity("Ram")); // inferred as string
//! 2. Generic Constraints:
function createObject(name, age) {
    return { name: name, age: age };
}
console.log(createObject("Chutki", 19));
var obj1 = {
    value: "Ram",
};
var obj2 = {
    value: 20,
};
console.log(obj1);
console.log(obj2);
var res = {
    data: "Success",
    status: 201,
};
console.log(res);
//! 5. Generic with classes
var Container = /** @class */ (function () {
    function Container(content) {
        this.content = content;
    }
    Container.prototype.getContent = function () {
        return this.content;
    };
    return Container;
}());
var strContainer = new Container("Hello");
var strContainer2 = new Container(100);
console.log(strContainer);
console.log(strContainer2);
//! 6. Generic with Arrays:
function getFirst(arr) {
    return arr[0];
}
console.log(getFirst([1, 2]));
console.log(getFirst(["a", "b"]));
//! 7. Generic with keyof
// function getProperty(obj: object, key: string) {
//   return obj[key];
// }
// const res1 = getProperty({}, "name"); // undefined
function getProperty(obj, key) {
    return obj[key];
}
var per = {
    name: "patel",
    age: 21,
};
var res1 = getProperty(per, "name"); // undefined
console.log(res1);
