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

Any asynchronous operations that occur in JavaScript is handled by promises

There are four stages of promises in JavaScript:

Pending – It acts to be a waiting list neither fulfilled nor rejected. It is the initial state.
Fulfilled – Any Asynchronous operation is completed to ensure that the promise has been fulfilled.
Rejected – Asynchronous reason that’s incomplete ensures that the promise has been rejected.
Settled – This is a neutral state where the promise is neither rejected nor fulfilled.

```js

function simulateAPICall(){
  return new Promise((resolve,reject) => {
    setTimeout(() => 
      const randomNumber = Math.random()
      if(randomNumber > 0.5){
        resolve(randomNumber)
      }else{
        reject(new Error('Failed to fetch data'))
      }
    ,1000)
  })
}

simulateAPICall().then((result) => {
  console.log('Rsolved:'result)
}).catch((error) => {
  console.error('Error',error.message)
})

```
Promises make it easier to reason about and handle asynchronous code, as they allow you to chain multiple asynchronous operations together and handle the results or errors in a more sequential and structured manner. They offer a cleaner alternative to nested callbacks, leading to more maintainable and readable code.

20. ### What are the rest parameter and spread operators?

1. **Rest Parameter (Rest Operator)**:
   The rest parameter is like a magic bag that you can use to collect lots of balls and put them into your toy box at once. Imagine you have many balls, and you don't know how many exactly. The magic bag (rest parameter) helps you gather all the balls and put them in your toy box (function) as a group.

   Example:
   You have 3 balls: red, blue, and green. The rest parameter helps you gather them all:

   ```javascript
   function putBallsInBox(...balls) {
     console.log(balls); // Output: ['red', 'blue', 'green']
   }

   putBallsInBox('red', 'blue', 'green');
   ```

2. **Spread Operator**:
   The spread operator is like a magical hand that helps you take out all the balls from your toy box and put them on the playground (array or object). It helps you spread the balls out individually so you can see each one separately.

   Example with arrays:
   You have two groups of balls, and the spread operator helps you combine them into one big group:

   ```javascript
   const group1 = ['red', 'blue'];
   const group2 = ['green', 'yellow'];

   const allBalls = [...group1, ...group2];
   console.log(allBalls); // Output: ['red', 'blue', 'green', 'yellow']
   ```

   Example with objects:
   You have two sets of information about yourself, and the spread operator helps you merge them into one complete set:

   ```javascript
   const personalInfo = { name: 'John', age: 10 };
   const extraInfo = { hobbies: ['soccer', 'drawing'] };

   const completeInfo = { ...personalInfo, ...extraInfo };
   console.log(completeInfo);
   // Output: { name: 'John', age: 10, hobbies: ['soccer', 'drawing'] }
   ```

So, the rest parameter helps you collect lots of balls into a group (array), and the spread operator helps you take out the balls from the group and put them separately on the playground (array or object). Both the rest parameter and the spread operator are magical tools that make working with lots of toys (data) in your toy box (function) much easier!

21. ### Differences between declaring variables using var, let and const.

```js
In JavaScript, `var`, `let`, and `const` are used to declare variables, but they have some important differences in terms of scoping, hoisting, and reassignment. Let's look at the differences between them:

1. **Scoping**:
   - `var`: Variables declared with `var` have function scope. This means that they are accessible throughout the entire function in which they are declared, even if they are declared inside loops or conditional statements.
   - `let`: Variables declared with `let` have block scope. This means that they are only accessible within the block (curly braces) in which they are declared. If declared inside a loop or conditional statement, they are limited to that block only.
   - `const`: Like `let`, variables declared with `const` also have block scope. However, `const` variables cannot be reassigned after declaration. They are read-only.

2. **Hoisting**:
   - `var`: Variables declared with `var` are hoisted to the top of their function or global scope. They are initialized with `undefined` during the hoisting phase, and their assignment is done at the point where they are declared in the code.
   - `let` and `const`: Variables declared with `let` and `const` are also hoisted, but they are not initialized during the hoisting phase. They are placed in a "Temporal Dead Zone" (TDZ) until the line where they are declared, and any attempt to access them before that line results in a `ReferenceError`.

3. **Reassignment**:
   - `var`: Variables declared with `var` can be reassigned to new values and types at any point in the code, even within the same scope.
   - `let`: Variables declared with `let` can be reassigned to new values, but they cannot be redeclared within the same scope.
   - `const`: Variables declared with `const` cannot be reassigned or redeclared. They are constant and their values cannot change once they are assigned.

Examples:

```javascript
function example() {
  console.log(x); // Output: undefined (due to hoisting)
  var x = 10;
  console.log(x); // Output: 10
}

function anotherExample() {
  console.log(y); // Output: ReferenceError: Cannot access 'y' before initialization
  let y = 20;
  console.log(y); // Output: 20
}

const z = 30;
z = 40; // TypeError: Assignment to constant variable.
```

In the first example, the `var` variable `x` is hoisted, so it is accessible before its declaration, but it is initialized with `undefined`. In the second example, the `let` variable `y` is also hoisted but remains in the TDZ until its declaration. Attempting to access it before that line results in a `ReferenceError`. In the third example, the `const` variable `z` cannot be reassigned, so trying to assign a new value to it results in a `TypeError`.

In modern JavaScript, it is recommended to use `let` and `const` over `var` to take advantage of block scoping and to avoid some common issues associated with hoisting and redeclaration. Use `const` for variables that should not be reassigned, and use `let` for variables that may change their values during the program's execution.

22. ### What are arrow functions?

Arrow functions are a concise and shorthand way to write functions in JavaScript. They were introduced in ECMAScript 6 (ES6) and provide a more compact syntax for creating functions compared to the traditional `function` syntax.

The syntax for arrow functions looks like this:

```javascript
const myArrowFunction = (parameters) => {
  // Function body
  return // return value;
};
```

Here are some key points about arrow functions:

1. **No `function` Keyword**: Arrow functions don't use the `function` keyword. Instead, they start with a set of parentheses `()` that contain the function's parameters (if any), followed by an arrow `=>`, and then the function body enclosed in curly braces `{}`.

2. **Shorter Function Syntax**: Arrow functions are often used for short, one-liner functions or for functions that have a single statement in the body. When the function body is just a single expression, you can omit the curly braces `{}` and the `return` keyword, and the value of the expression will be automatically returned.

3. **Lexical `this`**: One of the most significant differences between arrow functions and regular functions is how they handle the `this` keyword. In arrow functions, the value of `this` is lexically (statically) determined, meaning it is taken from the surrounding scope where the arrow function is defined. In contrast, regular functions have their own `this` value, which can change depending on how the function is called.

Here are some examples of arrow functions:

```javascript
// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function (with explicit return)
const multiply = (a, b) => {
  return a * b;
};

// Arrow function (shorter syntax with implicit return)
const subtract = (a, b) => a - b;

// Arrow function with no parameters
const sayHello = () => {
  console.log('Hello!');
};
```

Arrow functions are especially useful when working with higher-order functions, array methods like `map`, `filter`, and `reduce`, and in situations where you want to preserve the value of `this` from the surrounding context. However, it's important to be aware of the difference in how `this` behaves in arrow functions compared to regular functions, as it can lead to unexpected behavior if not used correctly.

23. ### What is the use of a constructor function in JavaScript?

Constructor functions in JavaScript are used to create and initialize objects. They act as blueprints for creating new instances of objects with similar properties and methods.

```js

class Person(name,age){
  constructor(name,age){
    this.name = name
    this.age = age
  }
}

const person1 = new Person("Mithun",25)
const person2 = new Person("Prabhu",26)

console.log("Person1:", person1 )
console.log("Person2:", person2 )

```


 A function that creates an instance of a class which is called an object is known as a constructor. Whenever the object is using a new keyword then the constructor gets called. Constructor is used to creating an object and set values if there are any object properties present.

```js
function Person(name,age){
  this.name = name
  this.age = age
  this.sayHello = function(){
    console.log(`Hello, My name is ${this.name} and I am ${this.age} year old`)
  }
}

const person1 = new Person("Mithun",25)
const person2 = new Person("Prabhu",26)

person1.sayHello()
person2.sayHello()
```

24. ### What is recursion in a programming language?

Recursion is a technique in which the function calls itself again and again repeatedly until the condition gets false. 

```js
function counter(number){
  console.log(number)

  const newNumber = number - 1

  if(number > 0){
      counter(newNumber)
  }

}

counter(5)

```

25. ### What is memoization?

The optimization technique which speeds up the applications by storing the results needed to an immediate function calls and returning to the cached result when the same inputs are supplied again is known as memorization

```js
function fibonaaci(n, memo = {}){
  if(n <= 1){
    return n
  }

  if(memo[n]){
    return memo[n]
  }

  memo[n] = fibonacci(n-1,memo) + fibonacci(n-2,memo)

  return memo[n]
}

```

26. ### What are callbacks? 

A callback is a function passed as an argument to another function. It acts as a sequencing system for function execution. Once the function is been executed using call back, we can wait for the result and then execute the next function in the sequence. 

```js

function doSomethingAsync(callback){

  setTimeout(() => {
    let result = "Data from server"
    return callback(result)
  },1000)
}

function processedResult(value){
  console.log("Processing",value)
}

doSomethingAsync(processedResult)

```

27. ### What are object prototypes?


In JavaScript, every object has a hidden property called the prototype, which is an object itself. The prototype object contains properties and methods that are shared among all instances of that object type. 

When you access a property or method on an object, and it doesn't exist on the object itself, JavaScript looks for it in the prototype chain, which is a chain of prototype objects linked together.

```js

function Person(name,age){
  this.name = name
  this.age = age
}

Person.prototype.sayHello = function(){
  console.log(`Hi ${this.name}  your age is ${this.age} right?` )
}

const person1 = new Person("Mithun",25)
const person2 = new Person("Prabhu",27)

person1.sayHello()
person2.sayHello()

```

28. ### What is a pure function?

A Pure function is a function where the return value is only determined by its arguments without any side effects. i.e, If you call a function with the same arguments 'n' number of times and 'n' number of places in the application then it will always return the same value.

```js
// Impure
const arrayOfNumbers = []
const fn = (number) => arrayOfNumbers.push(number)

// Pure

const add = (a,b) => return a + b

```
Remember that Pure functions are important as they simplify unit testing without any side effects and no need for dependency injection. 

29. ### What is the difference between let and var

var	                                                     let
It is been available from the beginning of JavaScript	   Introduced as part of ES6
It has function scope	                                   It has block scope
Variables will be hoisted	                               Hoisted but not initialized

```js

function userDetails(username){
    if(username){
        console.log(age)
        console.log(salary)
        let age = 25
        var salary = 80000
    }
    console.log(salary)
    console.log(age)
}

userDetails("John")

```

30. ### How do you decode or encode a URL in JavaScript?

encodeURI() function is used to encode an URL. This function requires a URL string as a parameter and return that encoded string. decodeURI() function is used to decode an URL. This function requires an encoded URL string as parameter and return that decoded string.

31. ### What are classes in ES6

In ES6, Javascript classes are primarily syntactic sugar over JavaScript’s existing prototype-based inheritance. For example, the prototype based inheritance written in function expression as below,

```js

function Bike(model, color) {
  this.model = model;
  this.color = color;
}

Bike.prototype.getDetails = function () {
  return this.model + " bike has" + this.color + " color";
};

```

Whereas ES6 classes can be defined as an alternative

```js

class Bike {
  constructor(color, model) {
    this.color = color;
    this.model = model;
  }

  getDetails() {
    return this.model + " bike has" + this.color + " color";
  }
}

```

32. ### What are closures

A closure is combination of function and lexical environment within which that function was declared. i.e inner function which has acccess to its lexical environment and outerFunction.

The closure has 3 scope chains:
Own scope where variables defined between its curly brackets
Outer function's variable
Global variable  

In JavaScript, a closure is a function that has access to the variables and parameters of its outer (enclosing) function, even after the outer function has finished executing. Closures are a fundamental concept in JavaScript and play a crucial role in many programming patterns and scenarios. They allow you to create functions with "private" data and maintain state between function calls.

```js

function outerFunction(a){
  return function innerFunction(b){
    return a + b
  }
}

let innerFunction = outerFunction(2)
let result = innerFunction(3)
console.log(result)

```

33. ### What is the object type? 

The object type refers to a compound value where you can set properties (named locations) that each hold their own values of any type.

```js
var obj = {
  a: "hello world",
  b: 42,
  c: true
}

console.log(obj.a)
console.log(obj.b)
console.log(obj.c)

console.log(obj["a"])
console.log(obj["b"])
console.log(obj["c"])

```

```js

var obj = {
  a: "Hello world",
  b: 42
}

var b = "a"

console.log(obj[b])
console.log(obj["b"])

```

34. ### Explain arrays in JavaScript

An array is an object that holds values (of any type) not particularly in named properties/keys, but rather in numerically indexed positions:

```js

var array = [
  "hello world",
  42,
  true
]

console.log(array[0]) // "hello world"

```

35. ###   What is typeof operator?

JavaScript provides a typeof operator that can examine a value and tell you what type it is:

```js

var a;
typeof a;				// "undefined"

a = "hello world";
typeof a;				// "string"

a = 42;
typeof a;				// "number"

a = true;
typeof a;				// "boolean"

a = null;
typeof a;				// "object" -- weird, bug

a = undefined;
typeof a;				// "undefined"

a = { b: "c" };
typeof a;				// "object"

```

36. ### Explain equality in Javascript

JavaScript has both strict and type–converting comparisons:

Strict comparison (e.g., ===) checks for value equality without allowing coercion
Abstract comparison (e.g. ==) checks for value equality with coercion allowed

```js
var a="42"
var b=42

console.log(a==b)
console.log(a===b)

```

Some simple equalityrules:

If either value (aka side) in a comparison could be the true or false value, avoid == and use ===.
If either value in a comparison could be of these specific values (0, "", or [] -- empty array), avoid == and use ===.
In all other cases, you're safe to use ==. Not only is it safe, but in many cases it simplifies your code in a way that improves readability.

37. ### What is Scope in JavaScript?

In JavaScript, each function gets its own scope. Scope is basically a collection of variables as well as the rules for how those variables are accessed by name. Only code inside that function can access that function's scoped variables.

A variable name has to be unique within the same scope. A scope can be nested inside another scope. If one scope is nested inside another, code inside the innermost scope can access variables from either scope.

38. ### Explain what is Linear (Sequential) Search and when may we use one?

Linear (sequential) search goes through all possible elements in some array and compare each one with the desired element. It may take up to O(n) operations, where N is the size of an array and is widely considered to be horribly slow. In linear search when you perform one operation you reduce the size of the problem by one (when you do one operation in binary search you reduce the size of the problem by half). Despite it, it can still be used when:

You need to perform this search only once,
You are forbidden to rearrange the elements and you do not have any extra memory,
The array is tiny, such as ten elements or less, or the performance is not an issue at all,
Even though in theory other search algorithms may be faster than linear search (for instance binary search), in practice even on medium-sized arrays (around 100 items or less) it might be infeasible to use anything else. On larger arrays, it only makes sense to use other, faster search methods if the data is large enough, because the initial time to prepare (sort) the data is comparable to many linear searches,
When the list items are arranged in order of decreasing probability, and these probabilities are geometrically distributed, the cost of linear search is only O(1)
You have no idea what you are searching.
When you ask MySQL something like SELECT x FROM y WHERE z = t, and z is a column without an index, linear search is performed with all the consequences of it. This is why adding an index to searchable columns is important.

Time complexity: O(n)
Space complexity: O(1)

```js
function linearSearch(array, toFind){
  for(let i = 0; i < array.length; i++){
    if(array[i] === toFind) return i;
  }
  return -1;
}

```

39. ### Explain Values and Types in JavaScript

JavaScript has typed values, not typed variables. The following built-in types are available:

string
number
boolean
null and undefined
object
symbol (new to ES6)

40. ### What is let keyword in JavaScript? 

In addition to creating declarations for variables at the function level, ES6 lets you declare variables to belong to individual blocks (pairs of { .. }), using the let keyword.

41. ###  Explain what is Binary Search

When the list is sorted we can use the binary search (also known as half-interval search, logarithmic search, or binary chop) technique to find items on the list. Here's a step-by-step description of using binary search:
Let min = 1 and max = n.
Guess the average of max and min rounded down so that it is an integer.
If you guessed the number, stop. You found it!
If the guess was too low, set min to be one larger than the guess.
If the guess was too high, set max to be one smaller than the guess.
Go back to step two.
In this example we looking for array item with value 4:

Complexity Analysis:
Time: O(logn)
Space: O(1)

```js

const arrayValues = [1,2,3,4,5,6,7,8,9,10]

const valueToFind = 8

function binarySearch(array,valueToFind){

  let low = 0
  let high = array.length-1

  while(left <= right){
    let mid = Math.floor((low + high) / 2)

    if(array[mid] === valueToFind){
      return mid
    }else if(array[mid] > valueToFind){
      high = mid - 1
    }else{
      low = mid + 1
    }
  }

  return -1
  
}

binarySearch(arrayValues,valueToFind)

```

42. ### Explain the same-origin policy with regards to JavaScript.

The same-origin policy prevents JavaScript from making requests across domain boundaries. An origin is defined as a combination of URI scheme, hostname, and port number. This policy prevents a malicious script on one page from obtaining access to sensitive data on another web page through that page's Document Object Model.

43. ### What is the difference between == and ===?

== is the abstract equality operator while === is the strict equality operator. The == operator will compare for equality after doing any necessary type conversions. The === operator will not do type conversion, so if two values are not the same type === will simply return false. When using ==, funky things can happen, such as:

```js

1 == '1'; // true
1 == [1]; // true
1 == true; // true
0 == ''; // true
0 == '0'; // true
0 == false; // true

```

My advice is never to use the == operator, except for convenience when comparing against null or undefined, where a == null will return true if a is null or undefined.

```js

var a = null;
console.log(a == null); // true
console.log(a == undefined); // true

```

44. ###  Is there anyway to force using strict mode in Node.js? 

you can place
```js
"use strict";
```

at the top of your file in node >= 0.10.7, but if you want your whole app to run in strict (including external modules) you can do this

```shell
node --use_strict

```

45. ### Why would you use something like the load event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?  

The "load" event in web development refers to the event that is triggered when a web page or a specific element on a web page (such as an image or a script) has finished loading. It is a fundamental event that developers use to ensure that certain actions or code are executed only after all the page's resources have been fully loaded and are ready for interaction. Here's why you might use the "load" event:

**1. Ensuring proper functionality:** If you have JavaScript code that relies on specific elements (like images, stylesheets, or other assets) being fully loaded, you would use the "load" event to make sure the code execution occurs only when those resources are available.

**2. Manipulating elements:** If you want to manipulate the size, position, or behavior of an element after it's loaded, you would use the "load" event to avoid accessing the element before it's fully rendered.

**3. User experience:** By using the "load" event, you can provide a better user experience by preventing content from appearing or being interacted with before it's ready.

**Disadvantages of the "load" event:**

While the "load" event is essential for many scenarios, it does have some potential disadvantages:

**1. Blocking rendering:** If your code execution is tied to the "load" event, it might delay the rendering and initial display of your webpage, especially if you have a lot of resources to load. This can result in slower perceived performance.

**2. User interactions:** If users interact with your page before the "load" event has fired, it could lead to unexpected behavior or errors if your JavaScript relies on fully loaded resources.

**Alternatives to the "load" event:**

**1. DOMContentLoaded event:** This event fires when the HTML document's DOM has been fully loaded and parsed, without waiting for external resources like images or stylesheets. It's often preferred for cases where you want to manipulate the DOM without waiting for all assets to load.

**2. Intersection Observer:** This API allows you to efficiently track when elements come into or go out of the viewport. It's useful for scenarios where you want to trigger actions when elements become visible to the user, regardless of whether the entire page has loaded.

**3. Async and defer attributes:** For external scripts, you can use the "async" or "defer" attributes to control how and when they are executed in relation to the loading process. This can help improve page loading performance.

In summary, while the "load" event is a valuable tool for ensuring that your code executes after resources are fully loaded, it's important to consider its potential impact on page rendering and user experience. Depending on your specific use case, alternatives like "DOMContentLoaded" event, Intersection Observer, or script loading attributes might provide more suitable solutions.

46. ###   What is strict mode?

Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a "strict" operating context. This strict context prevents certain actions from being taken and throws more exceptions.

```js

