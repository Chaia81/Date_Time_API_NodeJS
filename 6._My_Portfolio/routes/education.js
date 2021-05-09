const router = require("express").Router();

/*
    Education Schema
    startDate: (date)
    endDate: (date)
    education (string)
    school (string)
    link (string)
*/

const education = [{
    startDate: new Date("2019-08-05").toDateString(),
    endDate: new Date("2022-01-31").toDateString(),
    education: "Computer Science",
    school: "KEA - Copenhagen School of Design and Technology",
    link: "www.kea.dk"
}];

router.get("/api/education", (req, res) => {
    res.send({ education });
});

module.exports = {
    router
};