const sgMail = require("@sendgrid/mail");

function sendPasswordResetEmail(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const { email } = req.body;
  const msg = {
    to: "eugeniachen123@gmail.com",
    from: "wece.uiuc@gmail.com",
    templateId: "d-dd0e0b29f2a844fbbef441dd50dfe29a",
    subject: "Test email from SendGrid",
    dynamicTemplateData: {
      password_code: 12345,
      password_link: "https://wece.ece.illinois.edu",
    },
  };

  sgMail.send(msg).then(
    () => {},
    (error) => {
      console.log(error);

      if (error.response) {
        console.log(error.response.body);
      }
    }
  );
}

module.exports = { sendPasswordResetEmail };
