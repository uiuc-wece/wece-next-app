const bcrypt = require("bcryptjs");
const { v2: cloudinary } = require("cloudinary");
var User = require("../database/models/user.js");

async function getAllUsers(req, res, next) {
  const users = await User.find({}).sort({ joinDate: "asc" });
  return res.status(200).send(users);
}

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
      let updatedUser = req.body;
      Object.keys(updatedUser).forEach(
        (key) => updatedUser[key] == null && delete updatedUser[key]
      );
      if (updatedUser.password) {
        // Hash password before saving in database
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(updatedUser.password, salt);
        updatedUser.password = hash;
      }
      let profileImage;
      if (req.file) {
        // contains image file
        const image = await cloudinary.uploader.upload(req.file.path, {
          width: 400,
          height: 600,
          crop: "fill",
        });

        profileImage = image.secure_url;
      }
      if (profileImage) {
        updatedUser.profileImage = profileImage;
      }
      await User.findByIdAndUpdate(id, updatedUser);
      return res.status(200).send();
    } catch (err) {
      return res.status(400).send(err);
    }
  }
  return res.status(404).send(new Error("Not logged in."));
}

module.exports = {
  getAllUsers: getAllUsers,
  getUser: getUser,
  updateUser: updateUser,
};
