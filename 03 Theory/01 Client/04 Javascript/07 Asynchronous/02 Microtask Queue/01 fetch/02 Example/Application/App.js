
// Promise

/*
fetch is Browser API, it is used to make the call the external calls.
*/

const GITHUB_API = "https://api.github.com/users/akshaymarch7";

// fetch always returns a Promise
const user = fetch(GITHUB_API);
console.log(user);

/*
Promise states are 3:

1) pending
2) fulfilled
3) rejected
*/

// callback attach
user.then(function(data){
    console.log(data);
})