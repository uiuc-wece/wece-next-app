var User = require("../database/models/user.js");

function getUser(req, res, next) {
  if (req.user) {
    return res.send(req.user);
  }
  return res.status(404).send(new Error("Not logged in."));
}

async function updateUser(req, res, next) {
  if (req.user) {
    try {
      const id = req.user.id;
      const updatedUser = req.body;
      await User.findByIdAndUpdate(id, updatedUser);
      await User.save();
      return res.status(200);
    } catch (err) {
      return res.status(400).send(err);
    }
  }
  return res.status(404).send(new Error("Not logged in."));
}

module.exports = {
  getUser: getUser,
  updateUser: updateUser,
};
