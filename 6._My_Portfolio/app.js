const express = require ("express");
const app = express();

// I use app.use(express.static("public")); to be able to read the css-file
app.use(express.static("public"));
app.use(express.json());
app.use('/public/nav/', express.static('./public/nav/'));




/* -------------------- frontpage -------------------- */
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});






/*
+--------------------------------------------------------------------------------------------------------------------------------------+
|                                                            Server start                                                              |
+--------------------------------------------------------------------------------------------------------------------------------------+
*/

const server = app.listen(process.env.PORT || 8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080);
});

/*
app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080);
});
*/