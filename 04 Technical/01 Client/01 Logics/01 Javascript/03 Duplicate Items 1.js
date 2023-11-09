// Remove Duplicate Items in a List

let given_list = [6, 1, 2, 3, 3, 4, 5, 5, 5];
console.log(given_list);

console.log('----------------');

let unique_items_list = [...new Set(given_list)];

console.log(unique_items_list);

console.log('====================');
