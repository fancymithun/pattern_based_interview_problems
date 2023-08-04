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

14. ### Why does strict mode render twice in React?

StrictMode renders components twice in development mode(not production) in order to detect any problems with your code and warn you about those problems. This is used to detect accidental side effects in the render phase. If you used create-react-app development tool then it automatically enables StrictMode by default.

```js

ReactDOM.render(
  <React.StrictMode>
    {App}
  </React.StrictMode>,
  document.getElementById('root')
);

```

If you want to disable this behavior then you can remove strict mode.

```js

ReactDOM.render(
  {App}, 
  document.getElementById('root')
);

```

15. ### What are hooks in react?

Hooks provide a way to use state, lifecycle methods, context, and other React features without the need to write a class. They enable functional components to have their own internal state and to tap into React's lifecycle and features. The most commonly used hooks are useState, useEffect, and useContext, among others.

Here are some commonly used hooks in React:

useState: This hook allows functional components to have local state. It returns a stateful value and a function to update that state.

```jsx

import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};


```

useEffect: This hook allows functional components to perform side effects like data fetching, subscriptions, or manually changing the DOM. It replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.

```jsx

import React, { useState, useEffect } from 'react';

const DataFetchingComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    setData(data);
  };

  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};


```

useContext: This hook allows functional components to consume data from a React context. It provides an alternative to using the Consumer in class components.

```jsx

import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ThemedHeader = () => {
  const theme = useContext(ThemeContext);

  return (
    <header style={{ background: theme.background, color: theme.color }}>
      Themed Header
    </header>
  );
};


```

16. ### What is react fiber?

React Fiber is a new engine in React. It is the core implementation core algorithm in React 16.

The main goal of React Fiber is to ensure that there are incremental rendering facilities for the virtual DOM. This increases efficiency when rendering animations, gestures, etc., and also helps in assigning priority to updates based on the requirement, thereby increasing overall efficiency.

React Fiber is an internal implementation detail of React and is not something that developers interact with directly. Instead, it's the foundation on which React's public API and component model are built to provide the benefits of incremental rendering, concurrency, and time-slicing.

```jsx

import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // This update will be executed incrementally by React Fiber
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Cleanup function for useEffect
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div>{count}</div>;
};

```

React Fiber is what enables this kind of declarative, asynchronous, and interruptible updating. When the component mounts, React will start rendering and updating the DOM incrementally in small units of work. It means that while the interval is running and updating the count every second, React can still handle other tasks, like handling user interactions, processing other components' updates, or rendering other parts of the UI concurrently without getting blocked by this interval. This leads to smoother user interactions and a more responsive user interface.

17. ### What are the predefined prop types present in React?

There are five main predefined prop types in React. They are as follows:

PropTypes.bool
PropTypes.func
PropTypes.node
PropTypes.number
PropTypes.string

```jsx

import PropTypes from 'prop-types'

class User extends React.Component {
  render() {
    return (
      <h1>Welcome, {this.props.name}</h1>
      <h1>Age, {this.props.age}</h1>
    )
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}

```

18. ### What is the difference between using getInitialState and constructors in React?

Let's explore the key differences between these two approaches:

getInitialState:
getInitialState is a special method used in React components that extend React.createClass.
It is used to define the initial state of the component before it is mounted.
This method was part of the "classic" React syntax and is not used in modern React applications with functional components or class components created using ES6 classes.
Here's an example of how getInitialState was used in the older syntax:

```jsx

const MyComponent = React.createClass({
  getInitialState: function () {
    return {
      count: 0
    }
  },
  render : function () {
    return <div>{this.state.count}</div>
  }
})

```

Constructor:
Constructors are standard JavaScript class features introduced with ES6 classes. They are used to initialize an instance of the class and set up its initial state and other configurations.
In modern React applications, you'll typically create components as ES6 classes, and the constructor is used to set up the initial state using this.state = {}.
Here's an example of using a constructor in a modern React class component:

```jsx
import React, {Component} from 'react'

class MyComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

  render() {
    return <div>{this.state.count}</div>
  }
}

```

The equivalent of getInitialState or constructors in functional components is the useState hook.


```jsx
import React,{UseState} from 'react'

const MyComponent = () => {

  const [count,setCount] = useState(0)

  return (
    <div>Count: {count}</div>
  )
}

```

19. ### Why are props passed to the super() function in React?

In React, when creating a class component using ES6 classes, you need to call the super() function inside the constructor before you can access this.props. This is because super() is responsible for calling the constructor of the parent class (in this case, React.Component), and it needs to be called before you can use this in the constructor.