// Non-strict code...

(function(){
  "use strict";

  // Define your library strictly...
})();

// Non-strict code...

```

47. ### What's the difference between Host objects and Native objects?

Native objects are objects that are part of the JavaScript language defined by the ECMAScript specification, such as String, Math, RegExp, Object, Function, etc.
Host objects are provided by the runtime environment (browser or Node), such as window, XMLHTTPRequest, etc.

48. ### What language constructions do you use for iterating over object properties and array items?

Spread syntax and rest syntax are both features introduced in ECMAScript 2015 (ES6) that enhance the way you work with arrays and objects in JavaScript. They have distinct use cases and benefits.

**Spread Syntax:**

The spread syntax is denoted by the `...` (three dots) followed by an iterable (such as an array or an object). It allows you to "spread out" the elements of an iterable into another iterable (e.g., array, function arguments, etc.). Here are some benefits of using spread syntax:

1. **Copying Arrays and Objects:** Spread syntax can quickly create shallow copies of arrays and objects, making it easy to create duplicates without modifying the original data.

   ```javascript
   const originalArray = [1, 2, 3];
   const copyArray = [...originalArray];
   
   const originalObject = { a: 1, b: 2 };
   const copyObject = { ...originalObject };
   ```

2. **Merging Arrays:** You can concatenate or merge arrays easily using spread syntax.

   ```javascript
   const array1 = [1, 2, 3];
   const array2 = [4, 5, 6];
   const mergedArray = [...array1, ...array2]; // [1, 2, 3, 4, 5, 6]
   ```

3. **Passing Function Arguments:** Spread syntax allows you to pass an array as separate arguments to a function.

   ```javascript
   function sum(a, b, c) {
     return a + b + c;
   }
   
   const numbers = [1, 2, 3];
   const result = sum(...numbers); // 6
   ```

**Rest Syntax:**

The rest syntax is also denoted by the `...` (three dots), but it's used in function parameters to collect multiple arguments into a single array. This can be especially useful when working with functions that accept a variable number of arguments.

```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

const result = sum(1, 2, 3, 4); // 10
```

The key differences between spread syntax and rest syntax are:

1. **Usage:**
   - Spread syntax is used for expanding elements (e.g., arrays, objects) into other elements.
   - Rest syntax is used for collecting multiple elements (function arguments) into a single element (array).

2. **Position:**
   - Spread syntax is typically used outside of function arguments and is used for creating copies, merging, and spreading elements.
   - Rest syntax is used as a function parameter and is used for collecting arguments into an array.

In summary, both spread syntax and rest syntax are powerful features that simplify working with arrays and function arguments. Spread syntax allows you to manipulate and combine arrays and objects more effectively, while rest syntax simplifies handling a variable number of function arguments by collecting them into an array.

49. ### Explain Function.prototype.bind

Function.prototype.bind is a method available on all JavaScript functions that allows you to create a new function with a specific execution context (the value of this) and, optionally, a predefined set of arguments. This is particularly useful when you want to create a new function that, when invoked, will have a specific value of this and possibly some fixed arguments, regardless of how and where the new function is called.

```js

function greet(message){
  console.log(`${message} ${this.name}`)
}

const object = {
  name: "Mithun"
}

let bindFunction = greet.bind(object,"Hello")
bindFunction()

```

50. ### When should we use generators in ES6?

Generators in ECMAScript 2015 (ES6) provide a powerful and flexible way to create iterators, which can be used for asynchronous and lazy evaluation of data. They are particularly useful in situations where you need to control the flow of asynchronous operations or when dealing with large data sets

```js
function* infiniteSequence() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const numbers = infiniteSequence();
console.log(numbers.next().value); // 0
console.log(numbers.next().value); // 1
// ...

```

Keep in mind that while generators offer powerful features, they can also introduce complexity and might not always be the most straightforward solution for every problem. Asynchronous code can often be managed using async/await, and lazy evaluation can sometimes be achieved using other functional programming techniques.

51. ### Could you explain the difference between ES5 and ES6

ES5 and ES6 refer to two different versions of the ECMAScript (JavaScript) programming language specification. ES5 stands for ECMAScript 5, and ES6 stands for ECMAScript 2015, which is often referred to as ES6 or ECMAScript 6. ES6 introduced several new features and improvements to the language compared to ES5. Here's an overview of some of the key differences between ES5 and ES6:

1. **Variable Declarations:**
   - ES5: Used `var` to declare variables, which had function-level scope and could be hoisted.
   - ES6: Introduced `let` and `const` for block-scoped variables. `let` allows reassignment, while `const` declares variables that cannot be reassigned.

2. **Arrow Functions:**
   - ES6: Introduced arrow functions (`() => {}` syntax) which have a more concise syntax, lexically bind `this`, and eliminate the need for explicit `bind()` in many cases.

3. **Classes:**
   - ES6: Introduced a more traditional class syntax for creating constructor functions and prototypes, making object-oriented programming in JavaScript more intuitive.

4. **Template Literals:**
   - ES6: Introduced template literals (backticks) for creating strings with embedded expressions, making string interpolation and multiline strings easier.

5. **Default Parameters:**
   - ES6: Allowed function parameters to have default values, simplifying function definitions and reducing the need for manual parameter checking.

6. **Destructuring:**
   - ES6: Added destructuring assignment, allowing you to extract values from arrays and objects into variables in a concise manner.

7. **Spread and Rest Operators:**
   - ES6: Introduced the spread operator (`...`) for expanding arrays and objects, and the rest syntax (`...`) for collecting function arguments into an array.

8. **Enhanced Object Literals:**
   - ES6: Provided a more concise syntax for defining object literals, including the ability to use computed property names and define methods directly within object literals.

9. **Promises:**
   - ES6: Introduced native Promise objects for handling asynchronous operations, providing a more standardized way to work with asynchronous code than callbacks.

10. **Modules:**
    - ES6: Added support for modular code organization using the `import` and `export` keywords, enabling better code separation and reusability.

11. **Iterators and Generators:**
    - ES6: Introduced the concept of iterators and generators for more flexible iteration and lazy evaluation of data.

12. **Map and Set Data Structures:**
    - ES6: Introduced `Map` and `Set` data structures for more efficient and flexible handling of collections of data.

These are just a few of the key differences between ES5 and ES6. ES6 introduced a significant number of new features, syntax improvements, and programming paradigms that have greatly enhanced the capabilities and readability of JavaScript code. As of my knowledge cutoff in September 2021, newer versions of ECMAScript have been released with even more features and improvements beyond ES6.

52. ### Describe Closure concept in JavaScript as best as you could

A closure is a fundamental and powerful concept in JavaScript that allows functions to remember and access the variables and parameters from their containing (enclosing) lexical scope, even after that containing function has finished executing. In other words, a closure "closes over" its lexical scope, preserving the scope's state and allowing the function to maintain a reference to it.

Here's a breakdown of the key components and characteristics of closures:

1. **Lexical Scope:** In JavaScript, variables are scoped based on where they are defined in the source code, not where they are executed. A closure captures the entire lexical scope of its containing function at the time of its creation.

2. **Function Inside Function:** Closures typically involve a function defined within another function. The inner function has access to the variables and parameters of the outer (enclosing) function, even after the outer function has completed execution.

3. **Data Encapsulation:** Closures provide a way to encapsulate data and behavior, creating a form of data privacy. This allows you to create "private" variables and methods that are not accessible from outside the closure.

4. **Persistence of State:** Closures allow functions to "remember" their lexical scope's state. This is particularly useful for scenarios like event handlers, where you want a function to access variables from the outer scope even when it's triggered later.

5. **Multiple Closures:** Multiple closures can be created within the same outer function, each maintaining its own separate copy of the captured variables and parameters.

6. **Garbage Collection:** Closures can impact memory usage, as they can prevent variables from being garbage-collected if they're still referenced by a closure.

Here's a simple example to illustrate closures:

```javascript
function outer() {
  const outerVar = 'I am from outer';
  
  function inner() {
    console.log(outerVar); // Accesses outerVar from the enclosing scope
  }
  
  return inner; // Return the inner function
}

const closureFunction = outer(); // closureFunction now holds a reference to inner

closureFunction(); // Prints "I am from outer"
```

In this example, `inner` is a closure that captures and "closes over" the `outer` function's lexical scope. Even after `outer` has finished executing, `closureFunction` still retains access to the `outerVar` variable.

Closures are a foundational concept in JavaScript, enabling powerful patterns like encapsulation, module patterns, and functional programming techniques. They are used extensively in asynchronous programming, event handling, and creating modular and reusable code. Understanding closures is crucial for writing efficient and effective JavaScript code.

53. ### What is the preferred syntax for defining enums in JavaScript?

JavaScript does not have a built-in enum data type like some other programming languages (e.g., Java or C#). However, you can achieve enum-like behavior using various approaches to define constants or symbolic values. Here are a couple of common ways to define enums in JavaScript:

**1. Object Literal:**

You can define an object literal where each property represents a named constant (enum value). This approach allows you to associate additional information or behavior with each enum value.

```javascript
const Color = {
  RED: 'red',
  GREEN: 'green',
  BLUE: 'blue'
};

console.log(Color.RED); // "red"
```

**2. Freeze Object:**

To prevent accidental modification of enum values, you can use `Object.freeze()` to make the object immutable:

```javascript
const Color = Object.freeze({
  RED: 'red',
  GREEN: 'green',
  BLUE: 'blue'
});
```

**3. Class with Static Properties:**

You can use a class with static properties to define enum values. This approach provides a more structured way to organize your code and allows better encapsulation.

```javascript
class Color {
  static RED = 'red';
  static GREEN = 'green';
  static BLUE = 'blue';
}

console.log(Color.RED); // "red"
```

Note that the class approach requires support for class fields, which are available in modern JavaScript environments (ES2015+).

**4. Symbols:**

Another approach is to use symbols, which are unique and immutable values that can serve as enum-like constants. Symbols are not equal to any other value, making them suitable for enum values.

```javascript
const Color = {
  RED: Symbol('red'),
  GREEN: Symbol('green'),
  BLUE: Symbol('blue')
};

console.log(Color.RED === Color.GREEN); // false
```

Choose the approach that best fits your needs and coding style. While there's no one-size-fits-all solution for defining enums in JavaScript, using object literals or static properties in classes are common and effective approaches for creating enum-like structures.

54. ### What's the difference between .call and .apply?

Both `.call()` and `.apply()` are methods that can be used to invoke a function in JavaScript. They allow you to specify the value of `this` inside the function and pass arguments to the function. The main difference between them lies in how you pass arguments to the function.

1. **`.call()` Method:**

The `.call()` method allows you to invoke a function with a specified `this` value and a list of arguments passed individually (comma-separated).

```javascript
function greet(message) {
  console.log(`${message}, ${this.name}`);
}

const person = { name: 'Alice' };

greet.call(person, 'Hello'); // Output: "Hello, Alice"
```

2. **`.apply()` Method:**

The `.apply()` method is similar to `.call()`, but it accepts an array (or an array-like object) of arguments instead of individual arguments.

```javascript
function greet(message) {
  console.log(`${message}, ${this.name}`);
}

const person = { name: 'Alice' };

greet.apply(person, ['Hello']); // Output: "Hello, Alice"
```

**Key Differences:**

- **Arguments Format:**
  - `.call()` takes individual arguments separated by commas.
  - `.apply()` takes an array or array-like object containing the arguments.

- **Use Cases:**
  - Use `.call()` when you know the specific arguments you want to pass to the function.
  - Use `.apply()` when you have an array of arguments or when you want to apply a function to an array-like object.

**Examples:**

```javascript
// Using .call()
function sum(a, b) {
  return a + b;
}

const result = sum.call(null, 2, 3); // result is 5

