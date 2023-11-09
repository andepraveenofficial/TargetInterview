var myName = 'I am Global Object';

var myObject = {
	myName: 'I am Local Object',

	ObjectKey: this,

	myDeclaration: function () {
		console.log(this.myName);
		console.log(this);
	},

	myArrow: () => {
		console.log(this.myName);
		console.log(this);
	},

	myInnerArrow: function () {
		let myInsideArrow = () => {
			console.log(this.myName);
			console.log(this);
		};

		myInsideArrow();
	},
};

console.log(myObject.ObjectKey);

console.log(this.myName); // Global
console.log(myObject.myName); // Local

console.log('-----> Function Declaration <----- ');
myObject.myDeclaration(); // Local

console.log('-----> Arrow Function <----- ');
myObject.myArrow(); // Global

console.log('-----> Inner Arrow Function <----- ');
myObject.myInnerArrow(); // Local