The props object is a special property in React class components that represents the input data passed to the component from its parent component. When you call super(props) inside the constructor, you are calling the constructor of the parent class (i.e., React.Component) and passing the props object to it. This allows the parent class to set up the component with the provided props and other necessary configurations.

Here's an example of a React class component with a constructor and the super() function to handle props:

```jsx

import React, {Component} from 'react'

class MyComponent extends Component {
  contructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

  render(){
    return (
      <div>{this.props.count}</div>
    )
  }
}

```

In this example, MyComponent is a class component that extends React.Component. When calling super(props) inside the constructor, we are passing the props object to the constructor of React.Component. This allows the base class (React.Component) to handle the props and set up the component appropriately.

20. ### Can you conditionally add attributes to components in React?

Yes, you can conditionally add attributes to components in React. The JSX syntax allows you to dynamically set attributes based on conditions using JavaScript expressions. You can use regular JavaScript constructs like if statements, ternary operators, or logical AND (&&) to conditionally add attributes to components.

Using the ternary operator:

```jsx

const MyComponent = ({isSpecial}) => {

  return (
    <div>
      <p>{isSpecial ? "Special Component" : "Regular Component"}</p>
      <button disabled={isSpecial}></button>
    </div>
  )
}

```

```jsx
import React from 'react';

const MyComponent = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn && <p>Welcome, you are logged in!</p>}
      {/* Additional content */}
    </div>
  );
};


```

21. ### What would you do if your React application is rendering slowly?

React.PureComponent:
React.PureComponent is a class component and should be used when you have a component that primarily depends on its props and doesn't have complex state changes. It provides a shallow comparison of props and state to determine whether the component should re-render. If the props and state haven't changed, the component won't re-render.

```jsx

import React from 'react';

class MyComponent extends React.PureComponent {
  render() {
    // Rendering based on this.props and this.state
    return <div>{this.props.data}</div>;
  }
}

```

React.memo:
React.memo is a higher-order component (HOC) and can be used with functional components. It works similarly to React.PureComponent but for functional components. It prevents re-renders of the functional component if its props have not changed.

```jsx
import React from 'react';

const MyComponent = React.memo(({ data }) => {
  // Rendering based on data
  return <div>{data}</div>;
});

```

the key difference is that React.PureComponent is used with class components, and React.memo is used with functional components, but both serve a similar purpose: to optimize rendering by avoiding unnecessary re-renders when the props or state haven't changed.

22. ### Why is the StrictMode component used in React?

When you wrap parts of your application with StrictMode, React will perform various checks during development mode to catch potential issues. It helps you write better code and ensures that your application adheres to best practices and future-proof patterns.

Detecting Unsafe Lifecycle Methods and Legacy API Usage:
StrictMode will issue warnings if you use unsafe lifecycle methods like componentWillReceiveProps, componentWillUpdate, and componentWillMount. These methods are considered legacy and might be deprecated in future versions of React. By using StrictMode, you can identify and update your code to use the latest lifecycle methods or functional components with hooks.

Identifying Deprecated Features:
If you use any deprecated features or APIs in React, StrictMode will issue warnings, reminding you to update your code to use the latest recommended alternatives.

Detecting Unstable Functions:
StrictMode will issue warnings if you use unstable functions like findDOMNode, which can lead to potential issues with concurrent rendering and future React versions.

Spotting Potential Side Effects During Render:
StrictMode helps you identify potential issues where the render phase depends on unexpected side effects, which can lead to subtle bugs.

Detecting Deprecated String Refs:
If you use string refs (ref="myRef") instead of the recommended callback refs, StrictMode will issue a warning, encouraging you to switch to the modern approach.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


```


23. ###  Is there a way to avoid the requirement of binding when using React?

Yes, there are two main ways you can use to avoid the need for binding. They are as follows:

Defining the Event Handler as an Inline Arrow function:

```jsx

class SubmitButton extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      isFormSubmitted = false
    }
  }

  render(){
    return (
      <button onClick={() => {
        this.setState({isFormSubmitted : true})
      }}>Submit</button>
    )
  }
}

```

Using a function component along with Hooks:

```jsx

const SubmitButton = () => {

const [isFormSubmitted, setIsFormSubmitted] = useState(false);

return (

<button onClick={() => {

setIsFormSubmitted(true);

}}>Submit</button>

)
};

