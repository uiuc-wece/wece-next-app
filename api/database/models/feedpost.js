const mongoose = require("mongoose");

export const CommentsSchema = new mongoose.Schema({
  authorID: { type: String },
  author: { type: String },
  date: { type: Date, default: Date.now() },
  profile_pic:  { 
                    type: String     
                },
  content: { type: String },
})

var FeedpostSchema = new mongoose.Schema({
  title: { type: String },
  authorID: { type: String },
  author: { type: String },
  date: { type: Date, default: Date.now() },
  profile_pic: { 
                  type: String     
                },
  images:  [String],
  content: { type: String },
  likes: { type: Number },
  comments: [CommentsSchema],
});

const Feedpost = mongoose.model("Feedpost", FeedpostSchema);
module.exports = Feedpost;
