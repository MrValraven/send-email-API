const dotenv = require('dotenv');
const sgMail = require('@sendgrid/mail');
const express = require('express');
const { json, urlencoded } = require('body-parser');

const app = express();

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_KEY);
app.use(urlencoded({ extended: true }));
app.use(json());

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.post('/sendemail', (req, res) => {
    const emailData = req.body;
    const email = {
        to: emailData.to,
        from: emailData.from, 
        subject: emailData.subject,
        text: emailData.text,
        html: emailData.html
    }
    sgMail.send(email)
    .then(() => {
        res.send({ message: 'Email sent!'});
    })
    .catch((err) => {
        res.send({ message: 'Error! No email was sent'});
        console.log(err)
    });
});

app.listen(3000, () => {
    console.log("server is running");
})