```

24. ### What is the use of the second argument that is passed to setState? Is it optional?

When setState is finished, a callback function is invoked, and the components get re-rendered in React.

Yes, the setState function in programming allows for an optional argument, typically a callback function, since it operates asynchronously. However, it is generally considered best practice to utilize alternative lifecycle methods instead of relying solely on this approach.

```jsx
import React, {Component} from 'react'

class MyComponent extends Component {
  state = {
    count: 0
  }

  handleClick = () => {
    this.setState((prevState) => ({count : prevState.count + 1}), () => {
      console.log("State updated":,this.state.count)
    })
  }


  render(){
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    )
  }
}


```

25. ### What is the difference between cloneElement and createElement in React?

createElement and cloneElement are both methods in React used for creating and manipulating React elements, but they serve different purposes:

createElement is a method provided by React for creating React elements. It is used to create a new React element with a specified type, props, and children. It's the fundamental method used to create elements in React.

```jsx
import React from 'react'

const MyComponent = () => {
  const element = React.createElement('div',{className: 'my-class'},'Hello, World!')
  return element
}

```

cloneElement:
cloneElement is a method provided by React used to clone an existing React element and optionally modify its props or add new children. It's particularly useful when you want to pass down additional props to an element while keeping its original type and children intact.

```jsx
import React from 'react';

const ParentComponent = () => {

  const element = <div className="child">Hello, Child!</div>
  const modifiedELement = React.cloneElement(element, {style : { color : 'red'}})
  return (
    <div>
     {element}
     {modifiedELement}
    </div>
  )
}

```

The key difference is that createElement is used to create a new React element from scratch, while cloneElement is used to clone an existing element and optionally modify its props or add new children

26. ### How can you tell React to build in production mode?

React can be coded to directly build into production by setting the process.env.NODE_ENV variable to production.

Note: When React is in production, warnings, and other development features are not shown.

27. ### Differentiate between a controlled component and an uncontrolled component in React.

A controlled component, as the name suggests, is a component over which React has complete control. It is the singular point of data for the forms.

```jsx

import React, { useState } from 'react';

const ControlledInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Value: {inputValue}</p>
    </div>
  );
};

```

An uncontrolled component is one where the form data gets handled by DOM and not the React component. This is usually done using refs in React.

An uncontrolled component, on the other hand, does not manage its state through React. Instead, it relies on the DOM to manage its state. The component reads its current value from the DOM, and React does not control the value.

```jsx
import React from 'react';

const UncontrolledInput = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.target.elements.myInput.value;
    console.log('Submitted value:', inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="myInput" defaultValue="Initial Value" />
      <button type="submit">Submit</button>
    </form>
  );
};

```

In this example, the UncontrolledInput component is uncontrolled because it does not manage the input's state through React. It uses the defaultValue prop of the input element to set the initial value, and when the form is submitted, it reads the current value directly from the DOM using event.target.elements.myInput.value.

28. ### What are the keys in React?

Optimizing List Updates:
When an element is added, removed, or reordered in a list, React uses the keys to efficiently update the Virtual DOM and determine the minimum number of changes needed. This helps in improving performance, as React can identify which components need to be updated, added, or removed with minimal overhead.

Preserving State and Avoiding Unnecessary Re-Rendering:
Keys help React maintain component state when re-rendering a list. If a component has a key, React remembers it. When the list is updated, React will preserve the state of components with matching keys, reducing unnecessary re-renders and maintaining any user-interaction or input data.

The keys should be stable, unique, and consistent across re-renders. Using the index of the array as a key is not recommended, as it can lead to performance issues and incorrect behavior, especially when the list order changes.

```jsx

function List({todos}){

  return (
    <ul>
      {todos.map((todo,id) => {
        <li key={id}>{todo}</li>
      })}
    </ul>
  )
}

```

29. ### What are higher-order components (HOCs) used for?

Higher-order components (HOCs) are a design pattern in React used for code reuse, abstraction, and sharing behavior among multiple components. HOCs are functions that take a component as input and return a new component with additional props or behavior. They provide a way to enhance or modify the functionality of components without changing their implementation.

```jsx

import React,{Component} from 'react'

const withLoading = (WrappedComponent) => {
  return class WithLoading extends Component {
    state = {
      isLoading: true
    }
  }

  componentDidMount() {
    setTimeout (() => {
      this.setState({isLoading : false})
    },1000)
  }

  render() {

    const {isLoading} = this.state;

    return (
      return isLoading ? <div>Loading...</div> : <WrappedComponent {...this.props} />
    )
  }
}

