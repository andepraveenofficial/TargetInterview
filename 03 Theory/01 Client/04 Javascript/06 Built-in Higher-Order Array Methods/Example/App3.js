// reduce

/*
reduce function basically used to form a single value in the array.

*/

let arr = [5, 1, 3, 2, 6];
console.log(arr);

console.log("--------------");

// sum or max

// normal function
function findSum(arr){
    let sum = 0;
    for (let i=0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}

let output = findSum(arr)
console.log(output);


const output1 = arr.reduce(function (acc, curr){
    acc = acc + curr;
    return acc;
}, 0)
console.log(output1);


function findMax(arr){
    let max = 0;
    for (let i = 0; i<arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

let outputMax = findMax(arr);
console.log(outputMax);

const outputMax1 = arr.reduce((max, curr) => {
    if (curr > max){
        max = curr;
    }
    return max;
}, 0)

console.log(outputMax1);