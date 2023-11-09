// hiding the data

function counter(){
    var count = 0;  // count is a private variable in counter function

    return function incrementCounter(){
        count++;
        console.log(count);
    }
    
}

var counter1 = counter();
counter1();  // 1
counter1();  // 2

var counter2  =counter();
counter2();  // 1
counter2();  // 2