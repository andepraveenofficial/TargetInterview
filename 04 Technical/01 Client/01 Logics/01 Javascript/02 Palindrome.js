// Find Palindrome or Not

let given_word = 'ANA';
console.log(given_word);
console.log('-------------');

let reversed_word = given_word.split('').reverse().join('');

let is_palindrome = given_word === reversed_word;

console.log(is_palindrome);

console.log('================');
