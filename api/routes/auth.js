const bcrypt = require("bcryptjs");
const passport = require("passport");
const User = require("../database/models/user");

function login(req, res, next) {
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      return res.status(400).send(err);
    }

    if (!user) {
      return res.status(400).send("No user found.");
    }

    req.logIn(user, function (err) {
      if (err) {
        return res.status(400).send(err);
      }
      return res.status(200).send({ success: `logged in ${user.id}` });
    });
  })(req, res, next);
}

async function register(req, res, next) {
  const { email, password, firstName, lastName, accountType } = req.body;

  const newUser = new User({
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
    accountType: accountType,
    totalPoints: 0,
    joinDate: Date.now(),
    profileImage:
      "https://res.cloudinary.com/weceuiuc/image/upload/v1609464442/cupcake_qwji5x.jpg",
  });

  try {
    // Check if user exists
    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(409).send("User already exists.");
    }
    // Hash password before saving in database
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(newUser.password, salt);
    newUser.password = hash;
    await newUser.save();
    return res.status(201).send(newUser);
  } catch (err) {
    return res.status(500).send(err);
  }
}

function logout(req, res, next) {
  if (req.session) {
    req.session.destroy();
    res.clearCookie("session-id");
    req.logout();
    return res.status(200).send("Logged out.");
  } else {
    return res.status(403).send("You are not logged in!");
  }
}

module.exports = {
  login: login,
  register: register,
  logout: logout,
};
