import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as nodemailer from 'nodemailer';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
admin.initializeApp();

const sendMail = (data: any) => {
  const gmailEmail = functions.config().gmail.login;
  const gmailPassword = functions.config().gmail.pass;
  const name = data.name.length === 0 ? 'some stranger' : data.name;

  const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailEmail,
      pass: gmailPassword
    }
  });

  const mailOptions = {
    from: `${data.email}`,
    to: gmailEmail,
    subject: `${name} says: ${data.subject}`,
    html: `<b>From</b>: ${data.name}<br><b>Email</b>: ${data.email}<br><b>Subject</b>: ${data.subject}<br><b>Message</b>: ${data.message}`
  };

  mailTransport
    .sendMail(mailOptions)
    .then(() => {
      console.log('successfully sent email');
    })
    .catch(() => {
      console.log('error sending email');
    });
};

exports.sendContactFormEmail = functions.database
  .ref('/emailMessage/{id}')
  .onCreate((snap, context) => {
    const data = snap.val();
    return sendMail(data);
  });
