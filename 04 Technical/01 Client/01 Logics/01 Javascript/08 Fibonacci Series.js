// Fibonacci Series

let given_number = 10;

let fibonacci_sequence = [0, 1];

for (let i = 0; i <= given_number - 3; i++) {
	add_number = fibonacci_sequence[i] + fibonacci_sequence[i + 1];
	fibonacci_sequence.push(add_number);
}

console.log(fibonacci_sequence);
