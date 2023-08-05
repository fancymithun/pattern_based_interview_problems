1. ### What is Javascript?

Everything in javascript happens inside execution context

Memory is also called as Variable Environment
and Code execution is also called as Thread of Execution

Javascript is synchronous single threaded language. - It can execute one command at a time in code execution phase(single thread in order)


2. ### How Javascript code is executed..?

Execution Context
-----------------


```js

var n = 2;
function square(num){
    var ans = num * num
    return ans
}

var square2 = square(n)
var square4 = square(4)

```
                            Thread of Execution

Memory                      Code
------                     ------

key: value                  Memory           Code      
n: undefined                num: 2          return ans
square: {...}               ans: 4
square2: undefined          
square4: undefined          Memory           Code
                            num: 4
                            ans: 16          return ans

phase 1 is memory creation phase
phase 2 is code execution phase

call stack :    GEC EC1 EC2 is for managing execution context.

call stack maintains the order of execution of execution contexts.

3. ### Hoisting in javascript

Hoisting is a JavaScript behaviour where anywhere the variable/functions are declared they are moved to the top of the scope. Note the scope may be local or global.

but this wont work with let and const keywords there is another concept called temporal dead zone comes where we need to initialize before declaring or calling.

```js

console.log(a)
hello()
const a =10
function hello(){
    console.log("hello")
}

```

4. ### Explain Implicit Type Coercion in JavaScript.

Automatic value conversion from one data type to another data type is known as Implicit type coercion in JavaScript. 

There are many types Number to String, String to Number, Boolean to Number etc

1. **String Coercion**: The time when the number is added to a string, it converts the number type as a string type with the help of the “+” operator. 

```js
var a = 4
var b = "5"

var result = a + b // Implicit type coercion from number to string

console.log(result) // "45"

```

```js

var p = 45
var q = "Hi"

var result = p + q // Implicit coercion from number to string

console.log(result) // "45Hi"

```

2. **Number Coercion**: We can use the “ – “ operator as well, but the number which we give will be converted to string datatype and subtracted 

```js

var p = 5
var q = "5"

var result = p - q // Implicit coercion from string to number

console.log(result) // 0

```

3. **Boolean Coercion**: When we use logical operators, if statements, ternary operators and loop checks Boolean coercion takes place. We have to ensure properly the truthy and falsy values. 

```js
var a = 0
var b = 24

if(a) {console.log(a)}  // a in number type will be converted to boolean falsy by using if condition this won't execute

if(b) {console.log(b)} // b is number type will be converted to boolean truthy by using if condition and this will execute 24

```

4. **Equality coercion**:  The operator we use for Equality coercion is “ ==”. It compares only values not datatypes. 
 If there exist two different datatypes then it converts both of them to one type and  
 compares the value. 

 ```js
 var a = 12
 var b = "12"

 a == b // operands are equal and both the values will be converted to one type and then considered to be equal or not ( == )
 
 ```

5. **Logical Operators**: Comparing the logical operators in the other programming languages, in JavaScript, the Logical operators does not return true or false, one of the operands is returned. 

OR ( | | ) operator – The first value is returned only when it is truthy else the second value gets returned. 

AND ( && ) operator – When both the values are truthy it returns always the second value. If the first value false it returns the first value. If the second value false it will return the second value

5. ###  Is JavaScript a statically typed or a dynamically typed language?

JavaScript is categorized as a dynamically typed language. Because the variable type is checked during runtime parallelly with statically typed language, where the types of a variable are checked during the compilation phase. 

JavaScript is categorized as a dynamically typed language. Because the variable type is checked during runtime parallelly with statically typed language, where the types of a variable are checked during the compilation phase. 

Static Typing	                        Dynamic Typing
string namename = “Peter”;name = 34;	var namename = “Peter”;name = 35;
Variables have types	                Variables have no types
Values have types	                    Values have no types
Variables cannot change types	        Variables can change types

6. ### Explain passed by value and passed by reference.

In JavaScript, when you pass a variable to a function as an argument, the way it behaves inside the function depends on whether the variable is of a primitive type or an object (including arrays and functions). This distinction leads to two different mechanisms known as "passed by value" and "passed by reference."

1. **Passed by Value (Primitive Types)**:
   When you pass a variable of a primitive type (e.g., number, string, boolean) as an argument to a function, a copy of the actual value is created, and this copy is what the function receives. Any modifications made to the parameter variable inside the function do not affect the original variable outside the function.

   Example:

   ```js

   const a = 4

   function passByValue(number){
        number = 7
        console.log(number)
   }

   const result = passByValue(a)
   console.log(a)  // Here a value not changed even if we pass a as argument to passByValue function and update the same but this will be different in case of pass by reference like array,function,object (not primitive data types)
   
   ```

   In this example, the `num` variable is passed to the `modifyValue` function. Inside the function, a new copy of the value `5` is created and assigned to the function parameter `x`. Any changes to `x` within the function do not affect the original `num` variable.

