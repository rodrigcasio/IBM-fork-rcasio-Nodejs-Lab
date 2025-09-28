// Improved way with explanations by rodrigcasio :
// (The original code as defualt by IBM is bellow)


// A Node.js HTTP server.
// 1.  The script imports the built-in `http` module to handle HTTP functionality.
// 2.  It creates a server instance using `http.createServer()`, passing an arrow function
//     as the request handler to manage all incoming requests.
// 3.  This request handler function sets the HTTP status code to 200 (OK) and the
//     `Content-Type` header to `text/plain`.
// 4.  It then sends the response "Hello, everyone!" to the client and closes the connection.
// 5.  The server is started by calling `server.listen()`, which is an asynchronous operation.
// 6.  A callback function is provided to `listen()` that executes only after the server
//     has successfully started and is ready to accept connections.

const http = require('http');

const port = 8080;
const hostname = 'localhost';

console.log(`1. Creating server instance.. `);      // synchronous part of the code that runs first 

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    
    res.end(`Hello, everyone! This is a response from the server!!!`);  
});

// This is an asynchrounous call. It starts the listening process 
// It hands off the task of binding the server to the operating system
server.listen(port, hostname, () => {
    console.log(`3. Callback executed. Server running at http://${hostname}:${port}/`);         // 3. This is the callback function. it runs LATER, only 
});                                                                                             //      after the server has successfully started listening and OS confirms

console.log(`2. Server setup initialized, but program continues immediately`);    // This synchronous code runs immediately after the 'server.listen()' call
                                                                                  // because the program does not wait for the asynchronous operation to complete 

// output order:
// 1. Creating server instance...
// 2. Server setup intiated, but program continues immediately
// 3. Callback executed. Server running at http://localhost:8080/






/*
    SIMPLIFIED  WITH NO COMMENTS AND SYNCHROUNS OPERATIONS:

    const http = require('http');
    const port = 8080;
    const hostname = 'localhost'
    
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain'):

        res.end('Hello, World!');
    });

    server.listen(port, hostname, () => {
        console.log(`Server running at http://${host}:${port}/`);
    })

HOW THE CODE WAS BY DEFAULT:
    
 // Import the HTTP module
const http = require('http');

// Define the request listener function
const requestListener = (req, res) => {
    res.writeHead(200); // Set the status code to 200 (OK)
    res.end('Hello, World!'); // Send the response "Hello, World!"
};

// Define the port number
const port = 8080;

// Create an HTTP server using the request listener function
const server = http.createServer(requestListener);

// Start the server and listen on the specified port   
server.listen(port);
console.log('Server listening on port: ' + port);

*/