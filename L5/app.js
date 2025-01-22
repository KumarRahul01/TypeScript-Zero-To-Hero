//! Unknown, Any, Never
var userName = "Rahul";
var userAddress;
// let userAddress: any;
userAddress = "H-30B, Block-c";
var stringVar;
// stringVar = userAddress; // gives error when userAddress type is unknown but runs when type is any
console.log(typeof userAddress);
//! Never
function showError(message, code) {
    throw Error("Runtime error: ".concat(message, ", status-code ").concat(code));
}
showError("Copilation server error", 501);
