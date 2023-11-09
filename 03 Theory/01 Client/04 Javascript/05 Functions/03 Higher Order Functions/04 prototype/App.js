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

// Now this calculate available all of the arrays.
Array.prototype.calculate = function(logic){
    const output = [];
    for (let i=0; i < this.length; i++){
        output.push(logic(this[i]));
    }
    return output;
};

// In-Built Higher order function
console.log(radius.map(area));


// Custom higher order function created
console.log(radius.calculate(area));
