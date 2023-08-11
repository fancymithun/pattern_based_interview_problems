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

