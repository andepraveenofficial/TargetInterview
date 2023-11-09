// Shadowing

var a = 100;
let b = 200;  // stored in Script space
const c = 300;  // stored in Script space 


{
    var a = 10;  //  stored in global space
    let b = 20;  //  stored in block space
    const c = 30;  //  stored in block space

    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a);  // 10  // Here both a's are stored in global memory  // so here a is modified
console.log(b);  // 200  // Here both b's are not stored in same memory.
console.log(c);  // 300 // Here both c's are not stored in same memory.
