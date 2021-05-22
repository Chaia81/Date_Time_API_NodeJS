
const express = require ("express");
const app = express();


/*
+--------------------------------------------------------------------------------------------------------------------------------------+
|                                                          Get current time                                                            |
+--------------------------------------------------------------------------------------------------------------------------------------+
*/

// print hour and minute

let date = new Date();
let currentHour = date.getHours();
let currentMinute = date.getMinutes();


app.get("/time", (req, res) => {
    let currentTime = "Hour: " + currentHour + " Minute: " + currentMinute
    res.send ({ currentTime })
});


/*
+--------------------------------------------------------------------------------------------------------------------------------------+
|                                                          Get current day                                                             |
+--------------------------------------------------------------------------------------------------------------------------------------+
*/


const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "wednesday",
    "Thursday",
    "Friday",
    "Saturday" 
];

app.get("/day", (req, res) => {
    const currentDay = new Date().getDay();
    res.send ({ day: weekdays[currentDay]});
});


/*
+--------------------------------------------------------------------------------------------------------------------------------------+
|                                                          Get current month                                                           |
+--------------------------------------------------------------------------------------------------------------------------------------+
*/

// Month is 0-based
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

app.get("/month", (req, res) => {
    const currentMonth = new Date().getMonth();
    res.send ({ month: months[currentMonth]});
});

/*
+--------------------------------------------------------------------------------------------------------------------------------------+
|                                                            Server start                                                              |
+--------------------------------------------------------------------------------------------------------------------------------------+
*/

app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080);
});