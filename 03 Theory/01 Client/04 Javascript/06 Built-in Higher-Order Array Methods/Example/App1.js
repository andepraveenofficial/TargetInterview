// map

/*
map function basically used to transform an array.
change the original values of the array but give an another array..
*/

let arr = [5, 1, 3, 2, 6];
console.log(arr);

console.log("--------------");

// double => [10, 2, 6, 4, 12]
// Triple => [15, 3, 9, 6, 18]
// Binary => ["101", "1", "11", "10", "110"]

function double(x){
    return x*2;
}

function triple(x){
    return x*3;
}

function binary(x){
    return x.toString(2);
}

const output1 = arr.map(double);
console.log(output1);

const output2 = arr.map(function double(x){
    return x*2;
});
console.log(output2);

const output3 = arr.map((x) => x*2);
console.log(output3);

console.log("-----------");

console.log(arr);