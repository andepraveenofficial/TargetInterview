const url = 'https://jsonplaceholder.typicode.com/users';
const options = {
	method: 'GET',
};

const getData = async () => {
	const response = await fetch(url, options);
	const data = await response.json();
	console.log(data);
};

getData();