// Using .apply()
function sumArray(numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

const numbers = [1, 2, 3, 4, 5];
const arrayResult = sumArray.apply(null, [numbers]); // arrayResult is 15
```

In modern JavaScript, you can often achieve similar functionality using the spread operator (`...`) and the rest parameter, which can be more intuitive and flexible than using `.apply()` and `.call()`.

55. ###  What is the drawback of creating true private in JavaScript?

Creating true privacy (encapsulation) in JavaScript involves techniques like closures, where you create a function within another function to control access to variables and methods. While this provides encapsulation and privacy, it also comes with certain drawbacks:

1. **Memory Consumption:** Closures can lead to increased memory consumption, as the enclosed variables and functions are not eligible for garbage collection as long as the closure exists. This can be problematic in long-running applications, as memory leaks may occur if closures are not managed properly.

2. **Performance Impact:** Closures and private members can have a slight impact on performance due to the additional overhead of maintaining lexical scopes. While the impact is often negligible, it can be noticeable in performance-critical sections of code.

3. **Debugging Complexity:** Debugging closures and private members can be more challenging than debugging code with a more straightforward structure. Accessing and modifying private members from external code might require workarounds, making it harder to trace and diagnose issues.

4. **Limited Accessibility:** Truly private members cannot be accessed or modified from outside the closure or function, even for debugging or testing purposes. This can hinder flexibility and make it harder to write comprehensive tests.

5. **Code Complexity:** Encapsulation through closures and private members can increase the complexity of your code, making it harder to understand and maintain, especially for developers who are not familiar with the specific design pattern used.

6. **Compatibility and Browser Issues:** Some older browsers or JavaScript environments might have limitations or unexpected behavior when dealing with closures and private members. This can lead to compatibility issues or unpredictable behavior in certain situations.

7. **Alternative Patterns:** While closures are a common way to achieve privacy, they are not the only solution. Other design patterns, such as the revealing module pattern or classes in modern JavaScript, offer alternative ways to achieve encapsulation while potentially mitigating some of the drawbacks of closures.

8. **Namespace Pollution:** Without proper encapsulation management, your codebase might suffer from namespace pollution, where many closures create an unnecessary proliferation of private functions and variables.

It's important to weigh the benefits of encapsulation and true privacy against these drawbacks. In many cases, striking a balance between encapsulation and practicality is a good approach. JavaScript's module system and class syntax (introduced in ES6) also provide ways to achieve encapsulation without necessarily relying heavily on closures, offering more manageable solutions for privacy.

56. ### what is true replacement for closure to maintain encapsulation show with example

One of the modern and widely adopted replacements for closures to achieve encapsulation in JavaScript is the Module Pattern. The Module Pattern uses an immediately invoked function expression (IIFE) to create a private scope, allowing you to control access to variables and functions while exposing a public API. This pattern is especially useful when you want to encapsulate and organize related functionality.

Here's an example of the Module Pattern:

```javascript
const MyModule = (function() {
  // Private variables
  let privateVar = 0;

  // Private function
  function privateFunction() {
    console.log("This is a private function");
  }

  // Public API (exposed to the outside)
  return {
    increment: function() {
      privateVar++;
      console.log("Incremented privateVar:", privateVar);
    },
    reset: function() {
      privateVar = 0;
      console.log("privateVar reset to 0");
    }
  };
})();

// Usage
MyModule.increment(); // Output: Incremented privateVar: 1
MyModule.increment(); // Output: Incremented privateVar: 2
MyModule.reset();     // Output: privateVar reset to 0

// Trying to access private members directly won't work
console.log(MyModule.privateVar); // Output: undefined
MyModule.privateFunction();       // Output: TypeError: MyModule.privateFunction is not a function
```

In this example, `MyModule` is an object that exposes only the methods `increment` and `reset`, keeping `privateVar` and `privateFunction` truly private. Outside code cannot directly access these private members, ensuring encapsulation.

Advantages of the Module Pattern:

1. **Encapsulation:** It encapsulates private members, preventing external code from directly modifying or accessing them.

2. **Public API:** It provides a clear and controlled way to interact with the module's functionality, exposing only the necessary methods.

3. **Organization:** It allows you to group related functionality together in a structured manner.

4. **Readability:** It enhances code readability by clearly separating private and public parts of the module.

5. **Ease of Maintenance:** It makes it easier to maintain and refactor code by clearly defining access points and isolating private implementation details.

While the Module Pattern is effective for encapsulation, keep in mind that ES6 introduced native module support with the `import` and `export` syntax. As a result, many modern JavaScript projects prefer using ES6 modules, which offer even better encapsulation and organization features while also taking advantage of the built-in module system.

57. ### Explain the differences on the usage of foo between function foo() {} and var foo = function() {}

The differences between the two ways of defining a function in JavaScript, namely `function foo() {}` and `var foo = function() {}`, involve how the functions are hoisted, scoped, and when they can be called.

**1. Function Declaration: `function foo() {}`**

```javascript
foo(); // Works because of hoisting

function foo() {
  console.log("Hello from foo");
}
```

- Hoisting: Function declarations are hoisted, which means they are moved to the top of their containing scope during compilation. This allows you to call the function before its declaration in the code.
- Scope: Function declarations are hoisted within the block or function scope in which they are defined. They can be accessed anywhere within the containing scope.
- `this` Binding: Inside the function, `this` refers to the object that called the function (usually the object before the dot notation, or `window` in the global scope).

**2. Function Expression: `var foo = function() {}`**

```javascript
foo(); // Error: foo is not a function

var foo = function() {
  console.log("Hello from foo");
};
```

- Hoisting: Variable declarations (`var foo`) are hoisted, but the assignment (`var foo = function() {}`) is not hoisted. As a result, you cannot call the function before the assignment in the code.
- Scope: Function expressions are defined within their containing block or function scope, similar to variables declared with `var`.
- `this` Binding: Inside the function, `this` behaves like any other function, and its value is determined by how the function is invoked.

In summary, the key differences between `function foo() {}` (function declaration) and `var foo = function() {}` (function expression) lie in hoisting and scope:

- Function declarations are hoisted along with their function body, allowing you to call the function before its declaration.
- Function expressions are not hoisted with their assignments, so you cannot call the function before the assignment.
- Both function declarations and expressions create a variable-like reference to the function, but their hoisting behavior and scoping can lead to different usage patterns and potential issues.

58. ### What do you think of AMD vs CommonJS?

Certainly! Here are examples of using both AMD and CommonJS module formats, along with a brief explanation of each:

**1. AMD Example:**

Let's say you have two JavaScript files: `main.js` and `module.js`. You're using the RequireJS library to handle AMD modules in a browser-based environment.

`module.js`:
```javascript
define(function() {
  return {
    greet: function(name) {
      return "Hello, " + name + "!";
    }
  };
});
```

`main.js`:
```javascript
require(['module'], function(module) {
  var message = module.greet('Alice');
  console.log(message); // Output: "Hello, Alice!"
});
```

In this example, `module.js` defines an AMD module using `define()`, and `main.js` uses `require()` to asynchronously load the module and use its functionality.

**2. CommonJS Example:**

Let's consider a server-side scenario using Node.js. You have two files: `main.js` and `module.js`.

`module.js`:
```javascript
module.exports = {
  greet: function(name) {
    return "Hello, " + name + "!";
  }
};
```

`main.js`:
```javascript
const module = require('./module');
const message = module.greet('Bob');
console.log(message); // Output: "Hello, Bob!"
```

In this example, `module.js` uses `module.exports` to define a CommonJS module, and `main.js` uses `require()` to synchronously load the module and use its functionality.

Please note that the AMD example assumes you're using the RequireJS library and targeting a browser environment, while the CommonJS example is tailored for Node.js and server-side development. Additionally, with the introduction of ES6 modules and modern bundling tools, many projects are transitioning to using native modules and tools like Webpack or Parcel to handle module loading and bundling across different environments.

59. ### What is the definition of a Higher-Order Function?

A Higher-Order Function (HOF) is a fundamental concept in functional programming where a function takes one or more functions as arguments and/or returns a function as its result. In other words, it treats functions as first-class citizens, allowing them to be manipulated and operated upon like any other data type, such as numbers or strings.

Key characteristics of Higher-Order Functions:

1. **Accepts Functions as Arguments:** A higher-order function can take one or more functions as arguments. These functions are often referred to as "callbacks" or "transformers."

2. **Returns a Function:** A higher-order function can also return a new function as its result, which can be executed or further manipulated.

3. **Function Composition:** HOFs enable function composition, where you can combine multiple functions to create more complex behavior.

4. **Abstraction:** Higher-order functions promote abstraction by allowing you to encapsulate behavior (functions) and pass them around as values.

Higher-Order Functions are a key tool for writing clean, modular, and reusable code. They encourage separation of concerns and support functional programming principles, such as immutability and declarative style.

Examples of Higher-Order Functions:

1. **`Array.prototype.map()`**: Accepts a function and applies it to each element of an array, returning a new array with the results.

2. **`Array.prototype.filter()`**: Accepts a function and returns a new array containing only the elements that satisfy a condition specified by the function.

3. **`Array.prototype.reduce()`**: Accepts a function and accumulates a single value by applying the function to each element of the array.

4. **`setTimeout()`**: Accepts a function and a time delay, executing the function after the specified delay.

5. **`addEventListener()`**: Accepts an event type and a function, attaching the function as an event handler for the specified event.

Example of a Higher-Order Function:

```javascript
function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplyBy(2); // Returns a new function that doubles a number
const triple = multiplyBy(3); // Returns a new function that triples a number

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15
```

In this example, `multiplyBy()` is a higher-order function that returns a function based on the provided factor. This returned function can be thought of as a "transformer" function that multiplies a number by the given factor.

60. ### What is a Jump (or Block) Search?

Jump search, also known as block search, is a searching algorithm used to find the position of a target value within a sorted array. It improves upon linear search by reducing the number of comparisons needed, especially when dealing with large arrays. Jump search is a hybrid algorithm that combines the principles of linear search and binary search.

Here's how the jump search algorithm works:

1. **Step 1: Determine the Block Size:**
   Choose a block size, which is typically the square root of the array's length. For example, if the array has `n` elements, the block size might be `Math.sqrt(n)`.

2. **Step 2: Jump Through Blocks:**
   Start by comparing the target value with the last element of the current block. If the target value is greater, jump to the next block. Repeat this step until you find a block that either contains the target value or ends after it.

3. **Step 3: Linear Search Within the Block:**
   Perform a linear search within the identified block to locate the exact position of the target value.

Jump search provides a balance between the linear search (which has a time complexity of O(n)) and binary search (which requires a sorted array and has a time complexity of O(log n)). The time complexity of jump search is approximately O(√n).

Here's a simplified example of jump search in JavaScript:

```javascript
function jumpSearch(arr, target) {
  const n = arr.length;
  const blockSize = Math.sqrt(n);

  let prev = 0;
  while (arr[Math.min(blockSize, n) - 1] < target) {
    prev = blockSize;
    blockSize += Math.sqrt(n);
    if (prev >= n) {
      return -1; // Target not found
    }
  }

  // Linear search within the identified block
  for (let i = prev; i < Math.min(blockSize, n); i++) {
    if (arr[i] === target) {
      return i; // Target found at index i
    }
  }

  return -1; // Target not found
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 13;

const index = jumpSearch(sortedArray, target);
console.log(index); // Output: 6 (target 13 found at index 6)
```

Jump search can be particularly useful when you have a sorted array and want to find an element's position efficiently. However, it's important to note that it requires the array to be sorted and might not always be the optimal choice for small arrays or arrays with irregular data distribution.

61. ### What is the difference between a shim and a polyfill?

Both shims and polyfills are techniques used in web development to provide compatibility with newer features of a programming language or web API in older browsers. However, they serve slightly different purposes:

**Shim:**

A shim, also known as a "shim layer" or "compatibility layer," is a piece of code that provides a consistent interface or behavior across different environments, typically by implementing missing features or functionality. Shims are often used to fill in the gaps between different browsers or platforms.

**Polyfill:**

A polyfill is a specific type of shim that specifically aims to provide modern functionality in older browsers that lack support for that functionality. Polyfills typically mimic the APIs of newer features using JavaScript code, allowing developers to use those features in older browsers.

In essence:

- A **shim** provides a consistent interface or behavior across different environments by implementing missing features.

- A **polyfill** is a type of shim that specifically aims to provide modern functionality in older environments by emulating that functionality.

Here's an example to illustrate the difference:

Let's say you're working with an older browser that doesn't support the `Array.prototype.forEach()` method, which is a feature introduced in ECMAScript 5 (ES5). You could use a shim to provide a generic implementation of `forEach()` to ensure consistent behavior across different browsers. This shim would not necessarily mimic the exact behavior of `forEach()` in modern browsers, but it would provide a way to iterate over arrays.

Now, let's say you want to use the `Promise` object, which is a feature introduced in ECMAScript 6 (ES6), in an older browser. You could use a polyfill that emulates the `Promise` API using JavaScript code. This polyfill would specifically aim to provide the same functionality and behavior as the native `Promise` object, allowing you to use promises in older environments.

In summary, while both shims and polyfills are used to bridge compatibility gaps, a shim provides a more general compatibility layer, whereas a polyfill targets specific features or APIs to provide modern functionality in older environments.


Let's consider an example of a shim and a polyfill in the context of the `Array.prototype.forEach()` method.

**Shim Example:**

Suppose you're working with an older browser that doesn't support the `forEach()` method for arrays. You can create a shim that provides a basic implementation of `forEach()` to ensure consistent behavior across different browsers:

```javascript
// Shim for Array.prototype.forEach()
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function(callback, thisArg) {
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

// Usage
var numbers = [1, 2, 3];
numbers.forEach(function(num) {
  console.log(num);
});
```

In this example, the shim provides an implementation of `forEach()` if the browser doesn't already support it. It iterates over the array and calls the provided callback function for each element.

**Polyfill Example:**

Now let's consider a polyfill for the `Promise` object, which was introduced in ECMAScript 6 (ES6). Suppose you want to use promises in an older browser that doesn't support them:

```javascript
// Polyfill for Promise object
if (typeof Promise !== 'function') {
  window.Promise = function(executor) {
    // Implementation details here...
  };
}

// Usage
var promise = new Promise(function(resolve, reject) {
  // Resolve or reject the promise...
});
```

In this example, the polyfill provides a basic implementation of the `Promise` object if it doesn't already exist in the browser. The polyfill would typically include the complex logic needed to handle asynchronous operations and promise chaining, but for brevity, only the declaration is shown.

Both the shim and the polyfill aim to provide consistent behavior across different browser environments, but the shim focuses on implementing a general behavior (e.g., iterating over arrays), while the polyfill focuses on emulating a specific modern feature (e.g., promises) in older environments.

62. ### What is Coercion in JavaScript?

Coercion in JavaScript refers to the automatic type conversion that occurs when an operator or function is applied to values of different types. JavaScript is a dynamically typed language, which means that variables can hold values of different types, and JavaScript's engine will attempt to make sense of operations involving different types by coercing them to a common type.

Coercion can be explicit or implicit:

1. **Explicit Coercion (Type Casting):**
   Explicit coercion occurs when you intentionally convert a value from one type to another using functions or methods designed for that purpose.

   ```javascript
   var num = 42;
   var str = String(num);  // Explicitly convert number to string
   ```

2. **Implicit Coercion:**
   Implicit coercion, also known as type coercion, happens when JavaScript automatically converts values of one type to another in order to perform an operation. This can sometimes lead to unexpected results.

   ```javascript
   var num = 42;
   var str = num + "";     // Implicitly convert number to string
   ```

JavaScript performs implicit coercion in various situations, such as when using the `+` operator with different types or when comparing values using loose equality (`==`) operator. For example:

```javascript
var num = 42;
var str = "42";

console.log(num + str);    // "4242" (implicit number-to-string coercion)
console.log(num == str);    // true (implicit coercion and loose equality)
```

Coercion can sometimes lead to confusion and bugs, especially when the programmer is not aware of how JavaScript handles different types. To mitigate issues related to coercion, it's recommended to:

- Use explicit coercion when necessary to ensure predictable behavior.
- Be aware of the type conversion rules and the differences between strict equality (`===`) and loose equality (`==`).
- Use strict equality (`===`) to avoid unintended type coercion.

By understanding coercion, you can write more robust and understandable JavaScript code.

63. ### What is IIFEs (Immediately Invoked Function Expressions)?

An IIFE, or Immediately Invoked Function Expression, is a JavaScript function that is defined and executed immediately after its creation. It's a common pattern used to create a private scope for variables and functions while ensuring that they don't pollute the global scope. IIFEs are often used for encapsulation, avoiding naming conflicts, and managing variable lifetimes.

The basic syntax of an IIFE is as follows:

```javascript
(function() {
  // Code enclosed in the IIFE's function body
})();
```

Key characteristics of IIFEs:

1. **Encapsulation:** The variables and functions defined within the IIFE are local to the IIFE's scope and do not pollute the surrounding global scope. This helps prevent naming conflicts and unintended interactions with other scripts.

2. **Immediate Execution:** The IIFE is executed immediately after its declaration. This allows you to run code as soon as the page loads, setting up initial conditions or performing tasks without waiting for explicit function calls.

3. **Function Expression:** The IIFE is typically created as an anonymous function expression. This prevents the function from being accessible from outside the IIFE.

4. **Data Privacy:** The variables and functions inside the IIFE are not accessible from the outside, providing a form of data privacy.

Here's a simple example of an IIFE:

```javascript
(function() {
  var message = "Hello, IIFE!";
  console.log(message);
})();
// Output: "Hello, IIFE!"

// The variable "message" is not accessible here
```

IIFEs are often used to create modules, manage asynchronous code, and set up configurations in a controlled manner. With the introduction of block-scoped variables (`let` and `const`) and modern module systems (like ES6 modules), the need for IIFEs has decreased, but they still remain a useful technique, especially in situations where you want to create a self-contained scope for a specific task.

64. ### Explain what is Interpolation Search

Interpolation search is a searching algorithm used to find the position of a target value within a sorted array, similar to binary search. However, interpolation search is particularly effective when the array is uniformly distributed and contains a large number of elements. It makes use of the values in the array to make an educated guess about where the target might be, thus reducing the number of comparisons needed.

Here's how the interpolation search algorithm works:

1. **Step 1: Guess the Position:**
   Calculate an approximate position for the target element using a formula that takes into account the distribution of values in the array. The formula is typically:
   
   ```
   pos = low + ((target - arr[low]) * (high - low)) / (arr[high] - arr[low])
   ```
   
   where `low` and `high` are the current range boundaries.

2. **Step 2: Compare and Adjust:**
   Compare the target value with the element at the calculated position `pos`. Depending on the result of the comparison, adjust the range boundaries (`low` and `high`) to narrow down the search space.

3. **Step 3: Repeat or Conclude:**
   Repeat the process until the target value is found or the search space is exhausted.

Interpolation search can be more efficient than binary search for uniformly distributed data, as it narrows down the search space more quickly. However, its performance can degrade in scenarios with non-uniform data distribution or if the array is not sorted.

Here's a simplified example of interpolation search in JavaScript:

```javascript
function interpolationSearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high && target >= arr[low] && target <= arr[high]) {
    // Guess the position using linear interpolation
    let pos = low + Math.floor(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]));

    if (arr[pos] === target) {
      return pos; // Target found at index pos
    }

    if (arr[pos] < target) {
      low = pos + 1; // Adjust the lower boundary
    } else {
      high = pos - 1; // Adjust the upper boundary
    }
  }

  return -1; // Target not found
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 11;

const index = interpolationSearch(sortedArray, target);
console.log(index); // Output: 5 (target 11 found at index 5)
```

Interpolation search can offer improved performance in certain scenarios, but its effectiveness depends on the characteristics of the data being searched.

65. ### What is Callback Hell and what is the main cause of it?

Callback Hell, also known as "Pyramid of Doom," is a term used to describe a situation in asynchronous programming where multiple nested callbacks are used, resulting in code that is hard to read, understand, and maintain. It occurs when there is extensive nesting of callback functions, often making the code resemble a pyramid or a deeply indented structure. Callback Hell can lead to issues such as reduced code readability, error-prone code, and difficulty in debugging and maintaining the codebase.

The main cause of Callback Hell is the nature of asynchronous programming in JavaScript, where operations like I/O, network requests, or timeouts are non-blocking and executed independently. When multiple asynchronous operations need to be performed in sequence or based on the outcome of previous operations, developers often resort to nesting callback functions within each other.

Here's an example of Callback Hell:

```javascript
asyncFunction1(function(result1) {
  asyncFunction2(result1, function(result2) {
    asyncFunction3(result2, function(result3) {
      // More nesting...
    });
  });
});
```

In this example, each `asyncFunction` represents an asynchronous operation that requires a callback. As more operations are added and nested, the code becomes increasingly difficult to follow and manage.

The main issues with Callback Hell include:

1. **Readability:** Nested callbacks can make the code difficult to read and understand, especially as the nesting level increases.

2. **Error Handling:** Error handling becomes more complex, and it's challenging to handle errors at different levels of nesting.

3. **Debugging:** Debugging becomes more difficult due to the complex flow of asynchronous operations.

4. **Maintainability:** Making changes to the code or adding new functionality becomes harder, leading to potential bugs and decreased code quality.

To mitigate Callback Hell, developers have adopted various strategies and patterns, such as:

- **Modularization:** Breaking down code into smaller, more manageable functions.
- **Promises:** Using Promises or async/await to handle asynchronous operations in a more sequential and structured way.
- **Named Functions:** Defining named functions for callbacks instead of using anonymous functions, which can improve code readability.

The introduction of Promises and async/await in JavaScript has significantly improved the situation by providing more elegant ways to handle asynchronous code, reduce nesting, and enhance code readability and maintainability.

66. ### What's the difference between throw Error('msg') vs throw new Error('msg')?

Problem:
```js
var err1 = Error('message');
var err2 = new Error('message');

```

Which one is correct and why?

Answer:
Both are fine; the function call Error(…) is equivalent to the object creation expression new Error(…) with the same arguments.

67. ### Explain Null and Undefined in JavaScript

In JavaScript, both `null` and `undefined` represent the absence of a value, but they are used in slightly different contexts and have distinct behaviors.

**`undefined`:**

`undefined` is a primitive value that represents the absence of a value, typically because a variable has been declared but has not been assigned any value.

```javascript
let variable; // variable is declared but not assigned a value
console.log(variable); // Output: undefined
```

- Variables that are declared but not initialized automatically hold the value `undefined`.
- Function parameters that are not provided with arguments receive the value `undefined`.
- An object property that does not exist returns `undefined`.

**`null`:**

`null` is a special value that represents the intentional absence of any object value. It is often used to indicate the absence of a value where an object is expected.

```javascript
let obj = null; // obj intentionally does not point to any object
console.log(obj); // Output: null
```

- Unlike `undefined`, `null` is a value that is explicitly assigned.
- It is often used to clear the value of a variable or property, indicating that there is no object reference.
- When a function intentionally does not return a value, it usually returns `null`.

Key differences between `null` and `undefined`:

1. **Assignment:** `undefined` usually arises from uninitialized variables or inaccessible properties, while `null` is typically assigned to indicate the absence of an object reference.

2. **Type:** Both `null` and `undefined` are primitive values, but they have different types. `typeof null` returns `'object'`, which is considered a historical quirk.

3. **Usage:** `undefined` is used in various contexts to indicate that a value is missing, while `null` is used to represent an intentional absence of an object value.

It's important to handle both `null` and `undefined` appropriately in your code to avoid unexpected behaviors. Use `null` when you want to explicitly indicate the absence of an object value, and be mindful of `undefined` when working with uninitialized variables or inaccessible properties.

68. ###  What is a Polyfill?

A polyfill is essentially the specific code (or plugin) that would allow you to have some specific functionality that you expect in current or “modern” browsers to also work in other browsers that do not have the support for that functionality built in.
Polyfills are not part of the HTML5 standard
Polyfilling is not limited to Javascript

69. ### Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?

Every script has access to the global scope, and if everyone uses the global namespace to define their variables, collisions will likely occur. Use the module pattern (IIFEs) to encapsulate your variables within a local namespace.

70. ### What does use strict do?

The use strict literal is entered at the top of a JavaScript program or at the top of a function and it helps you write safer JavaScript code by throwing an error if a global variable is created by mistake. For example, the following program will throw an error:

```js
function doSomething(val) {
  "use strict"; 
  x = val + 10;
}
```

It will throw an error because x was not defined and it is being set to some value in the global scope, which isn't allowed with use strict The small change below fixes the error being thrown:

```js
function doSomething(val) {
  "use strict"; 
  var x = val + 10;
}
```

71. ### Explain event bubbling and how one may prevent it 

Event bubbling is a phenomenon in which an event that is triggered on a particular DOM element propagates or "bubbles up" through its ancestor elements in the DOM hierarchy. When an event occurs on a nested element (e.g., a button inside a div), the event starts at the innermost element and then propagates up to the outermost ancestor unless explicitly stopped or prevented.

For example, consider the following HTML structure:

```html
<div id="outer">
  <button id="inner">Click me</button>
