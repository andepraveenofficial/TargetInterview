// Higher Order Functions

const radius = [3, 1, 2, 4];

const area = function(radius){
    return Math.PI*radius*radius;
};

const circumference = function(radius){
    return 2*Math.PI*radius;
}

const diameter = function(radius){
    return 2 * radius;
}


console.log(radius.map(area));
console.log(radius.map(circumference));
console.log(radius.map(diameter));



