
/*
Q) what is Callback Function in Javascript?
A) pass a function as a parameter is called callback function.
*/

/*
Javascript is a synchronous and single-threaded languge.
*/

// Javascript is synchronous single-threaded language that means code will execute one line at a time in orderwise.

setTimeout(function(){
    console.log("timer");
}, 3000);

function x(parameter){
    console.log("x");
    parameter();
}

x(function y(){
    console.log("y");
});



