const mongoose = require("mongoose");

var BlogpostSchema = new mongoose.Schema({
  title: { type: String },
  authors: [String], // list of user ids
  committeeTags: [String],
  tags: [String],
  content: { type: String },
});

const Blogpost = mongoose.model("Blogpost", BlogpostSchema);
module.exports = Blogpost;
