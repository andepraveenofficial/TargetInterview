// Scope
// Example

function outer(b){
    var a = 10;
    function inner(){
        console.log(a, b);
    }
    return inner;
}


// outer()();

var close = outer("Hello");
close();
