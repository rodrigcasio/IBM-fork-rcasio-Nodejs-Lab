// Improved way with explanations by rcasio:
// (The original code as defualt by IBM is bellow)

// 1. This script creates an HTTP server that responds to requests with "hello, everyone!".
// 2. Creates a server instance that uses an arrow function to handle every incoming request.
// 3. Sets the HTTP status code for a successful response.
// 4. Sets teh response header to indicate plain text content.
// 5. Ends the response and sends a message to the client
// 6. Finally, Starts the server and listens for request on the specific port and hostname
// 6.1 This asynchronous pattern prevents your program from just sitting there and waiting for the server to be ready,
//  allowing it to remain responsive and continue handling other tasks if necessary. 

const http = require('http');

const port = 8080;
const hostname = 'localhost';

console.log(`1. Creating server instance.. `);      // synchronous part of the code that runs first 

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    
    res.end(`Hello, everyone!`);  
});

// This is an asynchrounous call. It starts the listening process 
// It hands off the task of binding the server to the operating system
server.listen(port, hostname, () => {
    console.log(`3. Callback executed. Server running at http://${hostname}:${port}/`);         // 3. This is the callback function. it runs LATER, only 
});                                                                                             //      after the server has successfully started listening and OS confirms

console.log(`2. Server setup initialized, but program continues immediately`);

// output order:
// 1. Creating server instance...
// 2. Server setup intiated, but program continues immediately
// 3. Callback executed. Server running at http://localhost:8080/

/*
    Another way to do what is done above

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