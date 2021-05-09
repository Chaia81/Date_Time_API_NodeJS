const router = require("express").Router();

/*
    Project Schema
    Title - (string)
    Description: (string)
    startDate: (date)
    endDate: (date)
    Language(s): (array)
    Image: (string)
    HostedLing: (string)
    GitLink: (string)
*/

const projects = [{
    title: "My Portfolio",
    description: "Personal Portfolio implemented in Node.js",
    startDate: new Date("2021-04-22").toDateString(),
    endDate: new Date("2021-05-09").toDateString(),
    languages: ["Node.js", " JSON", " JavaScript", " HTML"],
    hostedLink: "",
    gitLink: "https://github.com/Chaia81/NodeJs_4_semester/tree/main/6._My_Portfolio"
}];


router.get("/api/projects", (req, res) => {
    res.send({ projects: projects });
});

module.exports = {
    router: router
};