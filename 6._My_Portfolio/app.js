const express = require ("express");
const app = express();

// I use app.use(express.static("public")); to be able to read the css-file
app.use(express.static("public"));
app.use(express.json());
app.use('/public/header/', express.static('./public/header/')); // in order to use the picture
app.use('/public/projects/', express.static('./public/projects/')); // in order to use the picture
app.use(express.urlencoded({ extended: true }));

const projectsRouter = require("./routes/projects.js");
const contactRouter = require("./routes/contact.js");

app.use(projectsRouter.router);
app.use(contactRouter.router);

const fs = require("fs");

const header = fs.readFileSync(__dirname + "/public/header/header.html", "utf-8");
const footer = fs.readFileSync(__dirname + "/public/footer/footer.html", "utf-8");

const frontpage = fs.readFileSync(__dirname + "/public/frontpage/frontpage.html", "utf-8");
const projectspage = fs.readFileSync(__dirname + "/public/projects/projects.html", "utf-8");
const contactpage = fs.readFileSync(__dirname + "/public/contact/contact.html", "utf-8");


/* -------------------- frontpage -------------------- */
app.get("/", (req, res) => {
    res.send(header + frontpage + footer);
});


/* -------------------- projects page -------------------- */

app.get("/projects", (req, res) => {
    res.send(header + projectspage + footer);
});


/* -------------------- contact page -------------------- */

app.get("/contact", (req, res) => {
    res.send(header + contactpage + footer);
});








/* -------------------- Server start -------------------- */

const server = app.listen(process.env.PORT || 8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080);
});