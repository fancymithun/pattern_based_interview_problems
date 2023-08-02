1. ### What is react?

React.js is open source front-end javascript library used for building user interfaces especially single page application.

2.  ### What are the major features of React?

Uses JSX syntax, a syntax extension of JS that allows developers to write HTML in their JS code.
It uses Virtual DOM instead of Real DOM considering that Real DOM manipulations are expensive.
Supports server-side rendering which is useful for Search Engine Optimizations(SEO).
Uses reusable/composable UI components to develop the view.

NOTE : The Virtual DOM is an abstraction of the Real DOM. It is a lightweight copy of the Real DOM and exists in memory. Instead of updating the Real DOM directly for every change, frameworks like React use a Virtual DOM to represent the desired UI state.
The Real DOM represents the actual HTML structure of a web page. 

3. ### What is JSX?

JSX stands for JavaScript XML and it is an XML-like syntax extension to ECMAScript. Basically it just provides the syntactic sugar for the React.createElement(type, props, ...children) function.

```js

export default function App() {
  return (
      <h1 className="greeting">{"Hello, this is a JSX Code!"}</h1>
  );
}

```

If you don't use JSX syntax then the respective JavaScript code should be written as below.

```js

import { createElement } from 'react';

export default function App() {
  return createElement(
    'h1',
    { className: 'greeting' },
    'Hello, this is a JSX Code!'
  );
}

```

4. ### What is the difference between Element and Component?

An Element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components.

```js

const element = React.createElement("div", { id: "login-btn" }, "Login");

```

and this element can be simiplified using JSX

```js

  <div id="login-btn">Login</div>

```

Whereas a component can be declared in several different ways. It can be a class with a render() method or it can be defined as a function. In either case, it takes props as an input, and returns a JSX tree as the output:

```js

const Button = ({ handleLogin }) => (
  <div id={"login-btn"} onClick={handleLogin}>
    Login
  </div>
);

```

5. ### How to create components in React?

Function Components: This is the simplest way to create a component. Those are pure JavaScript functions that accept props object as the first parameter and return React elements to render the output:

```js

function Greeting({ message }) {
  return <h1>{`Hello, ${message}`}</h1>;
}

```

Class Components: You can also use ES6 class to define a component. The above function component can be written as a class component:

```js

class Greeting extends React.Component(){
    render(){
        return <h1>{`Hello, ${this.props.message}`}</h1>
    }
}

```

6. ### When to use a Class Component over a Function Component?

After the addition of Hooks(i.e. React 16.8 onwards) it is always recommended to use Function components over Class components in React. Because you could use state, lifecycle methods and other features that were only available in class component present in function component too.

But even there is one reason to use Class components over Function components.

If you need a React functionality whose Function component equivalent is not present yet, like Error Boundaries.

Note: You can also use reusable react error boundary third-party component without writing any class. i.e, No need to use class components for Error boundaries.

```js

"use client";

import { ErrorBoundary } from "react-error-boundary";

<ErrorBoundary fallback={<div>Something went wrong</div>}>
  <ExampleApplication />
</ErrorBoundary>

```

7. ### What are Pure Components?

In summary, Pure Components in React are components that optimize performance by automatically performing a shallow comparison of props and state. By avoiding unnecessary re-renders, Pure Components can contribute to a more efficient React application.

To understand Pure Components, it's essential to grasp the concept of shallow comparison. When a component's props or state change, React typically re-renders the component and updates the DOM to reflect the changes. However, re-rendering can be an expensive operation, especially for complex components or when unnecessary re-renders occur.

A shallow comparison means that React only compares the top-level references of the props and state objects, rather than deeply comparing their contents. If the shallow comparison finds that the new props and state are the same as the previous ones, React knows that the component's output will remain unchanged. As a result, React can skip the re-rendering process, which leads to improved performance.

