// Armstrong Number

let given_number = '153';
console.log(given_number);

console.log('-------------------');

let power = given_number.length;

let is_armstrong = false;

result = 0;
for (each_number of given_number) {
	add_value = parseInt(each_number) ** power;
	result += add_value;
}

if (result == parseInt(given_number)) {
	is_armstrong = true;
}

console.log(is_armstrong);

console.log('=======================');
