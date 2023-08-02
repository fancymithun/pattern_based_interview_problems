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