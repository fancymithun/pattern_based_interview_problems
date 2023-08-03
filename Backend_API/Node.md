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

Node Package Manager (NPM) is an online repository of JavaScript libraries that has more than 350,000 packages that can be utilized to build efficient applications and Node.js projects with ease.

It is a command-line utility for accessing an online repository that facilitates inversion and dependency management and package installation. Various features can be searched from this repository here.

Once found you can install it on your client machine by running the command – npm install feature_file. You can use the feature by using require(‘./feature_file’) in JavaScript code.

13. ### Explain REPL with context to Node.js

Here's a simple example of using the Node.js REPL:

Open a terminal or command prompt.
Type node and press Enter to start the REPL.
You should see the REPL prompt (>) waiting for your input.
Type 2 + 3 and press Enter.
The REPL will evaluate the expression and print the result: 5.
The REPL goes back to the Read phase, and you can enter more JavaScript code as needed.
The REPL is a powerful tool for experimenting and learning, and it can be especially helpful when working with Node.js or any JavaScript-related tasks in a development environment.

14. ### Explain Error first callback in Node.js.

```js

var fs = require('fs')
const file_name = "testfile.txt"

const ErrorFirstCallback = (err,data) => {

  if(err){
    return console.log(err)
  }

  console.log("Successful execution of function")
}

fs.readFile(file,ErrorFirstCallback)

```

15. ### Differentiate spawn() and fork() methods in Node.js.

spawn() is used to launch a new process in Node.js, and it provides more control over the execution of the child process.

```js

const { spawn } = require('child_process');
const ls = spawn('ls', ['-l', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});


```

fork() is a special case of spawn() designed specifically for creating child processes that run Node.js modules. It is useful for launching separate Node.js instances to utilize multiple CPU cores efficiently.

```js

const { fork } = require('child_process');
const child = fork('./child.js');

child.on('message', (message) => {
  console.log(`Message from child: ${message}`);
});

child.send('Hello from parent!');


```

```js

// child.js
process.on('message', (message) => {
  console.log(`Message from parent: ${message}`);
  process.send('Hello from child!');
});

```

In summary, spawn() is used for running external commands or executables and communicating through standard streams, while fork() is designed specifically for creating Node.js child processes that can communicate with the parent process through messaging.

16. ### What are differences between process.nextTick() and setImmediate() function?

In summary, while both process.nextTick() and setImmediate() are used to schedule callbacks in Node.js, process.nextTick() has a higher priority and executes callbacks immediately after the current phase, while setImmediate() schedules callbacks to run in the next iteration of the event loop, after I/O events and timers. Additionally, setImmediate() is generally safer for recursive patterns due to its behavior in the event loop.

17. ### What are streams in Node.js?

In Node.js, streams are a fundamental concept used to handle data in a flowing and efficient manner. 

Node.js provides built-in modules like fs (file system), http, and net that use streams for various I/O operations. Additionally, you can create custom streams by extending the stream module classes to fit specific use cases.

```js

const fs = require('fs');

const readableStream = fs.createReadStream('input.txt');

readableStream.on('data', (chunk) => {
  console.log(chunk.toString());
});

readableStream.on('end', () => {
  console.log('Read operation completed.');
});


```

```js

const fs = require('fs');

const writableStream = fs.createWriteStream('output.txt');

writableStream.write('Hello, ');
writableStream.write('Node.js!');
writableStream.end();

writableStream.on('finish', () => {
  console.log('Write operation completed.');
});


```

```js

const net = require('net');

const server = net.createServer((socket) => {
  socket.pipe(socket); // Echoes back the data received from the client
});

server.listen(3000, () => {
  console.log('TCP echo server is listening on port 3000.');
});


```

18. ### How Crypto is used in Node.js?

Crypto module of Node.js contains OpenSSL’s hash, HMAC, cipher, decipher, sign and verify functions. An algorithm created by the crypto module is used for data encryption and decryption, for storing passwords in the database in encrypted form.

19. ### How DNS module is used in Node.js?

```js

const dns = require('node:dns');
const options = {
  family: 6,
  hints: dns.ADDRCONFIG | dns.V4MAPPED,
};
dns.lookup('example.com', options, (err, address, family) =>
  console.log('address: %j family: IPv%s', address, family));
// address: "2606:2800:220:1:248:1893:25c8:1946" family: IPv6

// When options.all is true, the result will be an Array.
options.all = true;
dns.lookup('example.com', options, (err, addresses) =>
  console.log('addresses: %j', addresses));
// addresses: [{"address":"2606:2800:220:1:248:1893:25c8:1946","family":6}]

```

20. ### Use of URL module in Node.js

Uniform Resource Identifier (URL) is composed of various portions such as protocol, host and port, filepath, and filename. URL module of Node.js help split web address (URL) into sections that user can understand.

```js

var myurl = require('url');
var web_addr ='http://localhost:8080/support/pages/page_one.html?year=2021&amp;month=may';
var str = myurl.parse(web_addr, true);
 
console.log(str.host); //returns hostname i.e. 'localhost:8080'
console.log(str.pathname); // returns filepath - i.e. 'support/pages/page_one.html'
console.log(str.search); // returns '?year=2021&amp;month=may'
 
var datapoint = str.query; // returns an object =&gt; { year : 2021, month : 'may' }
console.log(datapoint.month); //returns 'may'


```

