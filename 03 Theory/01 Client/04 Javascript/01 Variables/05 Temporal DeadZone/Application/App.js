
console.log(b);  // undefined
// console.log(a);  // ReferenceError: Cannot access 'a' before initialization // because it is in temporal dead zone.
// console.log(c);  // ReferenceError: c is not defined

let a = 10;  // It is attached to the Script Object
var b = 100;  // It is attached to the Global Object

console.log(a);  // 10
console.log(b);  // 100

// Redeclaration is not possible
// let a = 20; // SyntaxError: Identifier 'a' has already been declared


let d;
d = 20;
console.log(d);  // 20

const c = 1000;
console.log(c);  // 1000

// we can do declaration and assignment at a time.
// const e;  // SyntaxError: Missing initializer in const declaration
// e = 30;


const f = 30;
// f = 40;  // TypeError: Assignment to constant variable