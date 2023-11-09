
// Javascript doesn't wait for anyone

function x(){
    var i = 1;
    setTimeout(function(){
        console.log(i);
    }, 1000);

    console.log("Hello world");
}

x();