21. ### Explain package.json file of Node.js

package.json is a JSON file present at the root directory of Node.js and contains metadata about projects like description, version, distribution, license, configuration related to end-user of project, and npm. This file identifies the project and handles the dependencies, provides information about project metadata values to npm.

22. ### List some of the Node.js libraries often used?

These are as follows:

Express: It is a web framework for node.js
Socket.io: It is for event-based real-time communication
Cors: Node.js pack to provide connect/express middleware
Passport: It is used to authenticate requests with strategies extensible plugins
Axios: HTTP client who is Promise based for node.js and browser
Multer: Handles multipart/form-data and file uploads
Morgan: A Node.js middleware that is an HTTP request logger
HTTP: errors – It helps to generate HTTP errors for Connect, Koa, and Express

23. ### What is the most suitable database used along with Node.js?

Cassandra, CouchDB, MySQL, MongoDB, Neo4j, Oracle, PostgreSQL, and ElasticSearch are some of the databases used along with Node.js. We can install the connection drivers for these Databases with the command npm install driver_name.

However, MongoDB is more suitable for back-end management with Node.js.

24. ### Explain Buffer class in Node.js with code example

In Node.js, the Buffer class is a built-in class that provides a way to handle binary data efficiently. It is a global object and part of the Node.js core API. Buffers are used to work with raw binary data and are particularly useful for handling network communication, file system operations, and other data-intensive tasks.

Unlike Unicode, JavaScript does not support binary data. To process TCP streams or file systems, it is important to handle octet streams. Buffer class in Node.js offers instances that store raw data and allocate raw memory outside V8 heap.

```js

// Example 1: Creating and Manipulating Buffers

// Creating a Buffer with a string (using 'utf-8' encoding by default)
const buffer1 = Buffer.from('Hello, Node.js!');
console.log(buffer1); // <Buffer 48 65 6c 6c 6f 2c 20 4e 6f 64 65 2e 6a 73 21>

// Creating an empty Buffer with a specific size (10 bytes)
const buffer2 = Buffer.alloc(10);
console.log(buffer2); // <Buffer 00 00 00 00 00 00 00 00 00 00>

// Writing data to the Buffer
buffer2.write('Node.js');
console.log(buffer2); // <Buffer 4e 6f 64 65 2e 6a 73 00 00 00>

// Reading data from the Buffer
console.log(buffer2.toString()); // 'Node.js'

// Example 2: Concatenating Buffers

const buffer3 = Buffer.from('Hello, ');
const buffer4 = Buffer.from('Node.js!');
const concatenatedBuffer = Buffer.concat([buffer3, buffer4]);
console.log(concatenatedBuffer.toString()); // 'Hello, Node.js!'

```

25. ### How assert is used in Node.js?

Note that the assert module is generally used for simple tests and basic sanity checks. For more comprehensive and complex testing scenarios, you should consider using dedicated testing frameworks like Mocha, Jest, or AVA, which provide more advanced testing features and reporting capabilities.

```js

const assert = require('assert');

// Example 1: Simple Assertion
function add(a, b) {
  return a + b;
}

assert.strictEqual(add(2, 3), 5, 'The sum should be 5.');

// Example 2: Custom Error Message
const arr = [1, 2, 3, 4, 5];
assert(arr.length === 5, 'Array length should be 5.');

// Example 3: Deep Equality Check
const obj1 = { name: 'John', age: 30 };
const obj2 = { name: 'John', age: 30 };
assert.deepStrictEqual(obj1, obj2, 'Objects should be deep equal.');

// Example 4: Fail Assertion
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return a / b;
}

assert.throws(() => divide(10, 0), Error, 'Expected an error.');


```

26. ### Describe Timer() module methods in Node.js

Timer module has various methods like setTimeout(), setImmediate(), setInterval().

setTimeout() helps schedule code execution after specified interval in milliseconds.

Syntax:

```js

setTimeout(callback, delay_in_ms, args)

```
setInterval() helps calling a function at specified interval, once after desired period.

```js

setTimeout()

```

setImmediate() execute code at end of current event loop.

Syntax:

```js

setImmediate(callback, args)

```

27. ### Explain EventEmitter in Node.js with exxample

In Node.js, the EventEmitter is a core class that facilitates communication between different parts of an application using an event-driven programming paradigm. It allows certain objects (known as "emitters") to emit named events, and other objects (known as "listeners" or "subscribers") can listen for and respond to those events. This pattern is widely used for handling asynchronous and decoupled interactions within Node.js applications.

To use the EventEmitter, you first need to create an instance of it and then define event handlers for specific events. You can emit events using the emit() method, and registered event listeners will respond to those events by executing their associated callback functions.

```js

const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Define an event handler for the 'greet' event
eventEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

// Define another event handler for the 'greet' event
eventEmitter.on('greet', (name) => {
  console.log(`Greetings, ${name}!`);
});

// Emit the 'greet' event with a parameter
eventEmitter.emit('greet', 'John');

// output

// Hello, John!
// Greetings, John!


```
