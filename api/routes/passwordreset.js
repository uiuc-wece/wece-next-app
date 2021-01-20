const bcrypt = require("bcryptjs");
const sgMail = require("@sendgrid/mail");
var User = require("../database/models/user.js");
var PasswordResetToken = require("../database/models/user.js");

function generateCode() {
  var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    result = "";
  for (var i = 5; i > 0; --i)
    result += chars[Math.round(Math.random() * (chars.length - 1))];
  return result;
}

async function sendPasswordResetEmail(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const { email } = req.body;
  const code = generateCode();
  const msg = {
    to: email,
    from: "wece.uiuc@gmail.com",
    templateId: "d-dd0e0b29f2a844fbbef441dd50dfe29a",
    dynamicTemplateData: {
      password_code: code,
      // password_link: "https://wece.ece.illinois.edu/resetpassword",
      password_link: "https://wece-next-app.weceuiuc.vercel.app/resetpassword",
    },
  };
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).send("User not found.");
    }

    user.passwordResetToken = { token: code };
    await user.save();

    sgMail.send(msg).then(
      () => {},
      (error) => {
        console.log(error);

        if (error.response) {
          console.log(error.response.body);
        }
      }
    );
    return res.status(200).send("Password reset email sent");
  } catch (err) {
    return res.status(500).send(err);
  }
}

const hasExpired = (createDate) => {
  var now = Date.now();
  return now - Date.parse(createDate) > 86400000; // 24 hours
};

async function checkPasswordResetCode(req, res) {
  const { email, code } = req.body;
  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).send("User not found.");
    }

    if (hasExpired(user.passwordResetToken.created)) {
      return res.status(401).send("Token expired.");
    }

    if (code === user.passwordResetToken.token) {
      return res.status(200).send({ message: "Token matches.", data: email });
    } else {
      return res.status(404).send("Wrong token.");
    }
  } catch (err) {
    return res.status(500).send(err);
  }
}

async function resetPassword(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).send("User not found.");
    }

    // Hash password before saving in database
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    user.password = hash;
    await user.save();
    return res.status(200).send();
  } catch (err) {
    return res.status(500).send(err);
  }
}

module.exports = {
  sendPasswordResetEmail,
  checkPasswordResetCode,
  resetPassword,
};
