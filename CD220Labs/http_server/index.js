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

*/