</div>
```

If a click event is triggered on the "Click me" button, the event will first be handled by the button itself. Then, the event will bubble up to the `div` with the id "outer."

Event bubbling can be useful, as it allows you to handle events at different levels of the DOM hierarchy. However, there are cases where you may want to prevent or stop event bubbling to avoid unintended behavior or redundant event handling.

**How to Prevent Event Bubbling:**

1. **Stop Propagation:**
   You can stop the propagation of an event from further bubbling up the DOM hierarchy using the `stopPropagation()` method of the `Event` object.

   ```javascript
   document.querySelector('#inner').addEventListener('click', function(event) {
     event.stopPropagation();
     console.log('Button clicked');
   });

   document.querySelector('#outer').addEventListener('click', function() {
     console.log('Div clicked');
   });
   ```

   In this example, if you click the button, only "Button clicked" will be logged to the console, and the event will not propagate to the `div`.

2. **Capture Phase:**
   By default, events propagate from the innermost element to the outermost ancestor during the "bubbling phase." However, you can capture the event during the "capture phase" by setting the `useCapture` parameter of `addEventListener` to `true`.

   ```javascript
   document.querySelector('#outer').addEventListener('click', function() {
     console.log('Div clicked during capture phase');
   }, true);

   document.querySelector('#inner').addEventListener('click', function() {
     console.log('Button clicked');
   });
   ```

   In this example, if you click the button, "Div clicked during capture phase" will be logged before "Button clicked."

3. **Event Delegation:**
   Event delegation is a technique where you attach a single event listener to a parent element to handle events for its child elements. This can help avoid excessive event handlers and simplify event management.

   ```javascript
   document.querySelector('#outer').addEventListener('click', function(event) {
     if (event.target.id === 'inner') {
       console.log('Button clicked');
     }
   });
   ```

   With event delegation, you can handle events on dynamically added or removed elements without the need to attach individual event listeners.

In summary, event bubbling is a natural behavior in the DOM, but you can prevent it using techniques like `stopPropagation()`, capturing events, or utilizing event delegation to achieve more controlled event handling and better code organization.

One way to prevent event bubbling is using event.stopPropagation() or event.cancelBubble on IE < 9.

72. ### What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?

Some examples of languages that compile to JavaScript include CoffeeScript, Elm, ClojureScript, PureScript, and TypeScript.

Practically, ES2015 has vastly improved JavaScript and made it much nicer to write. I don't really see the need for CoffeeScript these days.

73. ### What language constructions do you use for iterating over object properties and array items?

In JavaScript, you can use different language constructs to iterate over object properties and array items. Here are some common methods for both:

**Iterating Over Object Properties:**

1. **For...in Loop:**
   The `for...in` loop iterates over the enumerable properties of an object, including properties inherited from its prototype chain. It's commonly used for iterating over object properties.

   ```javascript
   for (const key in object) {
     if (object.hasOwnProperty(key)) {
       // Access object[key]
     }
   }
   ```

2. **Object.keys():**
   The `Object.keys()` method returns an array of a given object's own enumerable property names, which you can then iterate using a loop or other array methods.

   ```javascript
   const keys = Object.keys(object);
   for (const key of keys) {
     // Access object[key]
   }
   ```

3. **Object.values() and Object.entries():**
   Similar to `Object.keys()`, the `Object.values()` and `Object.entries()` methods return arrays of values and key-value pairs, respectively, that you can iterate over.

   ```javascript
   const values = Object.values(object);
   for (const value of values) {
     // Access value
   }

   const entries = Object.entries(object);
   for (const [key, value] of entries) {
     // Access key and value
   }
   ```

**Iterating Over Array Items:**

1. **For Loop:**
   The traditional `for` loop can be used to iterate over array items using the array's length property.

   ```javascript
   for (let i = 0; i < array.length; i++) {
     // Access array[i]
   }
   ```

2. **forEach() Method:**
   The `forEach()` method is available on arrays and provides a clean and concise way to iterate over each element in the array.

   ```javascript
   array.forEach(function(item, index) {
     // Access item and index
   });
   ```

3. **for...of Loop:**
   The `for...of` loop is a modern iteration construct that directly iterates over the values of iterable objects, such as arrays.

   ```javascript
   for (const item of array) {
     // Access item
   }
   ```

4. **Array.prototype.map(), Array.prototype.filter(), etc.:**
   Array methods like `map()`, `filter()`, `reduce()`, and others can also be used for iteration while performing specific operations on array items.

   ```javascript
   const newArray = array.map(function(item) {
     // Perform operation on item and return new value
   });
   ```

Each of these constructs has its own use cases and benefits. When choosing an iteration method, consider factors like performance, readability, and the specific task you need to accomplish.

74. ###  When should I use Arrow Functions in ES6?

Arrow functions in ES6 provide a concise and more intuitive syntax for defining functions compared to traditional function expressions. They are particularly useful in certain scenarios where their characteristics align well with the requirements of your code. Here are some situations where you might consider using arrow functions:

1. **Shorter Function Definitions:**
   Arrow functions are especially beneficial for short, one-liner functions where brevity and clarity are important.

   ```javascript
   // Traditional function expression
   const square = function(x) {
     return x * x;
   };

   // Arrow function
   const square = x => x * x;
   ```

2. **Implicit Return:**
   If a function consists of a single expression, arrow functions allow you to omit the curly braces and the `return` keyword, as the expression's value is implicitly returned.

   ```javascript
   // Traditional function expression
   const double = function(x) {
     return x * 2;
   };

   // Arrow function with implicit return
   const double = x => x * 2;
   ```

3. **No `this` Binding:**
   Arrow functions do not have their own `this` context; instead, they inherit the `this` value from the surrounding lexical context. This makes arrow functions particularly useful in scenarios where you want to maintain the value of `this` from an outer function.

   ```javascript
   function Counter() {
     this.count = 0;
     setInterval(() => {
       // "this" refers to the Counter instance
       this.count++;
       console.log(this.count);
     }, 1000);
   }
   ```

4. **Callbacks and Iterators:**
   Arrow functions can make callback functions and iterator functions more concise, improving readability.

   ```javascript
   const numbers = [1, 2, 3, 4, 5];

   // Using arrow function with map
   const squaredNumbers = numbers.map(num => num * num);

   // Using arrow function with filter
   const evenNumbers = numbers.filter(num => num % 2 === 0);
   ```

5. **Function Composition:**
   Arrow functions can be easily combined for function composition, creating a more elegant and functional programming style.

   ```javascript
   const add = x => x + 1;
   const multiply = x => x * 2;
   const result = multiply(add(5)); // 12
   ```

While arrow functions offer several benefits, it's important to note that they also have limitations, such as not being suitable for methods that require their own `this` context, like prototype methods or constructors. In such cases, traditional function expressions or the `function` keyword are more appropriate.

Overall, arrow functions are a powerful addition to ES6, providing concise syntax and improved readability for specific use cases where their features align well with the requirements of your code.

75. ### Explain the difference between undefined and not defined in JavaScript

In JavaScript, "undefined" and "not defined" are terms often used to describe different scenarios related to variables and identifiers, but they have distinct meanings:

**1. Undefined:**
- **Type:** `undefined` is a special value and data type in JavaScript that indicates the absence of a value.
- **Situation:** A variable is considered `undefined` when it has been declared but has not been assigned a value.

Example:
```javascript
let x;
console.log(x); // Output: undefined
```

- **Returned by:** Functions that do not explicitly return a value will return `undefined`.

Example:
```javascript
function doSomething() {
  // no return statement
}

const result = doSomething();
console.log(result); // Output: undefined
```

**2. Not Defined:**
- **Situation:** The term "not defined" is used when trying to access a variable or identifier that has not been declared or is not in scope. This results in a ReferenceError, indicating that the identifier is not recognized by the JavaScript engine.

Example:
```javascript
console.log(y); // ReferenceError: y is not defined
```

- **Scope:** A variable or identifier can be "not defined" if it is outside of the current scope, such as attempting to access a local variable from outside its function.

Example:
```javascript
function myFunction() {
  const localVar = 42;
}

console.log(localVar); // ReferenceError: localVar is not defined
```

In summary:
- "Undefined" refers to the absence of a value assigned to a declared variable or a function that does not return a value.
- "Not defined" refers to attempting to access an identifier (variable, function, object property) that has not been declared or is not in scope, resulting in a ReferenceError.

It's important to understand the distinction between these terms to effectively debug and write correct JavaScript code.

76. ### What are the advantages and disadvantages of using use strict?

The `"use strict"` directive is a feature introduced in ECMAScript 5 (ES5) that enables strict mode in JavaScript. When `"use strict"` is included at the beginning of a script or a function, it enforces a stricter set of rules and error-checking during code execution. Here are the advantages and disadvantages of using strict mode:

**Advantages:**

1. **Error Prevention:** Strict mode helps catch common coding mistakes and "silent" errors that might otherwise go unnoticed, by converting them into explicit errors. This can lead to more robust and reliable code.

2. **Improved Performance:** In some cases, strict mode can lead to slightly improved performance because it allows the JavaScript engine to perform certain optimizations that are not possible in non-strict mode.

3. **Avoids Ambiguity:** In non-strict mode, certain JavaScript behaviors can be ambiguous or non-intuitive. Strict mode helps eliminate these ambiguities, making code behavior more predictable.

4. **Enhanced Security:** Strict mode prevents the use of certain potentially unsafe features or practices, reducing the risk of security vulnerabilities in your code.

5. **Future-Proofing:** As JavaScript evolves, new features and syntax may introduce conflicts with existing code. Strict mode can help identify and prevent issues that may arise due to changes in the language.

**Disadvantages:**

1. **Compatibility:** While strict mode is supported by all modern browsers and JavaScript engines, it may not work in very old browsers. However, the impact of this is becoming less significant as older browsers are phased out.

2. **Learning Curve:** Strict mode enforces stricter rules, which might require developers to adjust their coding practices and habits. This could introduce a learning curve for those new to JavaScript.

3. **Breaking Existing Code:** Enabling strict mode in an existing codebase might lead to unexpected errors if the code relies on behaviors that are considered invalid in strict mode.

4. **Not a Silver Bullet:** While strict mode helps catch certain classes of errors, it does not guarantee a bug-free program. It's still important to follow best practices and conduct thorough testing.

5. **Verbose Code:** In strict mode, some constructs that are allowed in non-strict mode may require additional code or modifications to comply with the stricter rules.

In general, the benefits of using strict mode in JavaScript, such as improved code quality, error prevention, and enhanced security, outweigh the potential downsides. It's recommended to use strict mode in your JavaScript code to create more reliable and maintainable applications. When transitioning existing code to strict mode, careful testing and validation are important to ensure that the code continues to function as expected.

77. ###  What is Currying?

Currying is a functional programming technique in which a function that takes multiple arguments is transformed into a series of functions that take one argument each. The currying process allows you to partially apply a function by fixing one or more arguments, creating new functions that are specialized versions of the original function.

```js

//normal function
function add(x,y,z){
    return x + y + z
}

let result = add(1,2,4)
console.log(result)


//currying
function add1(x){
    return function(y){
        return function(z){
            return x + y + z
        }
    }
}

const result1 = add1(1)(2)(4)
console.log(result1)

```

78. ### What are the differences between ES6 class and ES5 function constructors?

ES6 classes and ES5 function constructors are both mechanisms in JavaScript for creating objects and implementing object-oriented programming concepts, but they have some key differences in terms of syntax, behavior, and features. Here's a comparison of ES6 classes and ES5 function constructors:

**ES6 Classes:**

1. **Syntax:**
   ES6 classes introduce a more intuitive and concise syntax for defining classes and creating objects.

   ```javascript
   class Person {
     constructor(name, age) {
       this.name = name;
       this.age = age;
     }
     
     sayHello() {
       console.log(`Hello, my name is ${this.name}`);
     }
   }

   const person = new Person('Alice', 30);
   person.sayHello(); // Output: Hello, my name is Alice
   ```

2. **Inheritance:**
   ES6 classes support easier inheritance through the `extends` keyword, allowing you to create subclasses.

   ```javascript
   class Student extends Person {
     constructor(name, age, studentId) {
       super(name, age);
       this.studentId = studentId;
     }
   }
   ```

3. **Encapsulation:**
   ES6 classes provide built-in support for encapsulation through the use of public and private instance fields.

   ```javascript
   class Person {
     #privateField = 'private value';
     
     constructor(name) {
       this.name = name;
     }
   }
   ```

4. **Constructor and Methods:**
   ES6 classes have a special `constructor` method for initializing instances. Other methods are defined directly within the class body.

5. **Prototype Chain:**
   ES6 classes still utilize the prototype chain for inheritance, but the syntax abstracts away some of the details.

**ES5 Function Constructors:**

1. **Syntax:**
   ES5 uses function constructors to create objects, which can be less intuitive and more verbose.

   ```javascript
   function Person(name, age) {
     this.name = name;
     this.age = age;
   }

   var person = new Person('Alice', 30);
   ```

2. **Inheritance:**
   Inheritance is achieved by setting the prototype of a constructor function using the `prototype` property.

   ```javascript
   function Student(name, age, studentId) {
     Person.call(this, name, age);
     this.studentId = studentId;
   }

   Student.prototype = Object.create(Person.prototype);
   Student.prototype.constructor = Student;
   ```

3. **Encapsulation:**
   ES5 doesn't natively support encapsulation, but conventions like naming conventions are used to indicate privacy.

4. **Constructor and Prototype Methods:**
   The constructor function creates instances, and methods are added to the constructor's prototype.

5. **Prototype Chain:**
   ES5 uses the prototype chain for inheritance, and developers need to manage the prototype chain explicitly.

Overall, ES6 classes provide a more organized and concise way to define and work with objects in an object-oriented manner. They simplify inheritance, encapsulation, and method definition compared to ES5 function constructors, making the code easier to read and maintain. However, ES5 function constructors are still relevant and can be useful in scenarios where ES6 features are not available or practical.

### 79. Why should we use ES6 classes? 

ES6 (ECMAScript 2015) introduced the concept of classes in JavaScript, providing a more organized and intuitive way to create and work with objects, implement object-oriented programming (OOP) principles, and build more maintainable and readable code. Here are several reasons why you should consider using ES6 classes:

1. **Clearer Syntax:** ES6 classes provide a more straightforward and intuitive syntax for defining and creating objects. The class syntax closely resembles traditional OOP languages, making the code more readable and accessible to developers familiar with other programming languages.

2. **Constructor Initialization:** Classes have a built-in `constructor` method, making it easy to initialize object properties and set up instances when they are created.

3. **Inheritance:** ES6 classes support simple and straightforward inheritance through the `extends` keyword, enabling you to create subclasses that inherit properties and methods from parent classes.

4. **Encapsulation:** With the introduction of private fields (designated with a `#` prefix), ES6 classes provide a degree of encapsulation, allowing you to hide internal implementation details and restrict direct access to certain properties.

5. **Methods Definition:** Class methods can be defined directly within the class body, making the code more organized and easier to understand.

6. **Prototype Chain Abstraction:** While classes still utilize the prototype chain for inheritance, the class syntax abstracts away some of the complexities, making inheritance and method lookup more intuitive.

7. **Readability and Maintainability:** ES6 classes lead to more organized and modular code, improving the overall readability and maintainability of your applications.

8. **Code Reusability:** The class structure encourages better code reusability by allowing you to create specialized classes that inherit and extend the behavior of parent classes.

9. **Constructor and Super Calls:** Classes provide a built-in mechanism (`super`) to call the constructor and methods of the parent class, facilitating easier extension and overriding.

10. **Compatibility and Modern Practices:** ES6 classes are now widely supported in modern JavaScript environments, making them a recommended choice for structuring code and following modern programming practices.

While ES6 classes offer numerous benefits, it's important to note that they are just one tool in JavaScript's toolbox. Depending on the project's needs and the development team's familiarity with different paradigms, other patterns like constructor functions, factory functions, or functional programming techniques may also be appropriate. Ultimately, the decision to use ES6 classes depends on factors such as the project's requirements, team preferences, and the desired level of organization and structure in the codebase.

80. ### Explain the difference between Object.freeze() vs const

`Object.freeze()` and `const` are two distinct concepts in JavaScript that serve different purposes for immutability and variable declaration. Let's explore the differences between them:

**`Object.freeze()`:**

`Object.freeze()` is a method in JavaScript that is used to make an object immutable. When you freeze an object, you prevent any modifications to its properties, including adding, updating, or deleting properties. This applies to both the object's own properties and its nested objects. However, `Object.freeze()` does not make nested objects immutable; it only prevents modifications to the object's reference.

```javascript
const person = {
  name: 'Alice',
  age: 30
};

Object.freeze(person);

person.age = 31; // This assignment is ignored in strict mode
console.log(person.age); // Output: 30
```

In the example above, the `person` object is frozen using `Object.freeze()`. Any attempt to modify the object's properties after freezing will have no effect.

**`const`:**

`const` is a keyword in JavaScript used for variable declaration. It creates a variable with a constant reference to a value. When you declare a variable with `const`, you cannot reassign the variable to a new value, but it does not make the value itself immutable. This means that while you cannot change the reference of the `const` variable, you can still modify the properties of the object it references.

```javascript
const person = {
  name: 'Alice',
  age: 30
};

person.age = 31; // This modification is allowed
console.log(person.age); // Output: 31
```

In this example, the `person` object is assigned to a `const` variable. While you cannot reassign `person` to a new object, you can still modify the properties of the existing object.

**Summary:**

- `Object.freeze()` makes an object and its properties immutable, preventing modifications to the object's properties.
- `const` creates a variable with a constant reference to a value, preventing reassignment of the variable but not preventing modifications to the properties of the referenced object.

It's worth noting that while `Object.freeze()` provides a higher level of immutability for objects, it may have performance implications and is often used when strict immutability is required. On the other hand, `const` provides a basic level of protection against variable reassignment but doesn't provide the same level of immutability as `Object.freeze()`.

81. ### How to compare two objects in JavaScript?  

Comparing two objects in JavaScript is not as straightforward as comparing primitive values like strings or numbers, as objects are reference types. When you compare two objects using the equality operators (`==` and `===`), they are considered equal only if they reference the same memory location. However, you might want to compare objects based on their content, rather than their references. Here are some approaches to compare objects in JavaScript:

**1. Comparing JSON Serialization:**
You can compare two objects by serializing them to JSON strings and then comparing the JSON strings. This approach works well for simple objects without functions or circular references.

```javascript
function areObjectsEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

const obj1 = { name: 'Alice', age: 30 };
const obj2 = { age: 30, name: 'Alice' };

console.log(areObjectsEqual(obj1, obj2)); // Output: true
```

Keep in mind that this approach has limitations. It may not handle more complex objects with circular references or functions.

**2. Using a Deep Equality Library:**
There are libraries like Lodash or Ramda that provide utility functions for deep equality comparison of objects. These libraries handle more complex cases and can perform deep comparisons of object properties.

```javascript
const _ = require('lodash');

const obj1 = { name: 'Alice', age: 30 };
const obj2 = { age: 30, name: 'Alice' };

console.log(_.isEqual(obj1, obj2)); // Output: true
```

**3. Writing Your Own Deep Comparison Function:**
You can write your own recursive function to perform a deep comparison of objects. This approach gives you more control over the comparison process and allows you to handle specific cases as needed.

```javascript
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }

  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

const obj1 = { name: 'Alice', age: 30 };
const obj2 = { age: 30, name: 'Alice' };

console.log(deepEqual(obj1, obj2)); // Output: true
```

When implementing your own deep comparison function, consider edge cases such as circular references and object prototype properties.

**Note:** When comparing objects, it's important to carefully consider the requirements of your comparison. Different approaches have different trade-offs and may handle certain cases better than others. The choice of approach depends on the complexity of your objects and the level of accuracy you need in the comparison.

82. ### What is a closure, and how/why would you use one?

A closure is a fundamental concept in JavaScript that refers to the combination of a function and the lexical environment within which that function was declared. In simpler terms, a closure allows a function to "remember" the variables, functions, and other identifiers from its outer scope even after that outer scope has finished executing.

A closure is created whenever a function is defined within another function, and the inner function retains access to the outer function's variables and parameters, even after the outer function has completed execution.

Here's an example to illustrate closures:

```javascript
function outerFunction(x) {
  // Inner function defined within the outer function
  function innerFunction(y) {
    return x + y;
  }
  
  return innerFunction; // Return the inner function
}

const closureExample = outerFunction(10); // Creates a closure
console.log(closureExample(5)); // Output: 15 (10 + 5)
```

In this example, `outerFunction` creates an inner function `innerFunction`. When `outerFunction` is invoked with an argument of `10`, it returns `innerFunction`, which still has access to the `x` parameter even after `outerFunction` has completed. Subsequently, when `closureExample(5)` is called, it adds `5` to the remembered value of `x`, resulting in `15`.

Closures have several use cases and benefits:

1. **Data Encapsulation:** Closures provide a way to achieve encapsulation, where variables are not accessible from the outside scope. This helps in preventing unintended modification of variables and maintaining better control over data.

2. **Private Variables and Functions:** Closures enable the creation of private variables and functions that are not accessible from the global scope. This is commonly used for creating modules, libraries, and maintaining clean and organized code.

3. **Callbacks and Event Handlers:** Closures are often used in asynchronous programming, such as callbacks and event handlers. They allow you to capture the current state or context and use it when the asynchronous operation completes.

