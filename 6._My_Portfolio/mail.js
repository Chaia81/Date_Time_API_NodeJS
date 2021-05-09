const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');


const auth = {
    auth: {
        api_key: '3d1845d5043db7d15c5e3884807d9139-2a9a428a-4961667a',
        domain: 'sandbox4b5a71cd68be4fb98e3450a3e01e0e7f.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (name, email, subject, message, cb) => {
    const mailOptions = {
        name,
        from: email,
        to: 'mariawdev@gmail.com',
        subject,
        message
    };
    
    transporter.sendMail(mailOptions, function(error, data) {
        if (error) {
            cb(error, null);
        } else {
            cb(null, data);
        }
    });
}

module.exports = sendMail;