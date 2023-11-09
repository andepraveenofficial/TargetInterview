/* -----> Global Variable <----- */
let g = 'I am Global Variable';
console.log(g);

{
	console.log(g);
}

console.log('---------------------');

/* -----> Local Variable <----- */

{
	let l = 'I am Local Variable';
	console.log(l);
}

console.log(l); // Uncaught ReferenceError: l is not defined

/* -----> var Keyword <----- */

{
	var v = 'I am var keyword';
}

console.log(v); // var keyword does't support the block scope