4. **Partial Application and Currying:** Closures are essential for techniques like partial application and currying, which involve creating new functions by fixing some of the arguments of an existing function.

5. **Memoization and Optimization:** Closures can be used for memoization, which involves caching the results of expensive function calls to improve performance by avoiding redundant calculations.

6. **Iterators and Generators:** Closures are used to maintain the state of iterators and generators, allowing them to yield values and resume execution from where they left off.

7. **Emulating Private Variables:** Closures can be used to create emulated private variables and encapsulation in object-oriented programming patterns.

Closures provide powerful capabilities in JavaScript, allowing developers to create more flexible, modular, and efficient code. Understanding closures is crucial for mastering advanced JavaScript concepts and writing clean and maintainable code.

83. ### Does JavaScript pass by references or pass by values?

JavaScript uses a mechanism that is often referred to as "pass by value" when it comes to passing arguments to functions. However, it's important to understand that the way this mechanism works can lead to confusion due to the presence of reference types.

Here's a breakdown of the concept:

**Primitive Types (Pass by Value):**
When you pass a primitive value (like a number, string, boolean, null, or undefined) to a function, a copy of that value is created and passed to the function. Any changes made to the parameter inside the function do not affect the original value outside the function.

```javascript
function modifyPrimitive(value) {
  value = 42; // This doesn't affect the original value
}

let x = 10;
modifyPrimitive(x);
console.log(x); // Output: 10 (unchanged)
```

**Reference Types (Pass by Value of Reference):**
When you pass a reference type (like an object or an array) to a function, a copy of the reference to the object is passed, not a copy of the actual object. This means that changes made to the object's properties or elements inside the function will affect the original object.

```javascript
function modifyObject(obj) {
  obj.prop = 'modified'; // This modifies the original object
}

let person = { name: 'Alice' };
modifyObject(person);
console.log(person.name); // Output: 'modified'
```

So, while the values themselves are copied (making it seem like pass by value), the values that are copied are references to objects (reference types). This leads to the behavior that's often described as "pass by value of reference."

In summary, JavaScript uses a "pass by value" mechanism for both primitive types and reference types. For primitives, a copy of the value is passed, and changes do not affect the original. For reference types, a copy of the reference (address) is passed, and changes to the referenced object's properties do affect the original object. This distinction is important to understand when working with functions that modify their arguments.

84. ### Can you give an example of a curry function and why this syntax offers an advantage?

A curried function is a function that takes multiple arguments one at a time and returns a series of partially applied functions, each taking one argument. Currying is a technique in functional programming that allows for more modular and flexible function composition.

```js
function curryFunction(x){
    return function (y){
        return function (z){
            return x + y + z
        }
    }
}

let result = curryFunction(2)(3)(4)
console.log(result)

```

Currying offers an advantage in creating more modular, reusable, and readable code, especially in functional programming contexts. It enables you to build complex behaviors by composing simpler functions, leading to more maintainable and expressive code.

85. ### In JavaScript, why is the this operator inconsistent?

The behavior of the `this` keyword in JavaScript can sometimes seem inconsistent or confusing due to the way it is determined at runtime and how it is affected by different execution contexts. The perceived inconsistency arises from the fact that the value of `this` depends on how a function is called and where it is defined. Here are some factors that contribute to the perceived inconsistency of the `this` keyword:

1. **Function Invocation Context:**
   The value of `this` depends on how a function is invoked. It can be influenced by whether the function is called as a method of an object, as a standalone function, using `apply()` or `call()`, or through event handlers.

2. **Global Object:**
   In the global scope (outside of any function), `this` refers to the global object (`window` in browsers, or `global` in Node.js). This can lead to unexpected behavior if you're not aware of it.

3. **Arrow Functions:**
   Arrow functions have a lexical `this`, meaning they capture the value of `this` from their surrounding context when they are defined, rather than when they are called. This can lead to different behavior compared to regular functions.

4. **Methods vs. Functions:**
   When a function is used as a method of an object, `this` refers to the object itself. However, when a function is called as a standalone function, `this` may not refer to any specific object.

5. **Callbacks and Event Handlers:**
   In callback functions and event handlers, the value of `this` can change based on the context in which the callback is invoked.

To mitigate the perceived inconsistency and manage the behavior of `this`, developers often use techniques like:

- Storing `this` in a variable (`self`, `that`, etc.) to ensure its value is preserved in nested functions or callbacks.
- Using `.bind()` to explicitly set the value of `this` for a function.
- Using arrow functions to capture the lexical `this` from the surrounding context.

Here's an example that illustrates some of these concepts:

```javascript
const obj = {
  name: 'Alice',
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

const greetFunction = obj.greet; // Standalone function
greetFunction(); // Output: "Hello, my name is undefined" or error (depends on strict mode)

const boundGreet = obj.greet.bind(obj);
boundGreet(); // Output: "Hello, my name is Alice"

const arrowGreet = () => {
  console.log(`Hello, my name is ${this.name}`);
};
arrowGreet.call(obj); // Output: "Hello, my name is undefined" (lexical this)

document.querySelector('button').addEventListener('click', obj.greet);
// In this context, this refers to the button element
```

To work with the `this` keyword effectively, it's crucial to understand its behavior in different situations and apply appropriate techniques to ensure consistent and expected outcomes.

86. ### How to deep-freeze object in JavaScript?

Apologies for the confusion earlier. It appears I provided the same information again. Let me provide a more concise and correct explanation of how to deep-freeze an object in JavaScript:

To deep-freeze an object in JavaScript, you can use a combination of `Object.freeze()` and recursion to freeze all properties of the object, including nested objects. Here's a correct implementation of deep-freezing:

```javascript
function deepFreeze(obj) {
  if (obj === null || typeof obj !== 'object' || Object.isFrozen(obj)) {
    return obj;
  }

  Object.freeze(obj);

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      deepFreeze(obj[key]);
    }
  }

  return obj;
}

const myObject = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4],
  },
};

const frozenObject = deepFreeze(myObject);
```

In this example, the `deepFreeze` function recursively freezes the properties of the given object, including nested objects. The function checks if the object is already frozen or not an object (e.g., primitive values or null) and returns the original object in those cases. Otherwise, it freezes the current object using `Object.freeze()` and iterates over its properties, recursively calling `deepFreeze` on each property.

After deep-freezing, attempting to modify any property of the `frozenObject` or its nested objects will have no effect, making the entire object and its sub-objects immutable.

87. ### Compare Async/Await and Generators usage to achive same functionality

Both `async/await` and generators (`function*` and `yield`) are mechanisms in JavaScript that deal with asynchronous code and can be used to achieve similar functionality. They both provide a way to write more readable and sequential-looking asynchronous code. However, they have some differences in terms of syntax and behavior. Let's compare their usage to achieve the same functionality.

**Using `async/await`:**

`async/await` is a modern asynchronous programming feature introduced in ES2017 (ES8). It allows you to write asynchronous code in a synchronous-looking manner, making it easier to reason about the flow of the code.

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

(async () => {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error('An error occurred:', error);
  }
})();
```

**Using Generators (`function*` and `yield`):**

Generators are functions that can be paused and resumed, allowing you to write asynchronous code that looks more synchronous by using the `yield` keyword. When combined with a library like `co` or manually handling iteration, you can achieve similar functionality as `async/await`.

```javascript
function* fetchData() {
  try {
    const response = yield fetch('https://api.example.com/data');
    const data = yield response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

function run(generator) {
  const iterator = generator();

  function handle(result) {
    if (result.done) return Promise.resolve(result.value);
    return Promise.resolve(result.value)
      .then(res => handle(iterator.next(res)))
      .catch(err => handle(iterator.throw(err)));
  }

  return handle(iterator.next());
}

run(function* () {
  try {
    const result = yield* fetchData();
    console.log(result);
  } catch (error) {
    console.error('An error occurred:', error);
  }
});
```

**Comparison:**

1. **Readability:** `async/await` syntax tends to be more intuitive and easier to read, as it resembles synchronous code. Generators with `yield` statements can be a bit more complex, especially when manually handling iteration.

2. **Error Handling:** Both mechanisms allow error handling using `try/catch` blocks. However, the error handling mechanism for generators can be a bit more involved when manually handling iteration.

3. **Compatibility:** `async/await` is widely supported in modern JavaScript environments. Generators are also well-supported, but their use can be less common and might require additional libraries for better integration.

4. **Ecosystem:** `async/await` has become the standard for writing asynchronous code in modern JavaScript, and many libraries and frameworks are designed with `async/await` in mind. Generators are still used in some scenarios, but they are less prevalent.

In most cases, `async/await` is the preferred and more straightforward approach for writing asynchronous code due to its improved readability and widespread adoption. However, understanding generators can still be useful, especially when working with existing codebases or libraries that use them.

88. ### What is the difference between the await keyword and the yield keyword?

Both the `await` and `yield` keywords are used in JavaScript to handle asynchronous operations and create functions that can pause and resume their execution. However, they are used in different contexts and have distinct behaviors:

**`await` Keyword:**

The `await` keyword is used within an `async` function to pause the execution of the function until a Promise is resolved. It can only be used inside `async` functions, which are special functions that allow asynchronous behavior to be written in a synchronous-looking manner. When `await` is used, it "waits" for the Promise to resolve and then returns the resolved value.

Example using `await`:

```javascript
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error('An error occurred:', error);
  }
})();
```

**`yield` Keyword:**

The `yield` keyword is used within a generator function (`function*`) to pause the function's execution and yield a value back to the caller. When the generator is iterated over using a loop or a library like `co`, it can be paused and resumed, allowing for more fine-grained control over asynchronous operations.

Example using `yield`:

```javascript
function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
}

const iterator = generateNumbers();

console.log(iterator.next().value); // Output: 1
console.log(iterator.next().value); // Output: 2
console.log(iterator.next().value); // Output: 3
```

**Comparison:**

1. **Usage Context:**
   - `await` is used inside `async` functions to pause and resume execution while waiting for a Promise to resolve.
   - `yield` is used inside generator functions (`function*`) to pause and resume execution, yielding values back to the caller.

2. **Function Type:**
   - `await` is used in `async` functions, which are designed for handling asynchronous operations.
   - `yield` is used in generator functions, which are more versatile and can be used for various purposes, including asynchronous operations.

3. **Return Value:**
   - `await` returns the resolved value of a Promise when it's resolved.
   - `yield` returns the yielded value to the caller when the generator is iterated.

4. **Iteration:**
   - `await` does not involve iteration; it's used to wait for a single asynchronous operation to complete.
   - `yield` is used for controlled iteration over a series of values, allowing the generator to pause and resume at each `yield` statement.

In summary, `await` is primarily used for handling asynchronous operations inside `async` functions, while `yield` is used in generator functions to control iteration and provide a way to pause and resume execution. Both keywords contribute to writing more readable and manageable asynchronous code.

89. ### What's the difference between ES6 Map and WeakMap?

`Map` and `WeakMap` are both data structures introduced in ECMAScript 6 (ES6) for storing key-value pairs. While they share some similarities, they have distinct differences in terms of usage, behavior, and memory management. Here's a comparison of `Map` and `WeakMap`:

**ES6 Map:**

1. **Key Types:** `Map` allows you to use any type of value as a key, including primitive types, objects, and functions.
2. **Memory Management:** `Map` holds strong references to both keys and values. This means that if a key is an object, the reference to the object is maintained, preventing it from being garbage collected as long as the `Map` exists.
3. **Garbage Collection:** If an object used as a key in a `Map` is no longer reachable from other parts of the program, it will still be held in memory by the `Map`.

**ES6 WeakMap:**

1. **Key Types:** `WeakMap` only allows objects as keys. Attempting to use non-object keys will result in a `TypeError`.
2. **Memory Management:** `WeakMap` holds weak references to keys. This means that if an object used as a key is no longer reachable from other parts of the program, it can be garbage collected even if it's still in the `WeakMap`.
3. **Garbage Collection:** If an object used as a key in a `WeakMap` is no longer referenced elsewhere, it can be garbage collected, and the corresponding entry in the `WeakMap` will automatically be removed.

**Use Cases:**

- **Map:** `Map` is suitable for scenarios where you want to associate data with specific keys and you need to maintain those associations throughout the lifetime of the `Map`. It's useful when you need to store key-value pairs and retain strong references to both keys and values.

- **WeakMap:** `WeakMap` is useful when you want to associate data with objects but you don't want to prevent those objects from being garbage collected. It's often used in situations where you need to attach additional data to existing objects without affecting their memory management.

**Example:**

```javascript
// Using Map
const myMap = new Map();
const keyObj = {};
myMap.set(keyObj, 'value');
console.log(myMap.get(keyObj)); // Output: 'value'

// Using WeakMap
const myWeakMap = new WeakMap();
const keyObj = {};
myWeakMap.set(keyObj, 'value');
console.log(myWeakMap.get(keyObj)); // Output: 'value'

// After the key object is no longer referenced
keyObj = null; // The WeakMap entry can be garbage collected
```

In summary, the main difference between `Map` and `WeakMap` lies in their memory management and behavior when it comes to garbage collection. Use `Map` when you need to maintain strong references to keys and values, and use `WeakMap` when you want to associate data with objects without preventing those objects from being garbage collected.

90. ### How would you prevent Callback Hell without using promises, async or generators?

Callback Hell, also known as the "Pyramid of Doom," occurs when you have deeply nested callback functions in your code, making it difficult to read and maintain. While promises, `async/await`, and generators are modern solutions to address this issue, you can still improve code readability and manage callback hell by using named functions, modularization, and control flow libraries. Here's how you can do it without using promises, `async/await`, or generators:

1. **Named Functions:**
   Define your callback functions as named functions rather than anonymous functions. This helps in providing better clarity and makes the code more readable.

```javascript
function step1(data, callback) {
  // ...
  callback(result);
}

function step2(data, callback) {
  // ...
  callback(result);
}

function step3(data, callback) {
  // ...
  callback(result);
}

step1(data, function(result1) {
  step2(result1, function(result2) {
    step3(result2, function(result3) {
      // ...
    });
  });
});
```

2. **Modularization:**
   Break down your code into smaller, more manageable functions. Modularizing your code reduces nesting and makes it easier to reason about the program's flow.

```javascript
function step1(data, callback) {
  // ...
  callback(result);
}

function step2(data, callback) {
  // ...
  callback(result);
}

function step3(data, callback) {
  // ...
  callback(result);
}

function runSteps(data) {
  step1(data, function(result1) {
    step2(result1, function(result2) {
      step3(result2, function(result3) {
        // ...
      });
    });
  });
}

runSteps(data);
```

3. **Control Flow Libraries:**
   Use control flow libraries like "async" or "callbacks" to manage the flow of asynchronous operations without getting caught in callback hell.

Example using the "async" library:

```javascript
const async = require('async');

async.series([
  function(callback) {
    step1(data, callback);
  },
  function(callback) {
    step2(callback);
  },
  function(callback) {
    step3(callback);
  }
], function(err, results) {
  if (err) {
    console.error('Error:', err);
    return;
  }
  // Process results
});
```

While these techniques can help mitigate callback hell, it's important to note that promises and `async/await` were introduced precisely to address the complexities associated with deeply nested callbacks. Using these modern features not only improves code readability but also provides more powerful error handling, improved composability, and better control over asynchronous flow. If possible, consider adopting promises, `async/await`, or generators to further enhance your code's maintainability and efficiency.

91. ### When would you use import * as X from 'X' ?

The `import * as X from 'X'` syntax in JavaScript is used to import all exports from a module named `'X'` and namespace them under the variable `X`. This allows you to access the exported values of the module through the `X` object. This pattern is often used when you want to group multiple exports from a module together and avoid naming conflicts.

Here's an example to illustrate the usage of `import * as`:

Suppose you have a module named `math.js` with the following exports:

```javascript
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
```

You can import all the exports from `math.js` using the `import * as` syntax:

```javascript
import * as math from './math';

console.log(math.add(3, 4));       // Output: 7
console.log(math.subtract(10, 5)); // Output: 5
console.log(math.multiply(2, 6));  // Output: 12
```

Here are some situations where using `import * as` could be beneficial:

1. **Namespace Grouping:** When you have a module with multiple related exports, using `import * as` helps group them under a single namespace, making the code more organized and reducing the risk of naming conflicts.

2. **Third-Party Libraries:** When working with third-party libraries that export a collection of functions, classes, or constants, using `import * as` can help you access and use the library's features without polluting your global namespace.

3. **Code Readability:** If you find that importing individual exports from a module using separate `import` statements makes your code less readable or harder to manage, using `import * as` can provide a cleaner and more compact syntax.

However, it's important to be mindful of potential downsides:

- **Potential Overhead:** Importing all exports from a module, especially if it contains a large number of exports, may introduce unnecessary overhead if you only need a subset of those exports.

- **Lack of Tree Shaking:** Using `import * as` may hinder tree shaking, a process where unused exports are eliminated during the bundling process. This could result in including unused code in your final bundle.

- **Namespace Clutter:** While namespaces can help prevent naming conflicts, overusing them can lead to namespace clutter and make your code less intuitive.

In summary, `import * as X from 'X'` is useful when you want to group related exports from a module under a namespace. It can improve code organization and readability, especially when dealing with modules that export multiple functions, classes, or constants. However, consider the potential downsides and make sure it aligns with your code organization and optimization goals.

92. ### Does JavaScript have a map function to iterate over an object properties?

JavaScript does not have a built-in `map` function specifically designed to iterate over an object's properties like it does for arrays. However, you can achieve similar functionality by using various techniques.

One common approach is to use a combination of `Object.keys()`, `map()`, and a new object to achieve the desired result:

```javascript
const originalObj = { a: 1, b: 2, c: 3 };

const newObj = {};
Object.keys(originalObj).map(key => {
  newObj[key] = originalObj[key] * 2;
});

console.log(newObj); // Output: { a: 2, b: 4, c: 6 }
```

Alternatively, you can use a `for...in` loop to iterate over the object's properties and create a new object:

```javascript
const originalObj = { a: 1, b: 2, c: 3 };

const newObj = {};
for (const key in originalObj) {
  if (originalObj.hasOwnProperty(key)) {
    newObj[key] = originalObj[key] * 2;
  }
}

console.log(newObj); // Output: { a: 2, b: 4, c: 6 }
```

While these approaches achieve similar results to `map` for arrays, it's important to note that they don't offer the same level of abstraction and functional programming concepts as `map` for arrays. Additionally, when working with objects, you'll need to consider factors like prototype chain traversal and property enumerability.

If you're looking for a more functional programming style and want to work with object properties in a similar way to arrays, you might consider converting the object to an array of key-value pairs using `Object.entries()` and then using `map`:

```javascript
const originalObj = { a: 1, b: 2, c: 3 };

const newArray = Object.entries(originalObj).map(([key, value]) => [key, value * 2]);

