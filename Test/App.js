function displayName() {
	let name = 'Function Name';
	console.log(this.name, this);
}

const myObject = {
	name: 'Ande Praveen',
	displayName: displayName,
};

var name = 'Brendan Eich';

myObject.displayName(); // Ande Praveen
window.displayName(); // Brendan Eich
