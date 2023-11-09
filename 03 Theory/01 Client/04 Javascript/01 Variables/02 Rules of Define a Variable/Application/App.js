/* -----> Variables <----- */

/*

syntax:
Declaration = Initialization;
declarationKeyword variableName = value;

*/

/* -----> var <----- */

var a = 30;
console.log(a);

a = 20;
console.log(20);

var a;
a = 10;
console.log(a);

console.log('-----------------------');

/* -----> let <----- */

let c = 60;
console.log(c);

let b;
b = 40;
console.log(b);

// let b = 50; // SyntaxError: Identifier 'b' has already been declared

console.log('------------------------');

/* -----> const <----- */

const e = 70;
console.log(e);

// e = 80; // TypeError: Assignment to constant variable

// const d; // SyntaxError: Missing initializer in const declaration

console.log('==========================');
