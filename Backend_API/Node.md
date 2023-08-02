1. ### What is Node.js?

It is an open-source, runtime JavaScript environment build on V8 Chrome JavaScript engine that runs JavaScript code on Server.

It is a lightweight web framework to develop real-time applications like Voice Over Internet Protocol (VoIP), video-conferencing, online gaming, and data-intensive applications like streaming and e-commerce payment gateways, making Node.js part of web development stacks namely MERN, MEVN, and MEAN stack.

2. ### List the uses of Node.js.

Node.js is used in applications that involve responses instantaneously in real-time.

These include:

Real-time chat, messaging, or online games.
Single-page applications like Gmail, Twitter that run on JavaScript with Node.js as backend.
IoT (Internet of Things) applications like delivery tracking, predictive maintenance, and security software.
Location-based applications such as Global positioning system, Wi-Fi, GeoCouponsAlert mobile applications.
Microservices architecture development which fits event-driven I/O model like PayPal -payment gateway application and Netflix – video streaming application.

3. ###  Compare other popularly used frameworks with Node.js.

Node.js uses asynchronous I/O and single-thread event-driven programming making it unique from other server-side frameworks or technologies such as Ruby on Rails, Java, PHP, and .net. Developers can utilize their JavaScript programming skills in developing server-side applications.

Node.js can improve the performance and scalability of the developed applications, such as REST API data-intensive real-time tracking applications for user statistics and applications that help analyze market trends on commodities, currencies, stokes, futures, options, etc. Developers with JavaScript knowledge can quickly develop node.js APIs for mobile or web integration with ease and flexibility.

Node.js: One of the defining features of Node.js is its event-driven, non-blocking I/O model. This allows Node.js to handle a large number of concurrent connections efficiently, making it particularly suitable for building real-time applications like chat servers, gaming platforms, and streaming applications.

Other Frameworks: Many traditional web frameworks, like Ruby on Rails, Java, PHP, and .NET, typically follow a blocking I/O model, which can lead to scalability challenges when handling a large number of concurrent connections.

Despite being single-threaded, Node.js can still handle concurrent connections efficiently. This is achieved through its non-blocking, event-driven architecture and the use of asynchronous I/O operations.

When Node.js receives a request that involves I/O operations (such as reading from a file or making a network request), instead of waiting for the operation to complete before moving on to the next request, it delegates the I/O operation to the underlying operating system and continues to process other tasks in the meantime.

4. ###  List functionalities of some of the Node.js core modules.

HTTP module contains classes, events, and methods to create Node.js HTTP server.
URL consists of methods for URL parsing and resolution.
fs module has classes, events, and methods that work with file I/O.
path contains methods to deal with file paths.
util is the utility functions useful for programmers that are included in util module.
querystring module consists of methods to deal with the query string.

5. ### What are modules in Node.js? Explain with few examples.

They are primarily divided into the following three types:

Core Modules
Local Modules
Third-Party Modules

```js

var protocol = require("http")
var myserver = protocol.createServer(function(request,response) {
    // write code here
})
myserver.listen(5000)

```

```js

var log_module = require('./Log.js')
log_module.info('Node.js started)

```

6. ### Differentiate between Angular and Node.js

Angular is used by JavaScript developers to develop client-side interactive web applications, whereas Node.js is used to develop fast and scalable network and server-side applications.

Angular is open source web application based on TypeScript – superset of JavaScript, used in front end development	
Node.js is JavaScript runtime environment build using C, C++, JavaScript, used in developing server side JavaScript applications

With Angular single page, client side web applications are designed.
Node.js is used in designing event driven I/O models like Real Time, data intensive applications.

7. ### Explain Event-driven programming.

Programming based on user interactions on the graphical user interface is called Events; like clicking the submit button, selecting an option from the radio button, typing a text into the text field, uploading the image file.

Event handler or listener that can also be a callback is a method that is called. It accepts user input as parameters and performs some tasks on user and browser actions like page load, HTML page popup, etc.

Event-driven programming is a programming paradigm in which the flow of the program is determined by events that occur asynchronously, rather than following a sequential execution of code from top to bottom.

```js

// Event Emitter
const button = document.getElementById('myButton');

// Event Handler
function handleClick(event) {
  console.log('Button clicked!');
}

// Registering the listener (Subscribing to the event)
button.addEventListener('click', handleClick);


```

8. ###  Explain Event Loop in Node.js.

Event Loop is a mechanism that lets Node.js continue performing I/O operations to the system kernel without any interruption. Event loop is initialized by Node.js that processes input script making async API calls, call process.nextTick() or schedule timers followed by event loop processing.

Event loop process timers, pending callbacks, remain idle, prepare for poll for incoming data and connections, checks for next request, and close callback till next request.

9. ### List and explain phases of the Event loop in their order of operation.

Event loop in Node.js follows various phases in the order listed below:

Timers- This is the first phase where scheduled callbacks by functions setTimeOut() and setInterval() for delayed code execution.

Pending callbacks -	Next phase pending callbacks allows I/O callbacks execution that are delayed to next loop iteration.

Idle, prepare -	Followed by idle, prepare phase that are internally applied

Poll -	New I/O events are retrieved, callbacks related to I/O, scheduled by timers and setImmediate() function, node gets block at appropriate points,

Check -	Check invokes setImmediate() callbacks, at end of event loop.

Close callbacks	 - Close callbacks like socket.on() runs between each event loop run. Node.js verifies any timers or asynchronous I/O presence, and shuts these callbacks if no events phase is available.

10. ### Explain the working of Node.js.

Node.js is a runtime environment that has V8 – JavaScript engine, NPM package manager for Node.js, and Libuv libraries.

V8 is a JavaScript engine that converts browser JavaScript and Node.js code into machine code, making JavaScript run everywhere. NPM is a package manager- a package repository that contains library files containing features that can be included in Node.js.

Further, to deal with multiple requests, Node.js uses a concept called Libuv – libraries built in C language. These libraries use a system kernel that uses multiple threads for these requests making Node.js run fast.

11. ### What is Node.js Libuv library and its uses?

Libuv is asynchronous input/output that comes as libraries with Node.js installation.

Asynchronous
TCP & UDP sockets
DNS resolution
File and file system
Thread pool
Signal handling,
Backed with the full-featured event loop
Child processes
File System Events

12. ### Describe NPM and its functionality in Node.js

