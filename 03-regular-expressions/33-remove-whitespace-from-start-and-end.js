let hello = "   Hello, World!  ";
let wsRegex = /\s{2,}/g; // My solution
// let wsRegex = /^\s+|\s+$/g; // Official solution
let result = hello.replace(wsRegex, ''); // Change this line
