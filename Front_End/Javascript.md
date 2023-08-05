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

