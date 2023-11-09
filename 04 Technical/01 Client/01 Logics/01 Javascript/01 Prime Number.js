// Find Prime Numbers

given_number = 10;
console.log(given_number);

console.log('--------------------');

let prime_numbers_array = [];
for (i = 1; i <= given_number; i++) {
	let factors_count = 0;
	for (j = 1; j <= i; j++) {
		if (i % j == 0) {
			factors_count += 1;
		}
	}
	if (factors_count == 2) {
		prime_numbers_array.push(i);
	}
}

console.log(prime_numbers_array);

console.log('=======================');
