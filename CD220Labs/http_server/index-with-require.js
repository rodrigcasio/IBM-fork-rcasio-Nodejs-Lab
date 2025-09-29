// Modified syntax by rodrigcasio

// Explanation: 
// 1. The script imports the built-in 'http' module and the custom 'today' module.
// 2. It creates a server instance using 'http.createServer()', passing an anonymous arrow function 
//      as the request handler.
// 3. The request handler uses the templates literals (backticks ``) to construct the response string dynamically 
//    and making use of the method .getDate() by calling the instance of the module today
// 4. The server is started by calling 'server.listen()', including the "port", "hostname" and a callback function. this is an
//    asynchronous operation 
// 5. This use of an asynchronous callback for ".listen" is the standard way to confirm that the server is successfully running 

const http = require('http');
const today = require('./today');         // importing the today module that has a getDate() function

const port = 7070;
const hostname = 'localhost';

const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`Hello, World!. The date today is ${today.getDate()}`);
});

// Asynchronous call
server.listen(port, hostname, () => {   
    console.log(`Callback executed! Server running at http://${hostname}:${port}`);
})


/*
    --- DEFAULT CODE FROM IBM ---

// Import the HTTP module
const http = require('http');

// Import the 'today' module
const today = require('./today');

// Define the request listener function
const requestListener = function (req, res) {
    res.writeHead(200); // Set the status code to 200 (OK)
    // Send the response with the current date from the 'today' module
    res.end(`Hello, World! The date today is ${today.getDate()}`);
};

// Define the port number
const port = 8080;

// Create an HTTP server using the request listener function
const server = http.createServer(requestListener);

// Start the server and listen on the specified port
server.listen(port);
console.log('Server listening on port: ' + port);

*/