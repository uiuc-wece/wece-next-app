// Load required packages
const mongoose = require("mongoose");

const EventTokenSchema = new mongoose.Schema({
  token: { type: String },
  created: { type: Date, default: Date.now() },
});

const UserSaveSchema = new mongoose.Schema({
  user: { type: String }, // user id
  email: { type: String },
  created: { type: Date, default: Date.now() },
});

// Define our event schema
const EventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true }, // email
    created: { type: Date, default: Date.now() },
    startDate: { type: Date },
    endDate: { type: Date },
    recurring: { type: Boolean, default: false },
    description: { type: String },
    location: { type: String },
    webConferenceLink: { type: String }, // e.g. Zoom link
    actionLink: { type: String }, // link for button
    token: EventTokenSchema,
    hosts: [{ label: String, value: String }],
    committees: [{ label: String, value: String }],
    points: { type: Number },
    attendees: [String], // list of emails
    userSaves: [UserSaveSchema],
    eventImage: { type: String },
  },
  { strict: false }
);

// Export the Mongoose model
const Event = mongoose.model("Event", EventSchema);
module.exports = Event;
