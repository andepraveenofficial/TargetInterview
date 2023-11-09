/* -----> Global Level <----- */
var v1 = 'I am in Global Scope';

let l1 = 'I am in Global Scope';
const c1 = 'I am in Global Scope';

{
	/* -----> Block Level <----- */
	var v2 = 'I am in Block';

	let l2 = 'I am in Block';
	const c2 = 'I am in Block';
}

function myFunction() {
	/* -----> Function Level <----- */
	var v3 = 'I am in Function Scope';

	let l3 = 'I am in Function Scope';
	const c3 = 'I am in Function Scope';
}
myFunction();
