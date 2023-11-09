# Bootstrap

<details>
<summary>Introduction</summary>

### Introduction
Bootstrap is a large collection of predefined reusable Code Snippets written in HTML, CSS, and Javascript.  

##### Code Snippets 
* Buttons
* Cards
* ...etc.

It is created by Twitter. The Bootstrap is developed by Mark Otto at Twitter.
we can say Bootstrap is a css library.

##### Advantages
* __Time Saving__: We cannot build everything from scratch. We just use Bootstrap predefined reusable code snippets classNames.
* __Customizable__: Bootstrap themes and templates can be customized as per our project requirement.
* __Easy to Use__: Bootstrap is very simple to use. The setup process doesn't take too long and is relatively easy, even for beginners.

##### apply Bootstrap
To use the Code Snippets provided by Bootstrap, we need to add a piece of code within the HTML head element. We call it Bootstrap CDN.

CDN : Content Delivery Network

```HTML 
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>

<!--Bootstrap CDN-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
  </head>
  <body>
    <h1>Hello, world!</h1>

<!--Bootstrap CDN-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
  </body>
</html>
```


##### Bootstrap version
`bootstrap 5.3.0`
</details>

---

<details>
<summary>Components</summary>

### Bootstrap Components
* Buttons
* Carousel
* Navbar
* Modal

##### button
* btn-primary
* btn-outline-primary
* btn-sm
* btn-block

```HTML 
<button class="btn btn-success">Get Started</button>
<button class="btn btn-danger">Get Started</button>
```
</details>

---

<details>
<summary>Utilities</summary>

### Bootstrap Utilities

* colors
  - text-primary
* text
  - text-lowercase
* Background
  - bg-primary
  - bg-transparent
* margin & padding
  - `m-4`  
  - `p-4`
* Flex
  

##### Flex box
```HTML 
<div class="d-flex flex-row justify-content-start">
      <h1 class="flex-item">Flex Item 1</h1>
      <h1 class="flex-item">Flex Item 2</h1>
      <h1 class="flex-item">Flex Item 3</h1>
  </div>   
```

</details>

---

<details>
<summary>Layout</summary>

### Bootstrap Layout

##### Responsive
We can make a page responsive by using the Bootstrap Grid System which helps us to create columns and rows to build a responsive layout of the page.

##### Bootstrap Grid System
Bootstrap Grid System is a collection of reusable code snippets to create responsive layouts. It is made up of __containers__, __rows__, and __columns__.

It uses a 12 column layout system. We can create up to twelve columns across the page.

* Container : The purpose of a container is to hold rows and columns.

* Row : The purpose of a row is to wrap all the columns.

* Column : We should place the columns inside a row and the content inside a column.The number of columns we specify should be a number in the range of 1 to 12.


```HTML 
 <!--Bootstrap Grid System-->
    <div class="container">
      <div class="row">
          <div class="col-sm-12 col-lg-6 bg-primary">
            <p>Column</p>
          </div>
          <div class="col-sm-12 col-lg-6 bg-success">
            <p>Column</p>
          </div>
      </div>
    </div>
```

##### Bootstrap Breakpoints
* col-4
* col-sm-4
* col-md-4
* col-lg-4
* col-xl-4


##### Display Utilities
* d-none
* d-sm-none
* d-md-none
</details>

---
