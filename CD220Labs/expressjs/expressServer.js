 // Import the Express.js library
const express = require('express');

// Create an instance of an Express application
const app = new express();

// Initialize an array to store login details
let loginDetails = [];

app.use(express.json());

// Define the root route to send a welcome message
app.get("/", (req, res) => {
    res.send("Welcome to the express server");
});

// Define a route to send login details as a JSON string
app.get("/loginDetails", (req, res) => {
    res.send(JSON.stringify(loginDetails));
});

// Define a route to handle login requests and store login details
app.post("/login/:name", (req, res) => {
    loginDetails.push({ "name": req.params.name, "login_time": new Date() });
    res.send(req.params.name + ", You are logged in!");
});

// Define a dynamic route to greet users by name
app.get("/:name", (req, res) => {
    res.send("Hello " + req.params.name);
});

// new endpoint
app.get('/fetchMonth/:num', (req, res) => {
    const num = req.params.num;

    if (num === null || num <= 0) {
      return send.status(400).json({ message: 'Invalid number' });
   } 
   
   switch (num) {
     case '1': res.status(200).json({ message: 'January' }); break;
     case '2': res.status(200).json({ message: 'Febrary' }); break;
     case '3': res.status(200).json({ message: 'March' }); break;
     case '4': res.status(200).json({ message: 'April' }); break;
     case '5': res.status(200).json({ message: 'May' }); break;
     case '6': res.status(200).json({ message: 'June' }); break;
     case '7': res.status(200).json({ message: 'July' }); break;
     case '8': res.status(200).json({ message: 'August' }); break;
     case '9': res.status(200).json({ message: 'September' }); break;
     case '10': res.status(200).json({ message: 'October' }); break;
     case '11': res.status(200).json({ message: 'November' }); break;
     case '12': res.status(200).json({ message: 'December' }); break;
     default: res.status(400).json({ message: 'Invalid month number' });
   }

 });

// Start the server and listen on port 3333
app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`);
});
