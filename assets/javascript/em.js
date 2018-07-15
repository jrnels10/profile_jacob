var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jrnels10@gmail.com',
    pass: 'Johndeere648h'
  }
});

var mailOptions = {
  from: 'jrnels10@gmail.com',
  to: 'jakektm23@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});