const MyComponent = ({data}) => {
  return (
    <div>Data: {data}</div>
  )
}

const MyComponentWithLoading = withLoading(MyComponent)

```

The main use cases for higher-order components are as follows:

Code Reusability: HOCs enable you to encapsulate logic that can be reused across different components. Instead of duplicating the same logic in multiple components, you can create an HOC and apply it to any component that needs that behavior.

Cross-Cutting Concerns: HOCs allow you to add cross-cutting concerns to components, such as logging, authentication, or data fetching. These concerns are not specific to any single component but are needed across multiple components in your application.

Behavior Composition: With HOCs, you can compose behaviors and functionalities by combining multiple HOCs together. This promotes a more modular approach to building components, where each HOC focuses on a specific concern, and you can mix and match them as needed.

Conditional Rendering and Data Manipulation: HOCs can conditionally render components or manipulate data based on certain conditions. They can modify or enhance the props passed to the wrapped component.

Props Proxying and Manipulation: HOCs can intercept and modify props before passing them down to the wrapped component. This allows you to change or add props dynamically.

30. ### What are pure components in React?


In React, "Pure Components" are a type of class component that perform a shallow comparison of props and state to determine whether a re-render is necessary. 

If you were to use a regular class component instead of a pure component, the component would re-render every time the state changes, even if the new state is the same as the previous state. However, because Counter is a pure component, React performs a shallow comparison of the state during the shouldComponentUpdate check and avoids unnecessary re-renders.

Keep in mind that the shallow comparison done by pure components only checks the first level of props and state. If your component receives complex data structures (e.g., nested objects or arrays) that need to be deeply compared, you should use a custom shouldComponentUpdate implementation or consider using the React.memo Higher-Order Component with functional components, which allows you to define a custom comparison function.

```jsx

import React, { PureComponent } from 'react';

class Counter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    console.log('Counter rendered');
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

```

31. ### What are the disadvantages of using MVC in React?

Overcomplication: React's component-based architecture already provides a clear separation of concerns by dividing the UI into reusable components. Trying to enforce the MVC pattern might introduce unnecessary complexity, making the codebase harder to understand and maintain.

Confusion Over State Management: In MVC, the controller is responsible for handling user input and updating the model and view accordingly. In React, state management is handled within components, and data flow is more straightforward. Attempting to fit an MVC pattern might lead to confusion about where to manage state and data.

Loss of React's Benefits: React's strength lies in its component-based approach and the unidirectional data flow. Attempting to retrofit an MVC pattern might lead to losing the benefits that React provides out of the box, like its efficient Virtual DOM rendering and one-way data flow.

Non-Standard Approach: Most React developers are used to the component-based approach, and applying MVC-like patterns might introduce a non-standard approach to the codebase. This could make it harder for new developers to understand and contribute to the project.

src/
  |- components/
  |     |- views/        (React components that represent the views)
  |     |- controllers/  (Handlers for managing component logic)
  |     |- models/       (Data models or interfaces for the components)
  |
  |- services/           (Utility functions, API calls, etc.)
  |- styles/             (Global styles or style-related files)
  |- App.js              (Main component that ties everything together)
  |- index.js            (Entry point to the application)


components/views:
This directory contains React components that represent the views in your application. Each component should focus on rendering the UI and should not handle complex logic or state management.

components/controllers:
This directory contains components that handle the business logic or interaction logic of your application. They can manage state, handle user input, and orchestrate communication between different components.

components/models:
This directory can contain data models, interfaces, or other types of structures that represent the data used within the components. These models help in maintaining a consistent data structure throughout the application.

services:
This directory includes utility functions, API calls, or other services that your components may need. It's a good place to centralize code that communicates with external APIs or performs other side effects.

styles:
In this directory, you can keep global styles, themes, or any style-related configuration files.

App.js:
This is the main component of your application, which ties all the other components together and manages the routing or navigation if needed.

index.js:
This is the entry point of your application, where you mount the main component (App.js) to the DOM.

32. ### What are the advantages of using Redux?

Community	- Redux has a larger community, helping users with efficient and easy-to-use libraries

Developer Tools	- Developers can track actions and all of the tools in React using Redux easily

Testing Ability - Redux functions are small and isolated, making the code more independent and testable

Redux is a state management library for JavaScript applications, commonly used with React. It provides a predictable and centralized way to manage application state, which offers several advantages:

Centralized State Management: Redux maintains the entire state of the application in a single store. This centralization makes it easy to understand, debug, and reason about the application's data flow and state changes.

Predictable State Updates: Redux enforces a strict unidirectional data flow, making state changes predictable and easier to debug. The state can only be modified through actions, which are plain JavaScript objects describing what happened in the application.

Time Travel and DevTools: Redux's devtools enable developers to inspect the application state at any point in time, facilitating time-travel debugging. You can replay actions and see how the state changes with each action, which is a powerful tool for debugging and understanding application behavior.

Easier State Sharing: Since the entire state is in one store, it's easy to share data between different components or even across routes in complex applications. This avoids prop drilling and helps in maintaining data consistency.

Easy Integration with Other Libraries: Redux is not tied to any specific framework and can be used with React, Angular, Vue, and other JavaScript libraries. This flexibility makes it easier to integrate Redux into existing projects or switch between frameworks.

33. ### What are the components of Redux in React?

Redux consists of four main components as shown below:

Action: An object that describes the call
Reducer: The state change storage unit
Store: The state and object tree storage
View: Displays data provided by the store

Actions are plain JavaScript objects that represent events or changes that occur in the application. They are dispatched from components and are the only way to signal the Redux store that something needs to change. Actions typically have a type property that describes the type of action and additional data payload if needed.

Example action:

```jsx