```js

import React from 'react';

class MyPureComponent extends React.PureComponent {
  render() {
    return <div>{this.props.title}</div>;
  }
}

```

The syntactic representation of memoized components looks like below,


```js

const MemoizedComponent = memo(SomeComponent, arePropsEqual?);

```

```js

  import { memo, useState } from 'react';

  const EmployeeProfile = memo(function EmployeeProfile({ name, email }) {
    return (<>
          <p>Name:{name}</p>
          <p>Email: {email}</p>
          </>);
  });
  export default function EmployeeRegForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    return (
      <>
        <label>
          Name: <input value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label>
          Email: <input value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <hr/>
        <EmployeeProfile name={name}/>
      </>
    );
  }

```

In the above code, the email prop has not been passed to child component. So there won't be any re-renders for email prop change.

NOTE: React.memo() is a higher-order component.

8. ### What is state in React?

State of a component is an object that holds some information that may change over the lifetime of the component. The important point is whenever the state object changes, the component re-renders. It is always recommended to make our state as simple as possible and minimize the number of stateful components.


 ![state](Images/state.jpg)

 ```js

 import React, { useState } from "react";

function User() {
  const [message, setMessage] = useState("Welcome to React world");

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}
 
 ```

 Let's take an example of User component with message state. Here, useState hook has been used to add state to the User component and it returns an array with current state and function to update it.

 State is similar to props, but it is private and fully controlled by the component ,i.e., it is not accessible to any other component till the owner component decides to pass it.

 9. ### What are props in React?

 Props are inputs to components. They are single values or objects containing a set of values that are passed to components on creation similar to HTML-tag attributes. Here, the data is passed down from a parent component to a child component.

 import React from "react";
import ReactDOM from "react-dom";

```js

const ChildComponent = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.age}</p>
    </div>
  );
};

const ParentComponent = () => {
  return (
    <div>
      <ChildComponent name="John" age="30" />
      <ChildComponent name="Mary" age="25" />
    </div>
  );
};

```
The properties from props object can be accessed directly using destructing feature from ES6 (ECMAScript 2015). The above child component can be simplified like below.

```js

  const ChildComponent = ({name, age}) => {
      return (
        <div>
          <p>{name}</p>
          <p>{age}</p>
        </div>
      );
    };

```

10. ### What is the difference between state and props?

In React, both state and props are plain JavaScript objects and used to manage the data of a component, but they are used in different ways and have different characteristics. state is managed by the component itself and can be updated using the setState() function. Unlike props, state can be modified by the component and is used to manage the internal state of the component. Changes in the state trigger a re-render of the component and its children. props (short for "properties") are passed to a component by its parent component and are read-only, meaning that they cannot be modified by the component itself. props can be used to configure the behavior of a component and to pass data between components.

11. ### Why should we not update the state directly?

If you try to update the state directly then it won't re-render the component.

```js

//Wrong
this.state.message = "Hello world";

```

```js

//Correct
this.setState({ message: "Hello World" });

```

12. ### What is the purpose of callback function as an argument of setState()?

The callback function is invoked when setState finished and the component gets rendered. Since setState() is asynchronous the callback function is used for any post action.

Note: It is recommended to use lifecycle method rather than this callback function.

```js

setState({ name: "John" }, () =>
  console.log("The name has updated and component re-rendered")
);

```

13. ### What is the difference between HTML and React event handling?

Below are some of the main differences between HTML and React event handling,

In HTML, the event name usually represents in lowercase as a convention:

```js

<button onclick="activateLasers()">Activate</button>

```

Whereas in React it follows camelCase convention:

```js

<button onClick={activateLasers}>Activate</button>

```

In HTML, you can return false to prevent default behavior:

```js

<a
  href="#"
  onclick='console.log("The link was clicked."); return false;'
/>

```

Whereas in React you must call preventDefault() explicitly:

```js

function handleClick(event) {
  event.preventDefault();
  console.log("The link was clicked.");
}

```