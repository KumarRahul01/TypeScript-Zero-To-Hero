//* TypeScript Course
function add(num1, num2, text, printVal) {
    if (printVal) {
        console.log("".concat(text, " ").concat(num1 + num2));
    }
    else {
        return num1 + num2;
    }
}
var a = 10;
var b = 20;
add(a, b, "sum of two numbers is", true);
console.log(add(a, b + 30, "sum of two numbers is", false));
