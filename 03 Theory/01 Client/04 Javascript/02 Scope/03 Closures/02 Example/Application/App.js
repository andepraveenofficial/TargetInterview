// Closures

function x(){
    let a  =10;
    function y(){
        let b = 20;
        function z(){
            let c = 30;
            console.log(c);
            console.log(b);
            console.log(a);
        }
        z();
    }
    y();
}

x();
