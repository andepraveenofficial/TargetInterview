// First Class Functions

// we can send functions as arguments, we can use function as a values..etc

var b = function (parameter) {
	console.log(parameter);
};

b(function () {
	console.log('Anonymous Function');
});

function a() {
	console.log('Named Function');
}

b(a);
