//* TypeScript Course

function add(num1: number, num2: number, text: string, printVal: boolean) {
  if (printVal) {
    console.log(`${text} ${num1 + num2}`);
  } else {
    return num1 + num2;
  }
}

const a = 10;
const b = 20;

add(a, b, "sum of two numbers is", true);
console.log(add(a, b + 30, "sum of two numbers is", false)); // if false then log else not