const newObj = Object.fromEntries(newArray);
console.log(newObj); // Output: { a: 2, b: 4, c: 6 }
```

While JavaScript's native features allow you to iterate over object properties and achieve the desired outcome, using libraries like lodash or Ramda can provide more comprehensive utilities for working with objects in a functional programming style.

93. ### What tools can be used to assure consistent code style?

There are several tools available to help ensure consistent code style in your JavaScript projects. These tools can automatically format your code, catch potential issues, and enforce coding standards. Here are some popular tools for maintaining consistent code style:

1. **ESLint:** ESLint is a highly configurable linting tool that identifies and reports patterns in your code that don't follow the specified guidelines. It can be configured to enforce various coding standards and can catch both stylistic issues and potential bugs.

2. **Prettier:** Prettier is a code formatter that enforces a consistent code style by automatically formatting your code according to predefined rules. It supports multiple programming languages, including JavaScript, and can be integrated with other tools like ESLint.

3. **EditorConfig:** EditorConfig helps maintain consistent coding styles across different editors and IDEs by defining and maintaining consistent rules for indentation, line endings, and more.

4. **lint-staged:** lint-staged is a tool that allows you to run linters on pre-committed files. It's often used in conjunction with Git hooks to ensure that only properly formatted and linted code is committed.

5. **Husky:** Husky is a tool that allows you to set up Git hooks easily, enabling you to run commands (such as code formatting or linting) before certain Git actions, like committing or pushing code.

6. **GitHub Actions / GitLab CI / Travis CI:** Continuous Integration (CI) tools can be configured to run linting and formatting checks automatically on every pull request or push, helping to catch code style issues early.

7. **Code Reviews:** While not a tool in the traditional sense, performing code reviews with guidelines for code style can help catch inconsistencies and educate team members about the preferred style.

8. **Style Guides:** Official style guides, such as Airbnb's JavaScript Style Guide or Google's JavaScript Style Guide, provide detailed recommendations for coding standards and conventions.

9. **IDE/Editor Extensions:** Many integrated development environments (IDEs) and code editors offer extensions or plugins that integrate with tools like ESLint and Prettier to provide real-time code linting and formatting.

By using a combination of these tools and practices, you can establish and maintain a consistent code style across your JavaScript projects. It's important to tailor your toolset to your project's needs and collaborate with your team to ensure everyone follows the agreed-upon coding standards.

94. ###  Could you compare usage of Module Pattern vs Constructor/Prototype pattern?

The Module Pattern and the Constructor/Prototype Pattern are two different approaches for organizing and structuring JavaScript code. Each pattern has its own advantages and use cases. Let's compare their usage:

**Module Pattern:**

The Module Pattern is a design pattern that encapsulates related functions and variables within a single object, creating a "module." It provides a way to achieve encapsulation and information hiding by creating private and public members. The module's private members are not accessible from outside the module, while public members are exposed for use.

**Usage:**
- Use the Module Pattern when you want to create self-contained and reusable components with private and public members.
- It's well-suited for scenarios where you need to maintain encapsulation and avoid polluting the global namespace.

**Example:**
```javascript
const myModule = (function() {
  // Private members
  const privateVar = 'private';
  
  function privateFunction() {
    console.log('Private function');
  }
  
  // Public members
  return {
    publicVar: 'public',
    publicFunction: function() {
      console.log('Public function');
    }
  };
})();

console.log(myModule.publicVar);
myModule.publicFunction();
```

**Constructor/Prototype Pattern:**

The Constructor/Prototype Pattern is a classic object-oriented design pattern in JavaScript. It involves creating constructor functions to define classes and prototypes to define methods and properties shared among instances. Each instance created with the constructor has its own state, and prototype methods are shared among instances, promoting memory efficiency.

**Usage:**
- Use the Constructor/Prototype Pattern when you want to create multiple instances of objects with shared methods.
- It's suitable for building classes and handling inheritance.

**Example:**
```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name}`);
};

const person1 = new Person('Alice');
const person2 = new Person('Bob');

person1.sayHello();
person2.sayHello();
```

**Comparison:**

- **Encapsulation:**
  - Module Pattern provides better encapsulation with private and public members.
  - Constructor/Prototype Pattern encapsulates instance state and behavior using constructor functions and prototypes.

- **Memory Efficiency:**
  - Constructor/Prototype Pattern is more memory-efficient when creating multiple instances, as prototype methods are shared.
  - Module Pattern may use more memory due to the creation of separate private and public members for each instance.

- **Inheritance:**
  - Constructor/Prototype Pattern supports inheritance through prototypes.
  - Module Pattern doesn't directly support inheritance.

- **Global Namespace Pollution:**
  - Module Pattern minimizes the risk of polluting the global namespace.
  - Constructor/Prototype Pattern may lead to global namespace pollution if not managed properly.

- **Complexity:**
  - Module Pattern is simpler for creating self-contained components.
  - Constructor/Prototype Pattern is suitable for more complex class hierarchies and shared methods.

Choose the pattern that best suits your specific use case and development goals. In modern JavaScript, ES6 classes and modules have become more prevalent, offering a cleaner syntax and combining features of both patterns.

95. ### Explain how JSONP works (and how it's not really Ajax)  

JSONP (JSON with Padding) is a technique used to overcome the same-origin policy limitations of XMLHttpRequest in web browsers. It allows you to make cross-origin requests for data in a way that resembles AJAX (Asynchronous JavaScript and XML) while working around the same-origin policy restrictions.

**How JSONP Works:**

1. **Callback Function:** The JSONP technique involves making a request to a remote server by dynamically creating a `<script>` element in the HTML document. This `<script>` element points to a URL on the remote server, including a query parameter with the name of a callback function.

2. **Server Response:** The server processes the request and wraps the response data in a function call to the specified callback function. The response data is typically in JSON format. The server returns the JavaScript code with the function call as a script.

3. **Execution:** The browser interprets the script response as regular JavaScript code and executes it. The callback function specified in the URL parameter is invoked, and the response data is passed as an argument to the callback.

**Example:**

Suppose you have a web page hosted on `www.example.com`, and you want to retrieve data from `api.example.com`. You can use JSONP to make a cross-origin request like this:

```html
<script>
function handleResponse(data) {
  console.log('Received data:', data);
}

const script = document.createElement('script');
script.src = 'https://api.example.com/data?callback=handleResponse';
document.body.appendChild(script);
</script>
```

On the server side (`api.example.com`), the response might look like:

```javascript
handleResponse({ key: 'value' });
```

**JSONP vs. AJAX:**

JSONP is not a true AJAX (XHR) technique, as it doesn't use XMLHttpRequest to fetch data. Instead, it uses the `<script>` element to include external data as a script. Here are some differences:

1. **Data Format:** JSONP returns data in the form of JavaScript code wrapped in a function call, whereas traditional AJAX typically retrieves data in JSON or XML format.

2. **Cross-Origin Requests:** JSONP is primarily used to make cross-origin requests by loading external scripts, while AJAX uses XMLHttpRequest or the Fetch API.

3. **Security Concerns:** JSONP is considered less secure than traditional AJAX because it exposes your page to potential security vulnerabilities, such as cross-site scripting (XSS) attacks.

4. **Error Handling:** Error handling with JSONP can be more challenging since errors are often handled by the browser as script errors. Traditional AJAX provides more standardized error handling.

5. **Same-Origin Policy:** JSONP bypasses the same-origin policy by dynamically creating a `<script>` tag, which is allowed to load external scripts from different origins.

Despite its limitations and security concerns, JSONP can still be useful for scenarios where you need to retrieve data from a different domain and have no other cross-origin capabilities available, such as CORS (Cross-Origin Resource Sharing) or a proxy server. However, modern web development practices often favor using CORS and Fetch or XMLHttpRequest for cross-origin requests due to their better security and error handling mechanisms.

96. ### What is the Temporal Dead Zone in ES6?

The Temporal Dead Zone (TDZ) is a concept in ECMAScript 6 (ES6) that refers to the period between the start of a scope (such as a block, function, or module) and the point at which a variable is declared with `let` or `const`. During this period, any attempt to access the variable will result in a runtime error.

In JavaScript, variables declared with `var` are hoisted to the top of their scope and can be accessed before they are formally declared. However, with the introduction of `let` and `const` in ES6, variables are still hoisted, but they enter the TDZ until they are declared. This means that while the variable exists in the scope, you cannot access or use it until it has been formally declared.

Example of Temporal Dead Zone:

```javascript
console.log(myVar); // ReferenceError: Cannot access 'myVar' before initialization

let myVar = 42;
```

In this example, the variable `myVar` is declared using `let`, but the attempt to access it before its declaration results in a ReferenceError. This is because the code tries to access the variable within the TDZ.

The Temporal Dead Zone exists to catch potential issues and make the behavior of variable declarations more predictable. It helps prevent accidental use of variables before they are initialized, which can lead to bugs that are difficult to debug.

To avoid the Temporal Dead Zone, it's recommended to always declare your variables at the beginning of their scope before attempting to use them. Additionally, be aware that `typeof` does not throw an error in the TDZ; it returns `'undefined'` for variables in the TDZ.

```javascript
console.log(typeof myVar); // "undefined"

let myVar = 42;
```

Understanding the Temporal Dead Zone is important for writing reliable and bug-free JavaScript code, especially when using `let` and `const` for variable declarations.

97. ### What's the difference between a variable that is: null, undefined or undeclared? How would you go about checking for any of these states?  

In JavaScript, `null`, `undefined`, and undeclared variables are related concepts, but they have distinct meanings and behaviors.

**1. Undeclared Variable:**
An undeclared variable is a variable that has been referenced in code without being declared using `var`, `let`, or `const`. When you try to access an undeclared variable, JavaScript will throw a `ReferenceError`.

Example:
```javascript
console.log(undeclaredVariable); // ReferenceError: undeclaredVariable is not defined
```

**2. Undefined:**
`undefined` is a special value that a declared variable can have. It represents a variable that has been declared but has not been assigned a value.

Example:
```javascript
let myVar;
console.log(myVar); // undefined
```

**3. Null:**
`null` is a value that represents the intentional absence of any object value. It's often used as a placeholder to indicate that a variable intentionally does not contain a value.

Example:
```javascript
let myVar = null;
console.log(myVar); // null
```

**Checking for These States:**

You can check for these states using different approaches:

1. **Undeclared Variable:**
   You can't directly check for an undeclared variable, as attempting to access it will result in a `ReferenceError`. To avoid this, make sure to always declare your variables before using them.

2. **Undefined:**
   To check if a variable is `undefined`, you can use a strict equality (`===`) comparison with the `undefined` value.

   Example:
   ```javascript
   if (typeof myVar === 'undefined') {
     console.log('myVar is undefined');
   }
   ```

3. **Null:**
   To check if a variable is `null`, you can use a strict equality (`===`) comparison with the `null` value.

   Example:
   ```javascript
   if (myVar === null) {
     console.log('myVar is null');
   }
   ```

It's important to note that using `===` for comparisons is recommended to avoid type coercion and ensure accurate checks.

In practice, you often want to handle both `null` and `undefined` in a similar way, treating them as "missing" or "empty" values. In such cases, you can use a loose equality (`==`) comparison, as `null` and `undefined` are considered equal under loose equality.

Example:
```javascript
if (myVar == null) {
  console.log('myVar is null or undefined');
}
```

Keep in mind that you should always strive for clear and consistent variable initialization and handling to prevent unexpected behavior in your code.

97. ### When should you NOT use arrow functions in ES6? Name three or more case

While arrow functions in ES6 offer concise and convenient syntax for many scenarios, there are certain cases where you should avoid using them. Here are three scenarios in which you might consider not using arrow functions:

1. **Method Definitions:**
   When defining methods within an object or class, it's generally better to use regular function expressions or methods to preserve the correct value of `this`. Arrow functions capture the `this` value from their surrounding context, which may not always be what you expect when dealing with object methods or class methods.

   Example:
   ```javascript
   const obj = {
     name: 'John',
     // Avoid using arrow functions for methods
     sayHello: () => {
       console.log(`Hello, ${this.name}`); // 'this' will not refer to obj
     }
   };
   ```

2. **Constructor Functions:**
   Arrow functions are not suitable for use as constructor functions. They do not have their own `this` context and cannot be used to create instances of objects.

   Example:
   ```javascript
   const Person = (name) => {
     this.name = name; // 'this' is not bound correctly
   };
   const person = new Person('John'); // Error: Person is not a constructor
   ```

3. **Event Handlers:**
   When using arrow functions as event handlers, they inherit the `this` value from their surrounding context, which may not be what you want. In event handlers, `this` typically refers to the DOM element that triggered the event. Using a regular function expression ensures that `this` refers to the correct context.

   Example:
   ```javascript
   const button = document.querySelector('button');
   
   // Avoid using arrow functions for event handlers
   button.addEventListener('click', () => {
     console.log(this); // 'this' will not refer to 'button'
   });
   ```

4. **Recursive Functions:**
   Arrow functions do not have their own named lexical `arguments` object, which can be problematic when writing recursive functions that rely on the `arguments` object.

   Example:
   ```javascript
   const factorial = (n) => {
     if (n === 0) {
       return 1;
     }
     return n * factorial(n - 1); // Will not work as expected
   };
   ```

5. **Prototypal Inheritance:**
   When creating constructor functions and prototypes for achieving prototypal inheritance, regular functions are recommended. Arrow functions do not have a `prototype` property, which is essential for setting up proper prototype chains.

It's important to consider the context and behavior of arrow functions before using them. While they offer concise syntax and lexical scoping, they're not a one-size-fits-all solution and may not be appropriate for every situation, especially those involving dynamic scoping (`this`) and specific language features.

98. ### What is Hoisting in JavaScript?  

Hoisting is a term used in JavaScript to describe the behavior of variable and function declarations being moved to the top of their containing scope during the compilation phase, before the code is actually executed. This might lead to a perceived inconsistency in the order of execution in your code.

Hoisting applies to two types of declarations: variable declarations and function declarations.

1. **Variable Hoisting:**
   When you declare a variable using the `var` keyword, the declaration is hoisted to the top of its containing function or global scope. However, the actual assignment (if any) remains in its original position. This means you can access the variable before it is declared without causing an error, but its value will be `undefined` until the assignment is reached.

   Example:
   ```javascript
   console.log(x); // Output: undefined
   var x = 5;
   ```

2. **Function Hoisting:**
   Function declarations are also hoisted to the top of their containing scope, including both the function name and its implementation. This means you can call the function before it's declared in the code.

   Example:
   ```javascript
   foo(); // Output: "Hello, world!"

   function foo() {
       console.log("Hello, world!");
   }
   ```

It's important to note that function expressions and variables declared with `let` or `const` are not hoisted in the same way. Function expressions are only hoisted in their containing scope, but they are not initialized until the line of code where the function expression is defined. Variables declared with `let` and `const` are hoisted as well, but they are not accessible before their declaration.

To avoid confusion and potential bugs, it's recommended to always declare your variables and functions before you use them in your code, regardless of hoisting behavior. This ensures a clearer understanding of your code's logic and prevents unexpected behavior.

99. ### Check if a given string is a isomorphic

Two strings are considered isomorphic if the characters in one string can be replaced by characters from another string in such a way that the two strings become identical. In other words, every occurrence of one character in the first string should be replaced with the same character in the second string, and vice versa.

Here's a JavaScript function that checks if two strings are isomorphic:

```javascript
function areStringsIsomorphic(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const map1 = new Map();
    const map2 = new Map();

    for (let i = 0; i < str1.length; i++) {
        const char1 = str1[i];
        const char2 = str2[i];

        if (!map1.has(char1)) {
            map1.set(char1, char2);
        } else if (map1.get(char1) !== char2) {
            return false;
        }

        if (!map2.has(char2)) {
            map2.set(char2, char1);
        } else if (map2.get(char2) !== char1) {
            return false;
        }
    }

    return true;
}

// Test cases
console.log(areStringsIsomorphic("egg", "add"));     // Output: true
console.log(areStringsIsomorphic("foo", "bar"));     // Output: false
console.log(areStringsIsomorphic("paper", "title")); // Output: true
```

In this function, we use two maps (`map1` and `map2`) to keep track of the character mappings between the two strings. We iterate through each character in both strings, and for each character:

1. If the character is not present in `map1`, we add a mapping from the character in `str1` to the character in `str2`.
2. If the character is present in `map1`, we check if the mapping is consistent. If not, the strings are not isomorphic.
3. We repeat the same process for `map2` but in reverse.

If we successfully iterate through both strings without encountering any inconsistencies in the character mappings, the function returns `true`, indicating that the strings are isomorphic. Otherwise, it returns `false`.

100. ### What's a typical use case for anonymous functions?

Anonymous functions, also known as lambda functions or function expressions, are functions that are defined without a name. They are often used in various programming languages, including JavaScript, for a variety of purposes. Here are some typical use cases for anonymous functions:

1. **Callback Functions:** Anonymous functions are frequently used as callback functions, which are functions passed as arguments to other functions. For example, in JavaScript's `Array.prototype.map()`, `Array.prototype.filter()`, and similar methods, you often provide a callback function to specify how each element should be transformed or filtered.

    ```javascript
    const numbers = [1, 2, 3, 4, 5];
    const squared = numbers.map(function(num) {
        return num * num;
    });
    ```

2. **Event Handlers:** When working with web development, you often attach event handlers to DOM elements. Anonymous functions can be used to define these event handlers inline.

    ```javascript
    document.getElementById("myButton").addEventListener("click", function() {
        alert("Button clicked!");
    });
    ```

3. **Immediately Invoked Function Expressions (IIFE):** Anonymous functions can be used to create IIFE, which are functions that are executed immediately after they are defined. This is often used to create a separate scope and avoid polluting the global namespace.

    ```javascript
    (function() {
        // Your code here
    })();
    ```

4. **Closures:** Anonymous functions are often used to create closures, which allow you to encapsulate and maintain state within a particular context. This is useful for creating functions that remember values even after they've gone out of scope.

    ```javascript
    function createCounter() {
        let count = 0;
        return function() {
            return ++count;
        };
    }
    const counter = createCounter();
    console.log(counter()); // Output: 1
    ```

5. **As Arguments for Higher-Order Functions:** Higher-order functions are functions that accept other functions as arguments or return functions. Anonymous functions are commonly passed as arguments to these higher-order functions.

    ```javascript
    const numbers = [1, 2, 3, 4, 5];
    const evenNumbers = numbers.filter(function(num) {
        return num % 2 === 0;
    });
    ```

6. **Dynamically Generated Functions:** Anonymous functions can be dynamically generated and used based on runtime conditions.

    ```javascript
    function operationFactory(operator) {
        return function(a, b) {
            if (operator === "add") {
                return a + b;
            } else if (operator === "subtract") {
                return a - b;
            }
            // Handle other cases
        };
    }
    const addFunc = operationFactory("add");
    console.log(addFunc(3, 4)); // Output: 7
    ```

These are just a few examples of how anonymous functions are commonly used in programming. They provide flexibility, encapsulation, and code organization, making them a valuable tool in many scenarios.

101. ### Suggest one simple way of removing duplicates from an array using ES6

One simple way to remove duplicates from an array using ES6 is to use the `Set` data structure. The `Set` only allows unique values, so by converting the array to a `Set` and then back to an array, you effectively remove any duplicate elements. Here's an example:

```javascript
const arrayWithDuplicates = [1, 2, 3, 2, 4, 3, 5];

const uniqueArray = [...new Set(arrayWithDuplicates)];

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
```

In this example, the `new Set(arrayWithDuplicates)` creates a `Set` containing the unique values from the original array. Then, the spread operator `...` is used to spread the elements of the `Set` into a new array, resulting in an array with duplicates removed.

102. ### What is generator in JS?

In JavaScript, a generator is a special type of function that can be paused and resumed, allowing you to control the flow of execution manually. It provides a way to write functions that can yield multiple values over time, rather than producing a single result and returning immediately.

Generators are defined using the `function*` syntax (note the asterisk), and they use the `yield` keyword to pause the execution and produce a value. When a generator function is called, it doesn't execute the entire function body immediately; instead, it returns an iterator called a generator object. You can then use this generator object to control the execution of the function.

Here's a simple example of a generator function:

```javascript
function* generateNumbers() {
    yield 1;
    yield 2;
    yield 3;
}

const iterator = generateNumbers();

console.log(iterator.next()); // Output: { value: 1, done: false }
console.log(iterator.next()); // Output: { value: 2, done: false }
console.log(iterator.next()); // Output: { value: 3, done: false }
console.log(iterator.next()); // Output: { value: undefined, done: true }
```

