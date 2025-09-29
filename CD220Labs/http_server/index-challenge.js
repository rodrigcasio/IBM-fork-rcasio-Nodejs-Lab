
const http = require('http');
const today = require('./today');

const port = 7777;
const hostname = 'localhost';

const server = http.createServer((req, res) => {
    res.writeHead(200);
    let dateValue = today.getDate2();    // getting the current date from today module 
    let hour = dateValue.getHours();     

    let greeting = 'It is still not morning';
    if(hour > 6 && hour <= 12){          // checking hour ranges
        greeting = `Good morning`;
    }else if (hour > 12 && hour <= 18){
        greeting = `Good afternoon!`;
    }else if(hour > 18 && hour <= 21){
        greeting = `Good evening!`;
    }else if(hour > 21 && hour <= 24){
        greeting = `Good night!`;
    }

    res.end(`Hello! ${greeting} this is a response from the server!.\nThe Current hour in Guadalajara is: ${hour}!`);
});

server.listen(port, hostname, () => {
    console.log(`Callback executed!. Server is running at: http://${hostname}:${port}/`);
})



// another way to add the condition to change the response 
// ( not recommend switch for ranged-based logic ) ( switch is for matching specific values )

    // switch(true){
    //     case (hour > 6 && hour <= 12): greeting = "Good morning!"; break;
    //     case (hour >= 12 && hour <= 18): greeting = "Good afternoon!"; break;
    //     case (hour >= 18 && hour <= 21): greeting = "Good evening!"; break;
    //     case (hour >= 21 && hour <= 24): greeting = "Good night!"; break;
    //     defualt: return `Unknown time zone`;
    // }   