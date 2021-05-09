const express = require("express");

const sendMail = require("./mail.js");

const app = express();


// I use app.use(express.static("public")); to be able to read the css-file
app.use(express.static("public"));
app.use(express.json());
app.use('/public/header/', express.static('./public/header/')); // in order to use the picture
app.use('/public/projects/', express.static('./public/projects/')); // in order to use the picture
app.use('public/contact/toastr', express.static('./public/contact/toastr'));
app.use(express.urlencoded({ extended: true }));

const projectsRouter = require("./routes/projects.js");
const contactRouter = require("./routes/contact.js");

app.use(projectsRouter.router);
app.use(contactRouter.router);

const fs = require("fs");
const { info } = require("console");

const header = fs.readFileSync(__dirname + "/public/header/header.html", "utf-8");
const footer = fs.readFileSync(__dirname + "/public/footer/footer.html", "utf-8");

const frontpage = fs.readFileSync(__dirname + "/public/frontpage/frontpage.html", "utf-8");
const educationpage = fs.readFileSync(__dirname + "/public/education/education.html", "utf-8");
const projectspage = fs.readFileSync(__dirname + "/public/projects/projects.html", "utf-8");
// const skillspage = fs.readFileSync(__dirname + "/public/skills/skills.html", "utf-8");
//const recommendationspage = fs.readFileSync(__dirname + "/public/recommendations/recommendations.html", "utf-8");
const contactpage = fs.readFileSync(__dirname + "/public/contact/contact.html", "utf-8");


/* -------------------- frontpage -------------------- */
app.get("/", (req, res) => {
    res.send(header + frontpage + footer);
});

/* -------------------- education page -------------------- */

app.get("/education", (req, res) => {
    res.send(header + educationpage + footer);
});

/* -------------------- projects page -------------------- */

app.get("/projects", (req, res) => {
    res.send(header + projectspage + footer);
});

/* -------------------- skills page -------------------- */

app.get("/skills", (req, res) => {
    res.send(header + skillspage + footer);
});

/* -------------------- recommendations page -------------------- */

app.get("/recommendations", (req, res) => {
    res.send(header + recommendationspage + footer);
});


/* -------------------- contact page -------------------- */

app.get("/contact", (req, res) => {
    res.send(header + contactpage + footer);
});

app.post("/contact", (req, res) => {
//TODO
//send email here
const { name, email, subject, message } = req.body;
console.log('Data: ', req.body);

sendMail(name, email, subject, message, function(error, data){
    if (error) {
        res.status(500).json({ message: 'Internal Error' });
    } else {
        res.json({ message: 'Email sent' });
    }
});

});





/* -------------------- Server start -------------------- */

const server = app.listen(process.env.PORT || 8080, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080);
});