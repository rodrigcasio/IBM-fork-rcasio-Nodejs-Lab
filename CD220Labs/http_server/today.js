// modified by rodrigcasio using the arrow function 

// 1. Export a function named "getDate" from the module
// 2. inside the function, get the current date and time in the timezone "Australia/Brisbane"
// 3. lastly, return the formated date and time

module.exports.getDate = () => {
    let australiaEstTime = new Date().toLocaleDateString("en-US", {timeZone: "Australia/Brisbane"});
    return australiaEstTime;
}

// part of the challenge  :
module.exports.getDate2 = () => {
    // to get the hours of instead of date with toLocaleString
    let mxEstString = new Date().toLocaleString("en-US", {timeZone: "America/Mexico_City"});

    // converting that string back into a Date object 
    let mexDate = new Date(mxEstString);     
    return mexDate;
}

/* 
    DEFAULT CODE ADDED BY IBM 

// Export a function named 'getDate' from the module
module.exports.getDate = function getDate() {
    // Get the current date and time in the timezone "Australia/Brisbane"
    let aestTime = new Date().toLocaleString("en-US", {timeZone: "Australia/Brisbane"});
    return aestTime; // Return the formatted date and time
};
 */