2. **Passed by Reference (Objects)**:
   When you pass a variable that is an object (including arrays and functions) as an argument to a function, the function receives a reference to the same object in memory. This means that any modifications made to the object's properties or elements inside the function will affect the original object outside the function, as both the function parameter and the original variable point to the same object in memory.

   Example:

   ```js

   let array = [1,2,3]

   function passByReference(arrayAsReference){
        arrayAsReference.push(4)
   }

   let result = passByReference(array)
   console.log(array) // Pass by referebce will be update original array such as array in this example
   
   ```


In this example, the `numbers` array is passed to the `modifyArray` function. Inside the function, the parameter `arr` holds a reference to the same array object as `numbers`. As a result, any changes made to the `arr` parameter inside the function directly affect the original `numbers` array.

It's important to be aware of the distinction between "passed by value" and "passed by reference" behavior in JavaScript, as it can have implications for how variables are manipulated and modified inside functions. Understanding this concept is especially important when working with mutable data structures like objects and arrays.

7. ### What is an Immediately Invoked Function in JavaScript?

The function which runs as soon as its defined is known as the Immediately Invoked Function in JavaScript.

```js

function ()
{ 

  // Do something;

} ();

```

8. ### Explain Higher-Order Functions in JavaScript

Where starting a function with the bracket is necessary else it will be considered as the normal function. The second set of parentheses is used to invoke the function because functions do not work without invoking. 

Just like data types such as Number, Boolean, String is considered to be the data then functions can also work as data. 

Functions can be passed through other functions
Functions can be set as object properties
Functions can be stored in arrays 
Functions can be set as variables 

```js

function higher-order(fn) 
{
  fn();
}

higherOrder(function() { console.log(“Hi”) });

```

9. ### Explain call(), apply() and, bind() methods.

call()

It is a library method available in the JavaScript.
This method invokes functions/methods by mentioning the owner object.

```js

const person = {
    name: 'John',
    greet: function (greeting) {
        console.log(`${greeting}, ${this.name}`)
    }
}

const anotherPerson = {
    name: "Alice"
}

person.greet.call(anotherPerson,"Hello") // Hello Alice

```

apply()

The apply() method is similar to call(), but instead of passing individual arguments, it takes an array or an array-like object as its second argument. The first argument is the value of this, just like in call().

```js

const person = {
    name: 'John',
    greet: function (greeting, timeOfDay){
        console.log(`${greeting}, ${this.name}. Good ${timeOfDay}`)
    }
}

const anotherPerson = {
    name: "Alice"
}

person.greet.apply(anotherPerson,["Hello","Afternoon"]) // Output: Hello, Alice. Good morning

```

bind()

The bind() method returns a new function with the specified value of this, allowing you to "bind" the value of this permanently to a function. Unlike call() and apply(), bind() does not immediately invoke the function. Instead, it creates a new function that can be called later.

```js
const person = {
  name: 'John',
  greet: function () {
    console.log(`Hello, ${this.name}`);
  },
};

const anotherPerson = {
  name: 'Alice',
};

const greetFunction = person.greet.bind(anotherPerson);
greetFunction(); // Output: Hello, Alice

```

10. ### What is Currying in JavaScript?

Currying is a functional programming concept in JavaScript where a function is transformed into a series of functions, each taking a single argument. The curried function returns a new function for each argument until all the arguments are supplied, and then the final result is returned.

```js

// Regular function without currying
function add(a, b, c) {
  return a + b + c;
}

console.log(add(2, 3, 4)); // Output: 9

// Curried function
function curriedAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(curriedAdd(2)(3)(4)); // Output: 9

```

When calling curriedAdd(2)(3)(4), it first passes 2 as a, returning a new function that expects b. Then, it passes 3 as b, returning a third function that expects c. Finally, it passes 4 as c, and the sum 2 + 3 + 4 is computed, resulting in 9.

11. ### Explain Scope and Scope Chain in JavaScript.

In JavaScript, scope refers to the accessibility and visibility of variables, functions, and objects in different parts of the code during runtime. The scope determines where a variable or function is accessible and can be referenced. Understanding scope is crucial for managing variable lifetimes and avoiding conflicts between variables with the same name.

JavaScript has two main types of scope:

1. **Global Scope**:
   Variables declared outside any function or block have global scope. These variables are accessible from anywhere in the code, including inside functions or blocks. Global scope variables are attached to the global object (`window` in browsers and `global` in Node.js).

   Example:

   ```javascript
   // Global scope variable
   var globalVar = 'I am global';

   function exampleFunction() {
     console.log(globalVar); // Output: I am global
   }

   exampleFunction();
   ```

