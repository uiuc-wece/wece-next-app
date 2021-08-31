const bcrypt = require("bcryptjs");
const { v2: cloudinary } = require("cloudinary");
var User = require("../database/models/user.js");
var Event = require("../database/models/event.js");

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

async function getEventsSavedAndAttended(req, res, next) {
  if (req.user) {
    try {
      const user = await User.findById(req.user.id);
      const saved = user.eventsSaved;
      const attended = user.eventsAttended;
      let union = [...new Set([...saved, ...attended])];
      return res.status(200).send(union);
    } catch (err) {
      return res.status(400).send(err);
    }
  }
  return res.status(404).send("Not logged in.");
}

async function getEventsSaved(req, res, next) {
  if (req.user) {
    try {
      const user = await User.findById(req.user.id);
      return res.status(200).send(user.eventsSaved);
    } catch (err) {
      return res.status(400).send(err);
    }
  }
  return res.status(404).send("Not logged in.");
}

async function getEventsCreated(req, res, next) {
  if (req.user) {
    try {
      const user = await User.findById(req.user.id);
      return res.status(200).send(user.eventsCreated);
    } catch (err) {
      return res.status(400).send(err);
    }
  }
  return res.status(404).send("Not logged in.");
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
        // upload new image
        const image = await cloudinary.uploader.upload(req.file.path, {
          width: 400,
          height: 600,
          crop: "fill",
        });

        // delete old image
        const oldUser = await User.findById(id);
        const imgUrl = oldUser.profileImage;
        const publicId = imgUrl.match(/\/upload\/(?:v\d+\/)?([^.]+)/)[1];
        if (publicId != "cupcake_qwji5x") {
          cloudinary.uploader.destroy(publicId, function (err, res) {
            if (err) {
              console.log(err);
            }
          });
        }

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

async function updateUserById(req, res, next) {
  if (req.user) {
    try {
      const id = req.params.id;
      let updatedUser = req.body;
      Object.keys(updatedUser).forEach(
        (key) => updatedUser[key] == null && delete updatedUser[key]
      );
      const { accountType, studentStatus, totalPoints } = updatedUser;

      await User.findByIdAndUpdate(id, {
        accountType,
        studentStatus,
        totalPoints,
      });
      return res.status(200).send();
    } catch (err) {
      return res.status(400).send(err);
    }
  }
  return res.status(404).send(new Error("Not logged in."));
}

async function saveEventToUser(req, res, next) {
  if (req.user) {
    try {
      const userId = req.params.id;
      let { eventId } = req.body;

      const user = await User.findById(userId);
      if (user.eventsSaved) {
        if (!user.eventsSaved.includes(eventId)) {
          user.eventsSaved.push(eventId);
        }
      } else {
        user.eventsSaved = [eventId];
      }
      await user.save();

      const event = await Event.findById(eventId);
      if (event.userSaves) {
        if (!event.userSaves.some((obj) => obj.user === req.user.id))
          event.userSaves.push({ user: req.user.id, email: req.user.email });
      } else {
        event.userSaves = [{ user: req.user.id, email: req.user.email }];
      }
      await event.save();

      return res.status(200).send();
    } catch (err) {
      return res.status(400).send(err);
    }
  }
  return res.status(404).send(new Error("Not logged in."));
}

async function removeEventFromUser(req, res, next) {
  if (req.user) {
    try {
      const userId = req.params.id;
      let { eventId } = req.body;

      const user = await User.findById(userId);
      const filtered = user.eventsSaved.filter((e) => e != eventId);
      user.eventsSaved = filtered;
      await user.save();

      const event = await Event.findById(eventId);
      const userFiltered = event.userSaves.filter((u) => u.user != req.user.id);
      event.userSaves = userFiltered;
      await event.save();
      return res.status(200).send();
    } catch (err) {
      return res.status(400).send(err);
    }
  }
  return res.status(404).send(new Error("Not logged in."));
}

async function attendEvent(req, res, next) {
  if (req.user) {
    try {
      const userId = req.params.id;
      let { eventId } = req.body;

      const user = await User.findById(userId);
      if (user.eventsAttended) {
        user.eventsAttended.push(eventId);
      } else {
        user.eventsAttended = [eventId];
      }

      await user.save();
      return res.status(200).send();
    } catch (err) {
      return res.status(400).send(err);
    }
  }
  return res.status(404).send(new Error("Not logged in."));
}

async function addPointsManually(req, res, next) {
  const userId = req.params.id;
  const { email, eventId } = req.body;

  try {
    const event = await Event.findById(eventId);
    const points = event.points;
    const user = await User.findById(userId);

    if (user.eventsAttended) {
      if (!user.eventsAttended.includes(eventId)) {
        user.eventsAttended.push(eventId);
        user.totalPoints += points;
        await user.save();
      }
    } else {
      user.eventsAttended = [eventId];
      user.totalPoints += points;
      await user.save();
    }

    if (event.attendees) {
      if (!event.attendees.includes(email)) {
        event.attendees.push(email);
        await event.save();
      }
    } else {
      event.attendees = [email];
      await event.save();
    }

    return res.status(200).send("Points added.");
  } catch (err) {
    return res.status(500).send(err);
  }
}

module.exports = {
  getAllUsers,
  getUser,
  getEventsSaved,
  getEventsSavedAndAttended,
  getEventsCreated,
  updateUser,
  updateUserById,
  saveEventToUser,
  removeEventFromUser,
  attendEvent,
  addPointsManually,
};
