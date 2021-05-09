const router = require("express").Router();

require('dotenv').config();

const nodemailer = require("nodemailer");

router.post("/api/contact", (req, res) => {
    console.log(req.body);
    res.redirect("/contact")

    const transporter = nodemailer.createTransport({ // SMTP Transport
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })
    
    const mailOptions = {
        from: 'mariawdev@gmail.com',
        to: 'mariasoendergaardwagner@gmail.com',
        subject: 'Test message',
        text: 'Is it really working'
    }
    
    transporter.sendMail(mailOptions, (error, data) => {
        if (error) {
            console.log('Error occured', error);
        } else {
            console.log('Email sent');
        }
    })

});

module.exports = {
    router: router // shorthand = router
};