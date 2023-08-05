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
