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

