// filter

/*
filter function basically used to filter the values inside a array.

*/

let arr = [5, 1, 3, 2, 6];
console.log(arr);

console.log("--------------");

function isOdd(x){
    return x%2 === 0;
}

// filter odd values
let output1 = arr.filter(isOdd);
console.log(output1);  // [ 2, 6 ]


let output2 = arr.filter(function isOdd(x){
    return x%2 === 0;
});
console.log(output2);  // [ 2, 6 ]

let output3 = arr.filter((x) => {
    return x%2 === 0;
});
console.log(output3);  // [ 2, 6 ]

console.log("------------");

console.log(arr);

