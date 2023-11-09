// Remove Duplicate Items in a List

let given_list = [6, 1, 2, 3, 3, 4, 5, 5, 5];
console.log(given_list);

console.log('----------------');

unique_items_list = [];
for (let item of given_list) {
	if (!unique_items_list.includes(item)) {
		unique_items_list.push(item);
	}
}

console.log(unique_items_list);

console.log('====================');