In this example, the `generateNumbers` generator function yields three values (`1`, `2`, and `3`). When you call `iterator.next()`, it resumes the execution of the generator until the next `yield` statement is encountered, at which point it returns an object with the yielded value and a `done` property indicating if the generator has completed.

Generators are especially useful for working with asynchronous code and managing asynchronous flows. They allow you to write asynchronous code in a more synchronous-like manner, making it easier to handle complex asynchronous operations such as fetching data from a server or processing streams of data.

Here's a simplified example of using a generator to simulate asynchronous behavior:

```javascript
function* asyncProcess() {
    const result1 = yield fetch('https://api.example.com/data/1');
    const result2 = yield fetch('https://api.example.com/data/2');
    return [result1, result2];
}

const iterator = asyncProcess();
const promise1 = iterator.next().value;
promise1.then(response1 => {
    const promise2 = iterator.next(response1).value;
    promise2.then(response2 => {
        const finalResult = iterator.next(response2).value;
        console.log(finalResult);
    });
});
```

While modern JavaScript includes more advanced asynchronous constructs like Promises and `async/await`, generators still have their unique use cases, particularly when dealing with complex asynchronous scenarios or custom control over the flow of execution.

103. ### What is the difference between document load event and document DOMContentLoaded even

Both the `load` event and the `DOMContentLoaded` event are events in JavaScript that are related to the loading and rendering of web pages, but they occur at different stages of the process.

1. **`load` Event:**
   The `load` event is fired when the entire web page, including its resources like images, stylesheets, scripts, and other external files, has finished loading. This means that the browser has fully loaded the page and all its dependencies.

   Example:
   ```javascript
   window.addEventListener('load', function() {
       // This code will run after the entire page has finished loading.
   });
   ```

   Use the `load` event when you need to ensure that all external resources have been downloaded and the page is fully rendered before executing your JavaScript. It's often used for actions that require the complete page, such as setting up event handlers for elements, manipulating the DOM, or making sure all images are loaded.

2. **`DOMContentLoaded` Event:**
   The `DOMContentLoaded` event is fired when the initial HTML document has been completely loaded and parsed, but external resources like images and stylesheets may still be loading. This means that the DOM structure is available and ready for manipulation, even if some images or styles are not fully loaded yet.

   Example:
   ```javascript
   document.addEventListener('DOMContentLoaded', function() {
       // This code will run as soon as the DOM is ready.
   });
   ```

   Use the `DOMContentLoaded` event when you want to interact with the DOM as soon as possible after it's ready, without waiting for external resources. This can help improve the perceived performance of your web page by allowing the user to interact with elements sooner.

In summary, the key difference between the two events is the point at which they are triggered during the loading process:

- `load` event: Fired when the entire web page and all resources have finished loading.
- `DOMContentLoaded` event: Fired when the initial HTML document has been parsed and the DOM is ready for manipulation, even if external resources are still loading.

104. ###  What's the difference between using let and var to declare a variable in ES6? 

In ES6 (ECMAScript 2015) and later versions of JavaScript, `let` and `var` are both used to declare variables, but they have some important differences in terms of scoping and behavior. Here are the main differences between `let` and `var`:

1. **Scope:**
   - `var` has function-level scope. It is accessible anywhere within the function where it is defined, regardless of block scopes (such as `if`, `for`, or `while` blocks).
   - `let` has block-level scope. It is only accessible within the block (curly braces) where it is defined.

2. **Hoisting:**
   - Variables declared with `var` are hoisted to the top of their containing function or global scope, which means you can use them before their declaration in code. However, the assignment is not hoisted, so the variable's value will be `undefined` until the assignment is reached.
   - Variables declared with `let` are also hoisted, but unlike `var`, they are not initialized until their declaration statement is reached. This is known as the "temporal dead zone," and trying to access the variable before its declaration will result in a reference error.

3. **Re-declaration:**
   - Variables declared with `var` can be re-declared within the same scope without generating an error. This can lead to accidental variable reassignment.
   - Variables declared with `let` cannot be re-declared within the same block scope.

4. **Global Object Property:**
   - Variables declared with `var` at the global scope become properties of the global object (e.g., `window` in browsers or `global` in Node.js).
   - Variables declared with `let` at the global scope do not become properties of the global object.

5. **For-loop Behavior:**
   - When used in a `for` loop's initialization section, `var` creates a single binding for the loop variable, which persists outside the loop.
   - When used in a `for` loop's initialization section, `let` creates a new binding for the loop variable in each iteration, respecting block scoping.

Here's a simple comparison of `let` and `var` in code:

```javascript
function example() {
    var varValue = "I am a var.";
    let letValue = "I am a let.";

    if (true) {
        var varValue = "I am a different var.";
        let letValue = "I am a different let.";
    }

    console.log(varValue); // Output: "I am a different var."
    console.log(letValue); // Output: "I am a let."
}
```

In general, it's recommended to use `let` and `const` over `var` in modern JavaScript code, as they provide better scoping, help prevent unintended re-declarations, and align more closely with block-level scoping principles.

105. ###  What is the motivation for bringing Symbol to ES6?

The introduction of the `Symbol` data type in ES6 (ECMAScript 2015) was motivated by several factors, aiming to address specific issues and requirements in JavaScript. `Symbol` was designed to provide unique and non-enumerable property keys, which offers several benefits and use cases. Here are the main motivations for bringing `Symbol` to ES6:

1. **Creating Uniqueness:** Prior to ES6, JavaScript only supported strings as property keys for objects. This posed a limitation when developers needed to create unique property keys, especially when working with third-party libraries or when defining private properties. `Symbol` provides a way to generate truly unique property keys, reducing the risk of unintentional property name collisions.

2. **Private Properties and Methods:** `Symbol` allows developers to create private properties and methods in objects. Since `Symbol` property keys are not easily discoverable (they are not listed during enumeration), they can be used to implement encapsulation and prevent direct access to certain properties or methods, simulating the concept of privacy.

3. **Extensibility and Metaprogramming:** Symbols play a crucial role in enabling advanced metaprogramming and customization of object behavior. For example, symbols are used as keys for well-known built-in methods like `Symbol.iterator`, `Symbol.toStringTag`, and others. This allows developers to customize the behavior of objects when they interact with various language features and built-in methods.

4. **Avoiding Name Clashes:** When integrating multiple libraries or modules into a project, there's a potential risk of name clashes between properties and methods. `Symbol` addresses this issue by providing a way to define properties with keys that are guaranteed to be unique, helping to mitigate naming conflicts.

5. **Iterators and Custom Iterables:** Symbols are essential for implementing custom iterators and iterables in JavaScript. The built-in `Symbol.iterator` symbol is used to define the iterable behavior of objects, allowing them to be used in `for...of` loops and other iterable contexts.

6. **Built-in Symbols for Well-Known Concepts:** ES6 introduced several built-in symbols that represent well-known language concepts. For example, `Symbol.iterator` for iterating over an object, `Symbol.toStringTag` for customizing the `toString()` behavior, and `Symbol.species` for specifying the constructor to use when creating derived objects.

In summary, `Symbol` was introduced in ES6 to address the need for unique property keys, enable better encapsulation and metaprogramming, provide a mechanism for creating private properties, and support advanced language features like custom iterables and well-known symbols. It enhances JavaScript's capabilities for writing more expressive, flexible, and customizable code.

106. ### Why is extending built-in JavaScript objects not a good idea?  

Extending built-in JavaScript objects (such as adding methods or properties to native prototypes like `Array.prototype`, `String.prototype`, etc.) might seem tempting at first, but it generally comes with a set of significant drawbacks and potential risks. Here are some reasons why extending built-in JavaScript objects is often considered not a good idea:

1. **Global Impact and Name Collisions:**
   Modifying built-in prototypes affects all instances of that type across your entire codebase. If your extended method or property has the same name as a future ECMAScript standard method or property, it can cause conflicts and break your code when browsers implement the new standard.

2. **Compatibility and Future-Proofing:**
   JavaScript evolves over time, and new features or methods can be added to native prototypes in the future. By extending built-in objects, your code might become incompatible or behave unexpectedly as browsers update to support new language features.

3. **Unintended Consequences:**
   Extending native prototypes can introduce subtle and hard-to-debug issues, especially when multiple libraries or modules are involved. It's challenging to predict how other parts of your codebase or third-party libraries might interact with the extended prototypes.

4. **Breaking Encapsulation:**
   Adding methods to native prototypes can break encapsulation and lead to less maintainable code. Other developers working on the same codebase might not be aware of these extensions, causing confusion and increasing the potential for bugs.

5. **Performance Concerns:**
   Extending native prototypes can negatively impact performance, as engines might need to optimize for these extensions and handle them differently from standard prototypes. This can lead to slower code execution and increased memory consumption.

6. **Code Maintainability:**
   Over time, your codebase might become harder to understand and maintain if it relies on extended native prototypes. Debugging and troubleshooting become more difficult as your codebase grows.

Instead of extending built-in objects, consider alternative approaches:

- **Create Utility Functions:** Define standalone utility functions that encapsulate the desired behavior without modifying built-in prototypes. This approach keeps your code modular, reduces potential conflicts, and is easier to test and maintain.

- **Subclassing:** If you need to add functionality to built-in objects, consider subclassing instead of directly modifying the prototype. This way, you create a new class that extends the built-in object and adds the desired behavior.

- **Use Polyfills and Transpilers:** For new features or methods, consider using polyfills to add support for older browsers, and transpile your code using tools like Babel to ensure compatibility with different environments.

- **Custom Objects:** When working with native objects, consider creating your own custom objects that wrap around the native types and provide the additional functionality you need. This keeps your codebase cleaner and more maintainable.

In summary, while extending built-in JavaScript objects might offer short-term convenience, it introduces long-term risks and drawbacks that can negatively impact code quality, compatibility, and maintainability. It's generally recommended to avoid extending native prototypes and instead opt for more modular and future-proof approaches.

107. ### What advantages are using arrow functions? 

Arrow functions were introduced in ES6 (ECMAScript 2015) and provide a more concise syntax for creating functions in JavaScript. They have several advantages, which make them a popular choice in many scenarios. Here are some advantages of using arrow functions:

1. **Concise Syntax:** Arrow functions have a shorter syntax compared to traditional function expressions, which makes your code cleaner and easier to read.

   ```javascript
   // Traditional function expression
   const add = function(x, y) {
       return x + y;
   };

   // Arrow function
   const add = (x, y) => x + y;
   ```

2. **Lexical `this` Binding:** Arrow functions do not have their own `this` context. Instead, they inherit the `this` value from the surrounding code. This makes arrow functions especially useful in callback functions or methods where you want to preserve the value of `this` from the enclosing context.

   ```javascript
   // Traditional function with a lexical this binding workaround
   function Timer() {
       this.seconds = 0;
       setInterval(function() {
           this.seconds++;
           console.log(this.seconds);
       }.bind(this), 1000);
   }

   // Arrow function with inherited this value
   function Timer() {
       this.seconds = 0;
       setInterval(() => {
           this.seconds++;
           console.log(this.seconds);
       }, 1000);
   }
   ```

3. **No `arguments` Object:** Arrow functions do not have their own `arguments` object. If you need access to the arguments passed to the function, you can use the rest parameters syntax (`...args`).

   ```javascript
   // Traditional function with arguments object
   function printArgs() {
       console.log(arguments);
   }

   // Arrow function with rest parameters
   const printArgs = (...args) => console.log(args);
   ```

4. **Implicit Return:** If an arrow function has a single expression, you can omit the braces `{}` and the `return` keyword. The result of the expression will be automatically returned.

   ```javascript
   const double = x => x * 2;
   ```

5. **No Binding of `this`, `super`, or `new.target`:** Arrow functions cannot be used as constructors with the `new` keyword and do not have access to the `super` keyword for accessing parent class methods or the `new.target` meta-property.

6. **Readability for Short Callbacks:** Arrow functions are particularly useful for short callback functions, making your code more concise and easier to follow.

   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   const squared = numbers.map(x => x * x);
   ```

7. **Single-Statement Blocks:** Arrow functions are well-suited for single-statement blocks, where a more compact syntax is desirable.

   ```javascript
   const isEven = num => num % 2 === 0;
   ```

While arrow functions have these advantages, it's important to note that they may not be suitable for all scenarios. For instance, due to their lack of their own `this` context, arrow functions are not suitable for methods that require access to instance-specific properties or need to be used as constructors. Additionally, their concise syntax may lead to reduced readability for more complex functions. As with any language feature, it's important to use arrow functions judiciously based on the specific needs of your code.

108. ### What is the difference between Anonymous and Named function?

The difference between anonymous and named functions lies primarily in how they are defined and how they can be referenced in your code. Let's explore both concepts:

1. **Anonymous Functions:**
   Anonymous functions are functions that are defined without a name. They are often used in situations where the function is short-lived or only used in a specific context, such as a callback function or an immediate function invocation.

   ```javascript
   const sum = function(a, b) {
       return a + b;
   };

   // Using an anonymous function as a callback
   const result = [1, 2, 3].map(function(x) {
       return x * x;
   });
   ```

   Anonymous functions are commonly used when you don't need to refer to the function by name elsewhere in your code.

2. **Named Functions:**
   Named functions, as the name suggests, have a specified name when they are defined. They are often used for functions that have a distinct purpose or need to be referenced multiple times throughout your code.

   ```javascript
   function multiply(a, b) {
       return a * b;
   }

   // Using a named function as a callback
   const result = [1, 2, 3].map(square);

   function square(x) {
       return x * x;
   }
   ```

   Named functions have a few advantages over anonymous functions:
   - They provide a clear and meaningful name, making your code more readable and understandable.
   - They can be self-referential (recursively calling themselves) because they have a name to reference.
   - They can be defined before or after their usage in the code, thanks to hoisting.

In summary:
- Anonymous functions are typically used for short-lived, context-specific functions where you don't need to reference the function by name.
- Named functions are used for more reusable, self-descriptive functions that may be referenced multiple times and support self-referential behavior.

Both types of functions have their place in programming, and the choice between them depends on the specific use case and the level of reusability and clarity you need in your code.

109. ### What is the difference between Anonymous and Named function?

The difference between anonymous and named functions lies primarily in how they are defined and how they can be referenced in your code. Let's explore both concepts:

1. **Anonymous Functions:**
   Anonymous functions are functions that are defined without a name. They are often used in situations where the function is short-lived or only used in a specific context, such as a callback function or an immediate function invocation.

   ```javascript
   const sum = function(a, b) {
       return a + b;
   };

   // Using an anonymous function as a callback
   const result = [1, 2, 3].map(function(x) {
       return x * x;
   });
   ```

   Anonymous functions are commonly used when you don't need to refer to the function by name elsewhere in your code.

2. **Named Functions:**
   Named functions, as the name suggests, have a specified name when they are defined. They are often used for functions that have a distinct purpose or need to be referenced multiple times throughout your code.

   ```javascript
   function multiply(a, b) {
       return a * b;
   }

   // Using a named function as a callback
   const result = [1, 2, 3].map(square);

   function square(x) {
       return x * x;
   }
   ```

   Named functions have a few advantages over anonymous functions:
   - They provide a clear and meaningful name, making your code more readable and understandable.
   - They can be self-referential (recursively calling themselves) because they have a name to reference.
   - They can be defined before or after their usage in the code, thanks to hoisting.

In summary:
- Anonymous functions are typically used for short-lived, context-specific functions where you don't need to reference the function by name.
- Named functions are used for more reusable, self-descriptive functions that may be referenced multiple times and support self-referential behavior.

Both types of functions have their place in programming, and the choice between them depends on the specific use case and the level of reusability and clarity you need in your code.

110. ### What is export default in JavaScript? 

In JavaScript, the `export default` syntax is used to export a single value or object from a module as the default export. This default export can then be imported by other modules using the `import` statement without the need for curly braces `{}`.

Here's how `export default` is used:

1. **In the exporting module:**

   ```javascript
   // exportingModule.js
   const greeting = "Hello, ";
   export default greeting;

   // You can also directly export a value without assigning it to a variable.
   // export default "Hello, ";
   ```

2. **In the importing module:**

   ```javascript
   // importingModule.js
   import greeting from './exportingModule'; // Note: No curly braces {}

   console.log(greeting + "World"); // Output: "Hello, World"
   ```

With `export default`, you can have one default export per module. This simplifies the importing process for modules that provide a main or primary functionality. It's important to note that you can still have named exports alongside the default export in the same module.

Here's an example that combines both default and named exports:

1. **In the exporting module:**

   ```javascript
   // exportingModule.js
   const greeting = "Hello, ";
   const farewell = "Goodbye, ";
   export default greeting;
   export { farewell };
   ```

2. **In the importing module:**

   ```javascript
   // importingModule.js
   import myGreeting, { farewell } from './exportingModule';

   console.log(myGreeting + "World"); // Output: "Hello, World"
   console.log(farewell + "World");   // Output: "Goodbye, World"
   ```

It's worth mentioning that the `export default` syntax is not the only way to export values in JavaScript modules. You can also use named exports (`export` without `default`) to export multiple values from a module, and then import them using the corresponding names with curly braces in the importing module. The choice between default and named exports depends on your module structure and how you want to organize and reuse your code.

111. ### What is the new keyword in JavaScript?

In JavaScript, the `new` keyword is used to create instances of user-defined constructor functions or built-in constructor functions. When you use the `new` keyword with a constructor function, it creates a new object and sets the prototype of that object to the constructor's prototype. It then invokes the constructor function with the newly created object as the `this` context, and finally, it returns the created object.

Here's how the `new` keyword is used:

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

console.log(person1.name); // Output: "Alice"
console.log(person2.age);  // Output: 30
```

In this example, the `Person` function acts as a constructor. When you call `new Person("Alice", 25)`, it creates a new object and sets the properties `name` and `age` on that object. The `this` inside the constructor refers to the newly created object.

It's important to note that when you use the `new` keyword, the constructor function itself doesn't explicitly return anything. The `new` keyword implicitly returns the newly created object unless the constructor function explicitly returns an object. If the constructor function returns a non-object value (such as a primitive), the `new` keyword will still return the created object.

```javascript
function Example() {
    this.property = "Value";
    return 42; // This will be ignored by the new keyword
}

const instance = new Example();

console.log(instance.property); // Output: "Value"
```

When using the `new` keyword, keep the following points in mind:

1. Constructor functions by convention start with a capital letter to differentiate them from regular functions.
2. The `new` keyword creates a new instance each time it is used, so be cautious when using it inside loops or in performance-critical code.
3. Constructors can initialize instance properties and methods, but it's generally recommended to define methods on the prototype to save memory and improve performance.

It's worth mentioning that modern JavaScript also provides classes and the `class` keyword as a more convenient and standardized way to create constructor functions and define methods. Classes offer a more familiar syntax for developers coming from object-oriented programming backgrounds.

112. ### Difference between constructor function and normal function?

Constructor functions and normal functions in JavaScript serve different purposes and have distinct characteristics. Let's explore the key differences between them:

1. **Purpose:**
   - Constructor Function: A constructor function is used to create and initialize objects. It serves as a blueprint for creating instances of a particular type of object, allowing you to set initial properties and behaviors.
   - Normal Function: A normal function (also called a regular function) is used to perform a specific task or computation. It doesn't necessarily involve creating new objects; it can manipulate data, return values, or perform actions.

2. **Usage:**
   - Constructor Function: Used with the `new` keyword to create instances of objects. Typically, constructor functions set properties and methods on the newly created object.
   - Normal Function: Invoked directly using its name. It can be used to perform any computation or operation without necessarily creating objects.