2. **Local Scope**:
   Variables declared inside a function or block have local scope. These variables are accessible only within the function or block where they are declared. Local scope variables take precedence over global scope variables with the same name.

   Example:

   ```javascript
   function exampleFunction() {
     // Local scope variable
     var localVar = 'I am local';
     console.log(localVar); // Output: I am local
   }

   exampleFunction();
   // console.log(localVar); // Error: localVar is not defined (outside the function)
   ```

   In this example, `localVar` is accessible only within the `exampleFunction`.

**Scope Chain**:
The scope chain is a mechanism in JavaScript that determines how variables are accessed and resolved when they are referenced. When a variable is accessed, the JavaScript engine searches for the variable in the current scope. If it doesn't find the variable, it looks up the scope chain to find the variable in the next outer scope, continuing until it reaches the global scope.

Example:

```javascript
var globalVar = "global variable"

function outerFunction(){

    var outerVar = "Outer variable"

    function innerFunction(){
        var innerVar = "Inner variable"
        console.log(innerVar) // accessed from inner score function scope
        console.log(outerVar) // accessed from outer scope outer function
        console.log(globalVar) // accessed from global scope 
    }()
}

outerFunction()

```

In this example, `innerFunction` has access to variables from the outer scopes (global scope and `outerFunction` scope). When `console.log(globalVar)` is executed, the engine first looks for `globalVar` in the local scope of `innerFunction`, then in the scope of `outerFunction`, and finally finds it in the global scope.

Understanding scope and the scope chain is essential for writing clean and maintainable JavaScript code, avoiding variable name collisions, and managing variable lifetimes effectively. It allows developers to control the visibility and accessibility of variables throughout their programs.

12. ### What are built-in methods in JavaScript

Number Methods
constructor() returns the function that’s created by default
toExponential() Numbers will be displayed in exponential notation 
toFixed() used to fix how many numbers should be present to the right of the decimal point.
toLocaleString() used to return the correct value of the number according to the settings of the system
toString() Returns the string representation

Boolean Methods:
toString() returns true or false according to the condition 

String Methods:
toUpperCase() converts string to upper case 
toLowerCase() converts string to lower case
split() Separates strings into two.
slice() a new string is returned after cutting out certain elements of a string
length() Returns string length
concat()Combines  two different strings together
charAt() : returns the character at the specific index
ndexOf()Returns the index of the string if not found will return -1

13. ### What is a Temporal Dead Zone?

The Temporal Dead Zone (TDZ) is a behavior in JavaScript that occurs when variables declared with `let` and `const` are not accessible (i.e., not in scope) before their declaration within the current block. The TDZ exists from the start of the block until the point of declaration, and during this period, any attempt to access the variable results in a `ReferenceError`.

Let's illustrate the Temporal Dead Zone with an example:

```javascript
console.log(myVar); // Output: ReferenceError: Cannot access 'myVar' before initialization
let myVar = 10;
```

In this example, we attempted to access the variable `myVar` before its declaration, resulting in a `ReferenceError` due to the Temporal Dead Zone. The TDZ for `myVar` exists from the start of the block (the beginning of the scope) until the line where it is declared with `let`.

The Temporal Dead Zone behavior is a result of how variables declared with `let` and `const` are hoisted to the top of their scope during the "creation phase" of the code execution. However, unlike variables declared with `var`, they are not initialized at that point. They remain in an uninitialized state within the TDZ until the line of declaration is reached during the "execution phase."

Example of TDZ:

```javascript
function example() {
  console.log(myVar); // Output: ReferenceError: Cannot access 'myVar' before initialization
  let myVar = 10;
}

example();
```

In this example, the TDZ exists within the function `example` from the start of the function until the line of declaration for `myVar`.

It's essential to be aware of the Temporal Dead Zone in JavaScript, as accessing variables within the TDZ can lead to unexpected runtime errors. To avoid these errors, it is a good practice to declare variables with `let` and `const` as close to their usage as possible, at the beginning of their respective blocks.
anotherRandomFunc();

14. ### What is Object Destructuring?

Object destructuring is a feature in JavaScript that allows you to extract properties from objects and assign them to variables in a more concise and convenient way. It provides a simple syntax to "destructure" the properties of an object into individual variables, making it easier to work with objects and access their properties.

The syntax for object destructuring uses curly braces `{}` on the left-hand side of an assignment, with variable names that match the property names in the object.

Here's how object destructuring works:

```javascript
// Example object
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};

// Object destructuring
const { firstName, lastName, age } = person;

console.log(firstName); // Output: John
console.log(lastName);  // Output: Doe
console.log(age);       // Output: 30
```

