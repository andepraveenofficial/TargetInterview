
# More Interview Questions

<br>

### 1. What is a Web?

The World Wide Web is commonly known as the Web.

It is an interconnected system of public web pages accessible through the Internet.

It allows documents to be connected to other documents through hypertext links like a spider web.

<br>

### 2. What is Client-Side Rendering and Server-Side Rendering?

**Client-Side Rendering:**

Client-Side Rendering means rendering pages directly in the browser using JavaScript.

All logic, data fetching, and routing are handled on the client rather than the server.

When the browser requests the server, the response would be a bare-bones HTML document with a JavaScript file that will render the rest of the site using the browser.

**Server-Side Rendering:**

Server-Side Rendering means rendering pages on the server.

All logic, data fetching, and routing are handled on the server rather than the client.

When the browser requests the server, the response would be fully rendered HTML.

<br>

### 3. What is CORS?

CORS stands for Cross-Origin Resource Sharing.

It allows a website to make requests to another website in the browser.

There are two types of CORS requests.

**Simple Requests:**

When the browser is requesting another domain/website, the browser adds an `Origin` header with the current origin (scheme, host, and port).

When a server sees this header and wants to allow access, it needs to add an `Access-Control-Allow-Origin` header with the value as `*` or the same origin to the response.

When the browser sees this response with an appropriate `Access-Control-Allow-Origin` header, the browser allows the response data to be shared with the client site.

**Preflight Requests:**

When the browser is making a complex HTTP request, the browser adds a preflight request.

Complex Requests include:

- Requests that use methods other than `GET`, `POST`, or `HEAD`
- Requests that include headers other than `Accept`, `Accept-Language`, or `Content-Language`
- Requests that have a `Content-Type` header other than `application/x-www-form-urlencoded`, `multipart/form-data`, or `text/plain`

Browsers create automatically a preflight request if it is needed. It is an OPTIONS request like below and is sent before the actual request.

```shell
OPTIONS /data HTTP/1.1
Origin: https://example.com
Access-Control-Request-Method: DELETE
```

The server analyzes the preflight request to check if this origin has access to do such a method. If yes, the server returns all methods the origin is permitted to use and indicates that you can send the original request. If not, the original request is ignored.

```shell
HTTP/1.1 200 OK
Access-Control-Allow-Origin: https://example.com
Access-Control-Allow-Methods: GET, DELETE, HEAD, OPTIONS
```

<br>

### 4. What is the use of crossorigin="anonymous"?

The `crossorigin` attribute sets the mode of the request to an HTTP CORS Request.

With the HTML `cross-origin` attribute with the value `anonymous`, a CORS request will be sent without passing the credentials information.

<br>

### 5. How do you inform the user if an error occurs in the code?

If an error occurs in the code, we can inform the user in different ways.

Some of them are:

**alert**

```js
const url = "https://a.ccbp.in/jokes/random";

const doNetworkCall = async () => {
  try {
    const response = await fetch(url);
    const jsonData = await response.json();
  } catch (error) {
    alert(error.message);
  }
}
```

**DOM Manipulations**

```js
const errorMsgEl = document.getElementById("error");

const url = "https://a.ccbp.in/jokes/random";

const doNetworkCall = async () => {
  try {
    const response = await fetch(url);
    const jsonData = await response.json();
  } catch (error) {
    errorMsgEl.textContent = error.message;
  }
}
```

<br>

### 6. How to check whether the website is working properly?

Some of the things to ensure whether the website is working properly or not are:

**UI:**

Check the UI is as expected and is responsive on different devices.

If we need to display the UI after API calls,

Check whether the API response is expected or not. 

We can check it by Inspecting and clicking the Network tab. Check the HTTP status and fix the errors. Errors might be due to a mistake in the URL, network connection, etc.

We can check if there are any errors in the JS code by the console tab and fix the errors like reference errors, etc.

**Functionality:**

Interact with the website and check whether the functionality is as expected by inspecting and checking the errors, API responses, etc.

**Performance:**

We can check the performance of the website through

- https://www.webpagetest.org/

<br>

### 7. How to check whether the website is working properly in all browsers?

We can check whether the website is working properly in all browsers using different services.

- [browserling](https://www.browserling.com/)
- [saucelabs](https://saucelabs.com/)
- [browserstack](https://www.browserstack.com/)
- [endtest](https://endtest.io/)
- [lambdatest](https://www.lambdatest.com/)

<br>

### 8. What are the different Frameworks?

Some of the frameworks are:

- Bootstrap
- Angular
- Flutter, etc.

<br>

### 9. How to write a dummy API call?

We can create a fake API call using fake API services like JSONPlaceholder, reqres, postman, etc.

For more details, please refer to the below links:

- https://jsonplaceholder.typicode.com/
- https://mocki.io/docs
- https://reqres.in/
- https://learning.postman.com/docs/getting-started/introduction/

<br>

### 10. What is Web Hosting and How can you host a website?

Web Hosting is an online service that enables you to publish a website on the Internet.

Web Host allocates some space for your website on their server. It stores all the files and data necessary for your website to work properly.

When the user accesses your website, the web host transfers all the files necessary for the website.

We can host a website using different web hosting providers like [Nexcess](https://shop.nexcess.net/wordpress-plans/?irgwc=1&clickid=Wu81fRU0xxyIUO0S4QUH-Wf%3AUkGRxX0ZqVqI1M0&iradid=583817&irpid=1380263&sharedid=&_ir=1&utm_medium=affiliate), [Godaddy](https://in.godaddy.com/), etc.