3. **`this` Context:**
   - Constructor Function: The `this` keyword inside a constructor function refers to the newly created object. Properties and methods are added to the instance using `this`.
   - Normal Function: The `this` keyword inside a normal function depends on how the function is called. It could refer to the global object (in non-strict mode) or be undefined (in strict mode) if not explicitly set.

4. **Return Value:**
   - Constructor Function: The return value of a constructor function is implicitly the newly created object. If you explicitly return a non-object, the returned value is ignored.
   - Normal Function: The return value of a normal function can be any value, including primitive types, objects, or even `undefined`.

5. **Instance Methods:**
   - Constructor Function: Instance methods (functions) can be defined within the constructor function or on the constructor's prototype. These methods are shared among all instances created from the same constructor.
   - Normal Function: Can define standalone functions that perform a specific task and are not tied to instances of an object.

6. **Inheritance:**
   - Constructor Function: Constructor functions and their prototypes are used to create and manage inheritance in JavaScript. Child constructors can inherit properties and methods from parent constructors.
   - Normal Function: While normal functions can be used to implement functionality, they do not inherently support the same level of inheritance as constructor functions.

7. **Naming Convention:**
   - Constructor Function: By convention, constructor functions usually start with a capital letter (e.g., `Person`, `Car`) to differentiate them from regular functions.
   - Normal Function: Regular functions have names in lowercase or camelCase, reflecting their purpose or action (e.g., `calculateTotal`, `getUserData`).

In summary, constructor functions are specifically designed for creating objects and setting up their initial properties, while normal functions are versatile and can perform a wide range of tasks, including computations, manipulations, and interactions with data. The choice between using a constructor function or a normal function depends on the intended purpose and the type of behavior you want to achieve in your code.

113. ### Explain difference between: function Person(){}, var person = Person(), and var person = new Person()? 

The examples you provided involve creating instances of objects using a constructor function. Let's break down the differences between these three scenarios:

1. **function Person(){}:**
   This is a declaration of a constructor function named `Person`. It defines a blueprint for creating objects of a specific type. However, this line of code does not create an instance of the `Person` object itself; it merely defines how instances of `Person` objects should be constructed.

   ```javascript
   function Person() {
       // Constructor logic here
   }
   ```

2. **var person = Person():**
   In this case, you are attempting to call the `Person` function as a regular function, not as a constructor. Since the `Person` function doesn't have an explicit return value, `person` will be `undefined`.

   ```javascript
   function Person() {
       // Constructor logic here
   }

   var person = Person(); // person is undefined, not an instance of Person
   ```

3. **var person = new Person():**
   This is the correct way to use the constructor function to create a new instance of the `Person` object. The `new` keyword is used to instantiate a new object based on the constructor function's blueprint. The constructor logic is executed, and the newly created object is assigned to the `person` variable.

   ```javascript
   function Person() {
       // Constructor logic here
   }

   var person = new Person(); // person is an instance of Person
   ```

To summarize:

- Declaring a constructor function (`function Person(){}`) defines the blueprint for creating objects of a specific type.
- Calling the constructor function without `new` (`var person = Person()`) treats it like a regular function call and doesn't create an instance of the object.
- Using `new` to create an instance (`var person = new Person()`) constructs a new object based on the constructor function's blueprint and assigns it to a variable.

The correct approach for creating instances of objects using a constructor function is to use the `new` keyword, as shown in the third example.

114. ### What are the actual uses of ES6 WeakMap?

ES6 introduced the `WeakMap` data structure as part of its standard library. `WeakMap` has specific use cases and advantages compared to other data structures like regular `Map` or object properties. Its main feature is that it allows you to create key-value associations where the keys are weakly held, meaning they don't prevent the associated values from being garbage collected when no longer needed. Here are some actual uses of `WeakMap`:

1. **Private Data and Encapsulation:**
   `WeakMap` can be used to store private data associated with objects. Since the keys are weak references, the private data will be automatically garbage collected when the object is no longer reachable, helping to maintain better encapsulation and avoid memory leaks.

2. **Preventing Memory Leaks:**
   `WeakMap` can help prevent memory leaks in cases where objects are being used as keys in other data structures (e.g., caching, event listeners). When the objects are no longer used or referenced elsewhere, they can be garbage collected along with their associated values.

3. **DOM Node Data:**
   `WeakMap` can be useful for associating additional data or metadata with DOM nodes without causing memory leaks. This is especially important in cases where external libraries or frameworks need to attach data to DOM nodes.

4. **Caching and Memoization:**
   `WeakMap` can be used for memoization, where expensive function results are cached for certain input values. The keys (input arguments) and values (cached results) will be automatically garbage collected when the associated objects are no longer used.

5. **Temporary Data Storage:**
   `WeakMap` can be employed to temporarily store data that should be associated with an object but doesn't need to persist beyond the object's lifetime.

6. **Storing Additional Information:**
   `WeakMap` can be used to store additional information or flags about objects without affecting the object's actual properties. This can be useful for scenarios where extending the object's prototype is not desirable.

7. **Memory-Efficient Caching:**
   Since `WeakMap` keys are weak references, they won't prevent cached objects from being garbage collected, allowing you to implement memory-efficient caching strategies.

It's important to note that `WeakMap` has some limitations and considerations:

- Keys must be objects (primitive values are not allowed).
- The keys are weakly held, meaning that if there are no other references to the key object, it may be garbage collected, resulting in the loss of the associated value.
- `WeakMap` does not provide iteration methods like `keys()`, `values()`, or `forEach()` because such iteration could interfere with the garbage collection behavior.

Due to its unique characteristics, `WeakMap` is particularly well-suited for scenarios where you need to associate data with objects without preventing the objects from being garbage collected when they are no longer needed.

115. ### How can you share code between files?

Sharing code between files in JavaScript is a common practice, especially when working on larger projects or modular applications. There are several techniques and approaches you can use to achieve this:

1. **CommonJS Modules (Node.js):**
   CommonJS is a module format that is widely used in Node.js for structuring and sharing code. It allows you to use the `require()` function to import modules and the `module.exports` or `exports` object to define what you want to expose from a module.

   ```javascript
   // math.js
   function add(a, b) {
       return a + b;
   }

   module.exports = {
       add: add
   };

   // app.js
   const math = require('./math');
   console.log(math.add(2, 3)); // Output: 5
   ```

2. **ES6 Modules (Browser and Node.js):**
   ES6 introduced a standardized module system for JavaScript, which is now widely supported in modern browsers and in Node.js using the `--experimental-modules` flag. You can use `import` and `export` statements to define and use modules.

   ```javascript
   // math.js
   export function add(a, b) {
       return a + b;
   }

   // app.js
   import { add } from './math';
   console.log(add(2, 3)); // Output: 5
   ```

3. **AMD (Asynchronous Module Definition):**
   AMD is a module format mainly used in browser environments that supports asynchronous loading of modules. Libraries like RequireJS provide an implementation of the AMD pattern.

   ```javascript
   // math.js
   define([], function() {
       function add(a, b) {
           return a + b;
       }

       return {
           add: add
       };
   });

   // app.js
   require(['math'], function(math) {
       console.log(math.add(2, 3)); // Output: 5
   });
   ```

4. **UMD (Universal Module Definition):**
   UMD is a pattern that allows a module to work in both CommonJS and AMD environments, as well as in global variable scenarios. It's a flexible way to create modules that can be used across different module systems.

   ```javascript
   (function(root, factory) {
       if (typeof define === 'function' && define.amd) {
           define([], factory);
       } else if (typeof exports === 'object') {
           module.exports = factory();
       } else {
           root.myModule = factory();
       }
   }(this, function() {
       function add(a, b) {
           return a + b;
       }

       return {
           add: add
       };
   }));

   // Usage is similar to CommonJS or AMD, depending on the environment.
   ```

5. **Bundlers (Webpack, Rollup, etc.):**
   Bundlers like Webpack and Rollup allow you to bundle multiple JavaScript files into a single output file. They handle dependencies, optimize code, and can generate smaller bundles for production.

   ```javascript
   // math.js
   export function add(a, b) {
       return a + b;
   }

   // app.js
   import { add } from './math';
   console.log(add(2, 3));
   ```

   When you run your bundler, it will analyze your code, resolve dependencies, and generate a single bundle file that contains all the necessary code.

Choose the approach that best fits your project's environment and requirements. Modern JavaScript projects often use ES6 modules along with bundlers for optimal code organization and distribution.

116. ### Can you describe the main difference between a .forEach loop and a .map() loop and why you would pick one versus the other?

Both `forEach` and `map()` are array methods in JavaScript used for iterating over arrays and performing actions on their elements. However, they have different purposes and behaviors, and the choice between them depends on what you want to achieve in your code.

1. **forEach:**
   - `forEach` is a method that iterates over each element in an array and executes a provided callback function for each element.
   - It does not create a new array. It simply iterates through the elements and performs an action on each element.
   - The return value of the callback function is ignored. It is primarily used for its side effects, such as modifying the elements or performing some action for each element.

Example of using `forEach`:

```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
    console.log(number * 2); // Side effect: logging the doubled value
});
```

2. **map():**
   - `map()` is a method that creates a new array by calling a provided callback function on each element of the original array.
   - It returns a new array with the same number of elements as the original, where each element is the result of the callback function applied to the corresponding element in the original array.
   - It is commonly used when you want to transform each element of an array and create a new array with the transformed values.

Example of using `map()`:

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
```

**When to Choose `forEach`:**
- Use `forEach` when you want to iterate over an array to perform actions with side effects (e.g., logging, modifying the array elements in place).
- If you don't need to create a new array and just want to perform some operation on the elements of the original array, `forEach` is a good choice.

**When to Choose `map()`:**
- Use `map()` when you want to create a new array with the same length as the original array, where each element is transformed based on the callback function.
- If you need to transform the elements and produce a new array without modifying the original array, `map()` is a better choice.

In summary, `forEach` is suitable for performing actions on elements with side effects, while `map()` is designed for transforming elements and creating a new array with the transformed values. Choose the method that best aligns with your specific use case and desired outcome.

117. ### Describe the JS module design pattern

The JavaScript Module Design Pattern is a common architectural pattern used to organize and structure code in a modular and maintainable way. It provides a way to encapsulate functionality, manage dependencies, and prevent global namespace pollution. There are several variations of the module pattern, each with its own characteristics. One of the most commonly used versions is the "Revealing Module Pattern." Here's an overview of the pattern:

1. **Encapsulation:** The module pattern promotes encapsulation by grouping related variables, functions, and data under a single scope. This helps prevent naming conflicts and keeps the implementation details hidden from the outside world.

2. **Private and Public Members:** The module pattern allows you to define private members (variables or functions) that are only accessible within the module's scope, as well as public members that can be exposed and accessed from outside the module.

3. **IIFE (Immediately Invoked Function Expression):** The module pattern often uses an IIFE to create a private scope for the module. The IIFE is invoked immediately after its definition, returning an object or revealing public members.

4. **Closure:** Closures play a crucial role in the module pattern, allowing private members to maintain their state across invocations.

Here's an example of the Revealing Module Pattern:

In this example, `privateCounter`, `privateIncrement`, and `privateDecrement` are private members that are not accessible from outside the module. The public members (`increment`, `decrement`, and `getCount`) are exposed and provide controlled access to the private functionality.

Benefits of the Module Design Pattern:

- **Encapsulation:** Helps maintain clean and organized code by encapsulating related functionality.
- **Namespace Isolation:** Prevents naming conflicts and pollution of the global namespace.
- **Dependency Management:** Provides a structured way to manage dependencies and avoid tight coupling between modules.
- **Reusability:** Encourages code reusability by creating self-contained and modular components.

Keep in mind that while the Revealing Module Pattern is a powerful way to structure code, modern JavaScript has evolved with the introduction of ES6 modules (`import` and `export` statements) and bundlers (like Webpack and Rollup), which offer more advanced and standardized approaches to modular code organization.
```js
const MyModule = (function(){
    let privateCounter = 0
    
    function privateIncrement(){
        privateCounter++
    }
    
    function privateDecrement(){
        privareCounter--
    }
    
    return {
        increment: privateIncrement,
        decrement: privateDecrement,
        getCount: function(){
            return privateCounter
        }
    }
})()

MyModule.increment()
MyModule.increment()
console.log(MyModule.getCount())

```

118. ### Explain the Prototype Design Pattern 

The Prototype Design Pattern is a creational design pattern that focuses on creating objects by copying or cloning existing objects (prototypes) rather than creating new instances from scratch. This pattern is particularly useful when the cost of creating a new instance is high or when you want to create objects that are similar but differ in some aspects.

Key Concepts and Components of the Prototype Design Pattern:

1. **Prototype:** The prototype is an existing object that serves as a blueprint for creating new instances. It defines the structure and behavior of the objects to be cloned.

2. **Clone:** The process of creating a new object by copying the properties and methods of an existing prototype. Cloning can be shallow (copying only top-level properties) or deep (copying nested properties and objects).

3. **Client:** The client is responsible for requesting the creation of new objects using prototypes. It interacts with the prototypes and clones as needed.

Benefits of the Prototype Design Pattern:

- **Reduced Overhead:** Creating objects through cloning can be more efficient than creating them from scratch, especially if object initialization is resource-intensive.
  
- **Flexible Object Creation:** Prototypes allow you to create variations of objects by modifying the prototype before cloning, enabling you to create objects with customized properties and behaviors.

- **Encapsulation:** The Prototype Pattern encapsulates the cloning process within the prototype objects, abstracting the creation details from the client code.

Example of the Prototype Design Pattern in JavaScript:

```javascript
// Prototype
class Shape {
    constructor(type) {
        this.type = type;
    }

    draw() {
        console.log(`Drawing a ${this.type}`);
    }

    clone() {
        return Object.create(this);
    }
}

// Client
const originalCircle = new Shape("Circle");
originalCircle.draw(); // Output: "Drawing a Circle"

const clonedCircle = originalCircle.clone();
clonedCircle.draw();   // Output: "Drawing a Circle"
```

In this example, the `Shape` class serves as a prototype for creating different types of shapes. The `clone` method uses `Object.create(this)` to create a shallow copy of the prototype object. The client can create new shapes by cloning the prototype and then customize them as needed.

It's important to note that modern JavaScript also provides built-in mechanisms for object cloning, such as the `Object.assign()` method or the spread operator (`...`). However, the Prototype Design Pattern offers more control and flexibility over the cloning process and can be useful in more complex scenarios.

Overall, the Prototype Design Pattern is a powerful approach to object creation that emphasizes reusability, efficiency, and customization while abstracting the creation process from the client code.

119. ### Can you give an example for destructuring an object or an array in ES6?

Certainly! Destructuring is a powerful feature introduced in ES6 that allows you to extract values from arrays and objects into individual variables. Here are examples of destructuring for both arrays and objects:

**Destructuring an Array:**

```javascript
const colors = ["red", "green", "blue"];

// Destructuring the array into individual variables
const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor);  // Output: "red"
console.log(secondColor); // Output: "green"
console.log(thirdColor);  // Output: "blue"
```

**Destructuring an Object:**

```javascript
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA"
    }
};

// Destructuring the object properties into individual variables
const { firstName, lastName, age, address: { city, state } } = person;

console.log(firstName); // Output: "John"
console.log(lastName);  // Output: "Doe"
console.log(age);       // Output: 30
console.log(city);      // Output: "Anytown"
console.log(state);     // Output: "CA"
```

You can also provide default values when destructuring in case the property is not present in the object:

```javascript
const { firstName, lastName, gender = "unknown" } = person;
console.log(gender); // Output: "unknown"
```

Destructuring can be especially useful when working with function parameters to directly extract properties from objects:

```javascript
function displayFullName({ firstName, lastName }) {
    console.log(`${firstName} ${lastName}`);
}

displayFullName(person); // Output: "John Doe"
```

In the case of arrays, you can ignore certain elements by using the comma `,` syntax:

```javascript
const [first, , third] = [1, 2, 3];
console.log(first);  // Output: 1
console.log(third);  // Output: 3
```

Destructuring offers a clean and concise way to extract values from arrays and objects, making your code more readable and expressive.

120. ### What does the term Transpiling stand for?

Transpiling, short for "source-to-source compilation" or "transforming and compiling," refers to the process of converting source code from one programming language to another while preserving its original functionality and behavior. This is commonly done to enable compatibility with different runtime environments, to take advantage of newer language features, or to improve code quality and performance.

In the context of JavaScript, transpiling typically involves converting code written in a newer version of the language (such as ES6/ES2015 or later) into an older version (usually ES5) that is more widely supported by web browsers and other JavaScript environments. This allows developers to use modern language features while ensuring that their code remains functional in environments that do not yet support those features.

For example, a common use case of JavaScript transpilation is converting ES6 code with arrow functions, classes, and template literals into ES5 code:

ES6 Code:
```javascript
const greet = (name) => `Hello, ${name}!`;

class Person {
    constructor(name) {
        this.name = name;
    }
}
```

Transpiled ES5 Code:
```javascript
var greet = function(name) {
    return "Hello, " + name + "!";
};

function Person(name) {
    this.name = name;
}
```

Popular transpilers for JavaScript include Babel, which is widely used to convert modern JavaScript code into an older version for broader browser compatibility. Transpilers play a crucial role in the modern JavaScript ecosystem, enabling developers to write code using the latest language features while ensuring compatibility with a wide range of target environments.

121. ### Explain Prototype Inheritance in JavaScript? 

Prototype inheritance is a fundamental concept in JavaScript that allows objects to inherit properties and methods from other objects through their prototypes. In JavaScript, almost everything is an object, and objects can share common behavior and characteristics through prototype chains. This forms the basis of object-oriented programming in the language.

Here's how prototype inheritance works:

1. **Prototype Object:**
   Every object in JavaScript has an associated prototype object. The prototype is an object that serves as a template or blueprint for the properties and methods that an object should inherit.

2. **Prototype Chain:**
   When you access a property or method on an object, JavaScript first checks if the object itself has that property or method. If not, it looks up the prototype chain to find the property or method in the prototype of the object. If the prototype also doesn't have the property, the search continues up the chain until the property is found or until the top-level prototype (`Object.prototype`) is reached.

3. **Inheritance:**
   When an object's prototype is set to another object, the first object inherits all the properties and methods of the second object. This establishes a parent-child relationship between the objects, allowing the child object to access the properties and methods of the parent object.

Example of Prototype Inheritance:

```javascript
// Parent object constructor
function Animal(name) {
    this.name = name;
}

// Adding a method to the parent prototype
Animal.prototype.sayHello = function() {
    console.log(`Hello, I'm ${this.name}`);
};

// Child object constructor
function Dog(name, breed) {
    // Calling the parent constructor
    Animal.call(this, name);
    this.breed = breed;
}

// Setting the child prototype to an instance of the parent
Dog.prototype = Object.create(Animal.prototype);

// Adding a method to the child prototype
Dog.prototype.bark = function() {
    console.log("Woof woof!");
};

// Creating instances
const myDog = new Dog("Buddy", "Golden Retriever");
myDog.sayHello(); // Output: "Hello, I'm Buddy"
myDog.bark();     // Output: "Woof woof!"
```

In this example:
- `Animal` is the parent constructor, and `Dog` is the child constructor.
- `Animal.prototype` defines the `sayHello` method.
- `Dog.prototype` is set to an instance of `Animal.prototype`, establishing the prototype chain.
- `myDog` is an instance of `Dog` that inherits both the `sayHello` method from `Animal.prototype` and the `bark` method from `Dog.prototype`.

Prototype inheritance is a powerful mechanism that allows you to create reusable and structured code by sharing behavior between objects. It forms the basis of how objects are linked and can inherit properties and methods from each other in JavaScript.