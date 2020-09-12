let nodemailer = require('nodemailer')

// generate a random alphanumeric string
module.exports.generate_code = () => {
    return Math.random().toString(36).replace('0.', '') 
}


// send an email
module.exports.send_mail = async ({receiver, subject, message}) => {

    var transporter = nodemailer.createTransport({
        //   service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: process.env.MAIL_mail,   
            pass: process.env.MAIL_password
        }
    });
      
      var mailOptions = {
        from: process.env.MAIL_mail,
        to: receiver,
        subject: subject,
        html: message
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

} 