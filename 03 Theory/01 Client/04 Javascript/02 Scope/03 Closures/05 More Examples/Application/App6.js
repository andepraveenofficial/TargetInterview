// Closure VS Garbage collector

function a(){
    var x = 0;
    var z = 10;
    return function b(){
        console.log(x);
    }
}

// After execution of function a, x variable remove from the garbage memory.
var y = a();

y();