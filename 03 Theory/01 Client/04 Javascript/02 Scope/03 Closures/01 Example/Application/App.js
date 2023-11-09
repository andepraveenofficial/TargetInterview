// Closure

var a = 10;

function outer() {
	var b = 10;
	let c = 20;

	function inner() {
		let d = 30;
		console.log(a);
		console.log(b);
	}
	inner();
}

outer(); // 10
