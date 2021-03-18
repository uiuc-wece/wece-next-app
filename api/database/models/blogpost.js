import mongoose from "mongoose";

var BlogpostSchema = new mongoose.Schema({
  title: { type: String },
  authors: [String], // list of user ids
  committeeTags: [String],
  tags: [String],
  content: { type: String },
});

export default mongoose.model("Blogpost", BlogpostSchema);
