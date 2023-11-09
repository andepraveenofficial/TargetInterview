var a = 10; // Global Memory

function getName() {
	var b = 20; // Local Memory
	console.log('Hello World');
}

/* window is a default Object */

// a is stored in window object
console.log(a); // 10
console.log(window.a); // 10
console.log(this.a); // 10

console.log(a === window.a); // true

// b is not available in Global Memory. but it create a key with undefined value
console.log(window.b); // undefined

// b is available in Local Memory
console.log(b); // Reference Error : b is not defined
