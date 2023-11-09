// Factorial

//  Functions
function findFactorial(num) {
	if (num <= 1) {
		// Base
		return num;
	}
	result = num * findFactorial(num - 1);
	return result;
}

let given_number = 5;
console.log(given_number);

console.log('---------------');

let factorial = findFactorial(given_number);
console.log(factorial);

console.log('=====================');