const increaseCounter = (amount) => {
  return {
    type: 'INCREMENT_COUNTER',
    payload: amount
  }
}

```

Reducers:
Reducers are pure functions that take the current state and an action as input and return a new state. They define how the state should change in response to specific actions. Reducers should never mutate the state directly; instead, they create a new state object reflecting the changes.

Example reducer:

```jsx

const counterReducer = (state=0,action) => {
  switch(action.type){
    CASE 'INCREMENT_COUNTER':
      return state + action.payload
    CASE 'DECREMENT_COUNTER':
      return state - action.payload
    default:
      return state
  }
}

```

Store:
The Redux store is a single source of truth for the application state. It holds the entire state tree of your application and is responsible for dispatching actions to the reducers, updating the state, and notifying the React components when the state changes.
Example store setup:

```jsx

import {createStore} from 'redux'
import counterReducer from './reducers/counterReducer'

const store = createStore(counterReducer)

```

```jsx

import react from 'react'
import {useSelector,useDispath} from 'react-redux'
import {incrementCounter,decrementCounter} from './actions/counterActions'

const CounterComponent () => {
  const counter = useSelector((state) => state)
  const dispatch = useDispatch()

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={() => dispath(incrementCounter(1))}>Increment</button>
      <button onClick={() => dispatch(decrementCounter(1))}>Decrement</button>
    </div>
  )
}

```

By combining these three components, React can easily integrate with Redux to manage the application state in a predictable and centralized manner. Actions represent events, reducers define how state changes, and the store manages the state and dispatches actions to trigger updates throughout the application.

34. ### Why is a router required in React?

A router is very much necessary in React as it is used to manage multiple routes whenever a user types in a URL. If the route is present in the router for that corresponding URL, then the user is taken to the particular route.

A router is required in React (or any single-page application framework) to enable navigation and handle the changing views or content based on the URL. In a single-page application (SPA), the entire application loads once, and subsequent interactions or page changes happen without a full page refresh. The router helps manage these changes and allows users to navigate between different views or pages within the application.

To do this, the router library needs to be added in React. It can be done using the following syntax:

```jsx

<switch>

  <route exact path='/' component={Home}/>

  <route path='/posts/:id' component={Newpost}/>

  <route path='/posts'   component={Post}/>

</switch>

```

35. ### What are controlled components in React?

Controlled components in React refer to the components that have the ability to maintain their state. The data is completely controlled by the parent component, and the current value is fetched by making use of props. This is done to notify users of any changes that occur when using callbacks.

36. ### What are refs in React?

Refs are typically used in situations where you need to interact with the DOM directly, such as focusing an input field, triggering animations, or measuring the size or position of a DOM element. It's important to note that using refs to access DOM elements directly should be minimized in React applications, as it goes against the unidirectional data flow and can lead to code that is harder to understand and maintain. Refs should be used sparingly and only when there's no other way to achieve a certain behavior through React's regular data flow mechanisms.

This is also considered uncontrolled component.

Using useRef() (Functional Component):

```jsx

import React, {useRef} from 'react'

const MyComponent = () => {

  const ref = useRef(null)

  const handleClick = () => {
     ref.current.focus()
  }


  return (
    <>
      <input ref={ref} type="text" />
      <button onClick={handleClick}>Focus Input</button>
    </>
  )
}


```

37. ### What are stateful components in React?

