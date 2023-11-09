// Closures
// Return

function x() {
	let a = 10;
	function y() {
		console.log(a);
	}

	// here it return with Lexical scope also
	a = 100;
	return y;
}

let z = x();
console.log(z);

// when they are return from another function this still maintain thier lexical scope.
z(); // 100
