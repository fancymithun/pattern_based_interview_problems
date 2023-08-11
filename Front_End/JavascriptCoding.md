1. ### What's the output?

```js

function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
}

sayHi();

// undefined because of hoisting for var and hoisting won't work for let as this will be in temporal dead zone
// undefined and ReferenceError

```

2. ### What's the output?

```js
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());

// 20 and NaN

```

3. ### What's the output?

```js
+true;
!'Lydia';

// 1 and false

```

4. ###  Which one is true?

```js
const bird = {
  size: 'small',
};

const mouse = {
  name: 'Mickey',
  small: true,
};

// Answer is A

// In JavaScript, all object keys are strings (unless it's a Symbol). Even though we might not type them as strings, they are always converted into strings under the hood.

// JavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket [ and keeps going until it finds the closing bracket ]. Only then, it will evaluate the statement.

// mouse[bird.size]: First it evaluates bird.size, which is "small". mouse["small"] returns true

// However, with dot notation, this doesn't happen. mouse does not have a key called bird, which means that mouse.bird is undefined. Then, we ask for the size using dot notation: mouse.bird.size. Since mouse.bird is undefined, we're actually asking undefined.size. This isn't valid, and will throw an error similar to Cannot read property "size" of undefined.



```

A: mouse.bird.size is not valid
B: mouse[bird.size] is not valid
C: mouse[bird["size"]] is not valid
D: All of them are valid

5. ### What's the output?

```js
let c = { greeting: 'Hey!' };
let d;

d = c;
c.greeting = 'Hello';
console.log(d.greeting); // Hello
```

In JavaScript, all objects interact by reference when setting them equal to each other.

First, variable c holds a value to an object. Later, we assign d with the same reference that c has to the object.

6. ### What's the output?

```js

let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);

// true false false
```
new Number() is a built-in function constructor. Although it looks like a number, it's not really a number: it has a bunch of extra features and is an object.

When we use the == operator (Equality operator), it only checks whether it has the same value. They both have the value of 3, so it returns true.

However, when we use the === operator (Strict equality operator), both value and type should be the same. It's not: new Number() is not a number, it's an object. Both return false.

7. ### 