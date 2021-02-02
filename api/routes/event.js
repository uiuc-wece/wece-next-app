const { v2: cloudinary } = require("cloudinary");
var Event = require("../database/models/event.js");
var User = require("../database/models/user.js");

function generateToken() {
  var chars = "0123456789",
    result = "";
  for (var i = 4; i > 0; --i)
    result += chars[Math.round(Math.random() * (chars.length - 1))];
  return result;
}

async function getAllEvents(req, res, next) {
  const events = await Event.find({});
  return res.status(200).send(events.reverse());
}

async function getEventById(req, res, next) {
  const { id } = req.body;
  try {
    await User.findById(id);
    return res.status(200).send();
  } catch (err) {
    return res.status(404).send(err);
  }
}

async function createEvent(req, res, next) {
  if (req.user) {
    const id = req.user.id;
    let newEvent = req.body;

    Object.keys(newEvent).forEach(
      (key) => newEvent[key] == null && delete newEvent[key]
    );

    newEvent.author = req.user.email;

    const event = new Event(newEvent);

    try {
      await event.save();

      const user = await User.findById(id);
      if (user.eventsCreated) {
        user.eventsCreated.push(event._id);
      } else {
        user.eventsCreated = [event._id];
      }
      await user.save();

      return res.status(201).send(event);
    } catch (err) {
      return res.status(500).send(err);
    }
  }
  return res.status(404).send(new Error("Not logged in."));
}

async function createToken(req, res, next) {
  if (req.user) {
    const id = req.params.id;
    const code = generateToken();
    try {
      const event = await Event.findById(id);
      event.token = { token: code };
      await event.save();
      return res.status(200).send("Token created.");
    } catch (err) {
      return res.status(500).send(err);
    }
  }
  return res.status(404).send(new Error("Not logged in."));
}

async function updateEventById(req, res, next) {
  if (req.user) {
    try {
      const id = req.params.id;
      let updatedEvent = req.body;
      Object.keys(updatedEvent).forEach(
        (key) => updatedEvent[key] == null && delete updatedEvent[key]
      );
      let eventImage;
      if (req.file) {
        // contains image file
        // upload new image
        const image = await cloudinary.uploader.upload(req.file.path, {
          width: 600,
          height: 400,
          crop: "fill",
        });

        // delete old image
        const oldEvent = await Event.findById(id);
        if (oldEvent.eventImage) {
          const imgUrl = oldEvent.eventImage;
          const publicId = imgUrl.match(/\/upload\/(?:v\d+\/)?([^.]+)/)[1];
          cloudinary.uploader.destroy(publicId, function (err, res) {
            if (err) {
              console.log(err);
            }
          });
        }

        eventImage = image.secure_url;
        updatedEvent.eventImage = eventImage;
      }
      await Event.findByIdAndUpdate(id, updatedEvent);
      return res.status(200).send();
    } catch (err) {
      return res.status(400).send(err);
    }
  }
  return res.status(404).send(new Error("Not logged in."));
}

async function deleteById(req, res, next) {
  if (req.user) {
    try {
      const id = req.params.id;
      // delete old image
      const oldEvent = await Event.findById(id);
      if (oldEvent.eventImage) {
        const imgUrl = oldEvent.eventImage;
        const publicId = imgUrl.match(/\/upload\/(?:v\d+\/)?([^.]+)/)[1];
        cloudinary.uploader.destroy(publicId, function (err, res) {
          if (err) {
            console.log(err);
          }
        });
      }

      const user = await User.findById(req.user.id);
      const filtered = user.eventsCreated.filter((e) => e != id);
      user.eventsCreated = filtered;
      await user.save();
      await Event.findByIdAndDelete(id);
      return res.status(200).send("Event deleted.");
    } catch (err) {
      return res.status(404).send(err);
    }
  }
}

module.exports = {
  getAllEvents,
  getEventById,
  createEvent,
  createToken,
  updateEventById,
  deleteById,
};