In this example, we have an object `person` with properties `firstName`, `lastName`, and `age`. Using object destructuring, we extract the values of these properties into individual variables with the same names (`firstName`, `lastName`, and `age`).

Object destructuring also allows you to specify default values for variables in case the corresponding property is undefined in the object:

```javascript
const person = {
  firstName: 'John',
};

const { firstName, lastName = 'Doe' } = person;

console.log(firstName); // Output: John
console.log(lastName);  // Output: Doe (default value)
```

If the `lastName` property is not present in the `person` object, the variable `lastName` will take the default value `'Doe'`.

Object destructuring is especially useful when working with functions that accept objects as parameters. It enables you to easily extract specific properties from the object inside the function without having to reference the object's properties directly.

Example with function:

```javascript
function greetPerson({ firstName, lastName }) {
  console.log(`Hello, ${firstName} ${lastName}`);
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
};

greetPerson(person); // Output: Hello, John Doe
```

In this example, the `greetPerson` function uses object destructuring in its parameter to directly extract the `firstName` and `lastName` properties from the `person` object passed as an argument.

Overall, object destructuring is a powerful feature in JavaScript that simplifies working with objects and enhances code readability by extracting properties from objects into individual variables with a concise syntax.

15. ### Explain WeakMap in JavaScript.

A WeakMap is a built-in object in JavaScript that provides a collection for storing key-value pairs, where the keys must be objects and the values can be any data type. It is similar to a regular Map, but with some important differences, especially in how it handles object references and memory management.

```js

let person1 = { name: 'Alice' };
let person2 = { name: 'Bob' };

const weakMap = new WeakMap();
weakMap.set(person1, 'Personal info for Alice');
weakMap.set(person2, 'Personal info for Bob');

console.log(weakMap.get(person1)); // Output: Personal info for Alice

person1 = null; // The reference to person1 is removed

// At this point, 'Personal info for Alice' will be eligible for garbage collection
// and will be automatically removed from the WeakMap

```

The regular box is like a Map in JavaScript. It can store any kind of data (toys), and the data stays there forever, no matter if you use it or not.

The magical box is like a WeakMap in JavaScript. It can only store objects as keys, and if there are no other references to those objects (if nobody is playing with the toy anymore), the WeakMap will make the data disappear to save memory.

16. ###  Explain WeakSet in JavaScript.
```js
const newSet = new Set([4, 5, 6, 7]);

console.log(newSet);// Outputs Set {4,5,6,7}

const newSet2 = new WeakSet([3, 4, 5]); //Throws an error

let obj1 = {message:”Hello world”};

const newSet3 = new WeakSet([obj1]);

console.log(newSet3.has(obj1)); // true

```
The error you encountered is because WeakSet can only store objects as its elements, not primitive values like numbers or strings. When you try to create a WeakSet with primitive values like [3, 4, 5], it will throw a TypeError.

To create a WeakSet with primitive values, you need to wrap them inside objects. Here's one way to do it:

```js
const newSet2 = new WeakSet([{ value: 3 }, { value: 4 }, { value: 5 }]);

```

17. ###  What are generator functions?

Generator functions are a special type of function in JavaScript that allows you to generate a sequence of values using a special syntax. Unlike regular functions, generator functions can be paused and resumed during their execution. When paused, they can yield a value to the caller and later be resumed from where they left off. This unique behavior makes generator functions very powerful for working with sequences, asynchronous operations, and handling large sets of data.

The syntax for defining a generator function uses an asterisk (*) after the function keyword:

```js
function* myGeneratorFunction() {
  // Generator function body
  yield 1;
  yield 2;
  yield 3;
}

```

```js
function* generateEvenNumbers() {
  let num = 0;
  while (true) {
    yield num;
    num += 2;
  }
}

const evenNumbersGenerator = generateEvenNumbers();

console.log(evenNumbersGenerator.next().value); // Output: 0
console.log(evenNumbersGenerator.next().value); // Output: 2
console.log(evenNumbersGenerator.next().value); // Output: 4
// and so on...

```

18. ### What are classes in JavaScript?


In JavaScript, classes are a way to define blueprints for creating objects with shared properties and methods. They provide a convenient and more structured syntax for creating objects that share similar characteristics. Classes in JavaScript are introduced in ECMAScript 6 (ES6) and offer a more familiar object-oriented programming style for developers coming from other programming languages like Java or Python.

The syntax for defining a class in JavaScript is as follows:

```js
class MyClass {
  constructor(prop1, prop2) {
    this.prop1 = prop1;
    this.prop2 = prop2;
  }

  method1() {
    // Method definition
  }

  method2() {
    // Method definition
  }
}

```

19. ### What is the use of promises in JavaScript?

