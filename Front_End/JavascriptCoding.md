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

7. ### What's the output?

```js

let randomValue = { name: "Lydia" }
randomValue = 23

if (!typeof randomValue === "string") {
	console.log("It's not a string!")
} else {
	console.log("Yay it's a string!")
}

```

Answer: B
The condition within the if statement checks whether the value of !typeof randomValue is equal to "string". The ! operator converts the value to a boolean value. If the value is truthy, the returned value will be false, if the value is falsy, the returned value will be true. In this case, the returned value of typeof randomValue is the truthy value "number", meaning that the value of !typeof randomValue is the boolean value false.

!typeof randomValue === "string" always returns false, since we're actually checking false === "string". Since the condition returned false, the code block of the else statement gets run, and Yay it's a string! gets logged.

8. ### What's the output?

```js
const createMember = ({ email, address = {}}) => {
	const validEmail = /.+\@.+\..+/.test(email)
	if (!validEmail) throw new Error("Valid email pls")

	return {
		email,
		address: address ? address : null
	}
}

const member = createMember({ email: "my@email.com" })
console.log(member)

// { email: "my@email.com", address: {} }

```

The default value of address is an empty object {}. When we set the variable member equal to the object returned by the createMember function, we didn't pass a value for address, which means that the value of address is the default empty object {}. An empty object is a truthy value, which means that the condition of the address ? address : null conditional returns true. The value of address is the empty object {}.

9. ###  What's the output?

```js

const promise1 = Promise.resolve('First')
const promise2 = Promise.resolve('Second')
const promise3 = Promise.reject('Third')
const promise4 = Promise.resolve('Fourth')

const runPromises = async () => {
	const res1 = await Promise.all([promise1, promise2])
	const res2  = await Promise.all([promise3, promise4])
	return [res1, res2]
}

runPromises()
	.then(res => console.log(res))
	.catch(err => console.log(err))

// D: 'Third'

```

The Promise.all method runs the passed promises in parallel. If one promise fails, the Promise.all method rejects with the value of the rejected promise. In this case, promise3 rejected with the value "Third". We’re catching the rejected value in the chained catch method on the runPromises invocation to catch any errors within the runPromises function. Only "Third" gets logged, since promise3 rejected with this value.

10. ### What's the output?

```js

const user = {
	email: "my@email.com",
	updateEmail: email => {
		this.email = email
	}
}

user.updateEmail("new@email.com")
console.log(user.email)

// Answer: A

```

The updateEmail function is an arrow function, and is not bound to the user object. This means that the this keyword is not referring to the user object, but refers to the global scope in this case. The value of email within the user object does not get updated. When logging the value of user.email, the original value of my@email.com gets returned.

11. ### What's the output?

```js
const animals = {};
let dog = { emoji: '🐶' }
let cat = { emoji: '🐈' }

animals[dog] = { ...dog, name: "Mara" }  // Here dog is ["object Object"]
animals[cat] = { ...cat, name: "Sara" }  // Here we are overwriting animals["object Object] so result will be cat object

console.log(animals[dog]) // result = {emoji: '🐈',name:"Sara"}

```

12. ### What's the output?

```js
const fruit = ['🍌', '🍊', '🍎']

fruit.slice(0, 1)
fruit.splice(0, 1)
fruit.unshift('🍇')

console.log(fruit)

// C: ['🍇', '🍊', '🍎']

```
First, we invoke the slice method on the fruit array. The slice method does not modify the original array, but returns the value that it sliced off the array: the banana emoji. Then, we invoke the splice method on the fruit array. The splice method does modify the original array, which means that the fruit array now consists of ['🍊', '🍎']. At last, we invoke the unshift method on the fruit array, which modifies the original array by adding the provided value, ‘🍇’ in this case, as the first element in the array. The fruit array now consists of ['🍇', '🍊', '🍎'].

13. ### What's the output?
```js

const user = {
	email: "e@mail.com",
	password: "12345"
}

const updateUser = ({ email, password }) => {
	if (email) {
		Object.assign(user, { email })
	}

	if (password) {
		user.password = password
	}

	return user
}

const updatedUser = updateUser({ email: "new@email.com",password:121212 })

console.log(updatedUser) // B: true

```
The updateUser function updates the values of the email and password properties on user, if their values are passed to the function, after which the function returns the user object. The returned value of the updateUser function is the user object, which means that the value of updatedUser is a reference to the same user object that user points to. updatedUser === user equals true.

14. ###  What's the output?

```js
class Calc {
	constructor() {
		this.count = 0 
	}

	increase() {
		this.count ++
	}
}

const calc = new Calc()
new Calc().increase()

console.log(calc.count) // A: 0

```

We set the variable calc equal to a new instance of the Calc class. Then, we instantiate a new instance of Calc, and invoke the increase method on this instance. Since the count property is within the constructor of the Calc class, the count property is not shared on the prototype of Calc. This means that the value of count has not been updated for the instance calc points to, count is still 0.

15. ### 