const functions = require('firebase-functions');

const RECEIVER_EMAIL = "jterrazz@protonmail.com";

const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });
const { email, password } = functions.config().gmail;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password
  }
});

exports.submit = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method !== 'POST') {
      return;
    }

    const mailOptions = {
      replyTo: req.body.email,
      to: RECEIVER_EMAIL,
      subject: `From my website - ${req.body.fullName} - ${req.body.email}`,
      text: req.body.message,
      html: `<p>${req.body.message}`
    };

    mailTransport.sendMail(mailOptions);

    res.status(200).send();
  });
});
