// Hoisting
// Function Hoisting

console.log(getMessage1);
console.log(getMessage2);

console.log('--------------');

getMessage1();
getMessage2();

// function declaration
function getMessage1() {
	console.log('I am Function Declaration');
}

// function expression -> this is behave as a variable
var getMessage2 = function () {
	console.log('I am Function Expression');
};
