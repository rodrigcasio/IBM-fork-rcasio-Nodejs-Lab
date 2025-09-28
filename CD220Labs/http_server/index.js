// Improved way by rcasio:
// The original code as defualt by IBM is bellow:

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

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    
    res.end(`Hello, everyone!`);  
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

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