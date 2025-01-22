//! Unknown, Any, Never

let userName: string = "Rahul";
let userAddress: unknown;
// let userAddress: any;
userAddress = "H-30B, Block-c";

let stringVar: string;

// stringVar = userAddress; // gives error when userAddress type is unknown but runs when type is any

console.log(typeof userAddress);

//! Never => used where Functions that always throw an error and do not return any value.

function showError(message: string, code: number): never {
  throw new Error(`Runtime error: ${message}, status-code ${code}`);
}

showError("Copilation server error", 501);
