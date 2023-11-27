# Programming Language


### Compiler VS Interpreter

##### Compiler
* Compiler scans the entire program and translates the whole of it into machine code at once.
* A Compiler takes a lot of time to analyze the source code. However, the overall time taken to execute the process is much faster.
* A Compiler always generates an intermediary object code.
* Compiler generates the error message only after it scans the complete program.
* Compilers are used by programming languages like C and C++.

##### Interpreter
* Interpreter translates just one statement of the program at a time into machine code.
* An Interpreter takes very less time to analyze the source code. However, the overall time to execute the process is much slower.
* An Interpreter does not generates an intermediary object code.
* Keeps translating the program continuously till the first error in confronted. If any error is spotted, it stops working and hence debugging becomes easy.
* Interpreters are used by programming languages like Python and Ruby.

##### Dynamically Typed
* __Python__ is a dynamically typed language, which means there is no need to declare the type of a variable when you create it. Python itself checks and identifies the type of a variable based on the value it is assigned.

* While programming languages like C, C++, Java, , ...etc are statically typed languages which means we must declare the type of the variable.we cannot change the data type of a variable during the execution of the program.

### Variable
Variables are like containers. we can use these containers to store data during program execution. we can mention a name for identify a particular container. So those named Containers are called variables. we can manipulate the data in the containers by reffering that variable name.

we can store different types of data in the containers.

##### Types of Variables
The scope of a variable is the region in which that variable can be accessed.
1. Local Variable
2. Global Variable

##### Local Variable 
If a variable is declared inside of a function then that type of variable is called Local Variable. 

we can access these Local Variables only within that particular block of code.

If the value of the local variable is modified in one function, then that changes are not reflected in another function.

we can convert a local variable to a global variable by using `global` keyword before the variable.

```Python 
def my_function():
    global my_variable
    my_variable = 10

# Call the function to set the value of my_variable
my_function()

# Now, you can print my_variable
print(my_variable)  # 10

```

##### Global Variables
If a variable is declared outside a function then that variable is called Global variable.

These Global Variables can be accessed at any part of the code including Functions also.

If the value of the global variable is modified inside a functionthen that changes are reflected in the rest of the program.

```Python 

global_variable = 10
print(global_variable)  # 10

```

### Function
A function is a block of reusable code to perform a specific action. Functions help us in using existing code without writing it every time we need it. A Function is executed when calls it. 
We can use the same code many times with different arguments, to produce different results .

### Data Structures
Data Structures allow us to store and organize data efficiently.
This will allow us to easily access and perform operations on the data.

### Control Statements
1. Conditional Statements
2. Looping Statements

##### Condiotional Statement
The Conditional Statement allows you to execute a block of code based on a condition.

### Looping Statements
Loops allow us to execute a block of code several times. 


##### while Loop
While loop allows us to execute a block of code several times as long as the condition is `True`.

##### for Loop
The `for` statement iterates over each item of a sequence, then execute a block of code.

### OOPS
`OOPs : Object-Oriented Program`  
__Object-Oriented Programming__ is a way of approaching, designing and developing software.
Proper usage of __OOPs__ concepts helps us build well-organized systems that are easy to use and extend.

##### The advantages of OOPs
* Easier way to analyse
* Reusability of code through __inheritance__
* Effective problem solving

##### principles of OOPs
The principles of OOPs involve,
* Inheritance
* Encapsulation
* Abstraction
* Polymorphism

##### Inheritance
A Child Class inherits attributes and methods from Parent Class is called Inheritance.

##### Encapsulation
The bundling of related attributes and methods together is called Encapsulation.

Classes can be used to bundle related attributes and methods.

##### Abstraction 
In python, Abstraction is defined as a process of handling complexity by hiding unnecessary information from the user.  

For example :  When we use the TV remote to increase the volume. We don't know how pressing a key increases the volume of the TV.

##### Polymorphism
Polymorphism contains two words "poly" and "morphs". Poly means many, and morph means shape. By polymorphism, we understand that one task can be performed in different ways.
The word polymorphism means having many forms. 


