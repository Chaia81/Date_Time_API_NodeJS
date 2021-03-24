const express = require ("express");
const app = express();

// app.use(express.json());
app.use(express.static('public'));
app.use('/public/assets/img/', express.static('./public/assets/img'));
app.use('/public/assets/css/', express.static('./public/assets/css/'));


// Home
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// NodeJS
app.get("/nodejs", (req, res) => {
    res.sendFile(__dirname + "/public/nodejs.html");
});

// Tools
app.get("/tools", (req, res) => {
    res.sendFile(__dirname + "/public/tools.html");
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