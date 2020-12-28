// Load required packages
import mongoose from "mongoose";

// Define our user schema
var UserSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, required: true },
  password: { type: String }, // user defined, encrypted
  accountType: {
    type: String,
    enum: ["SPONSOR", "MEMBER", "BOARD", "CHAIR"],
    required: true,
  },
  major: { type: String },
  studentStatus: {
    type: String,
    enum: ["UNDERGRADUATE", "GRADUATE", "ALUMNI", "NONE"],
  }, // undergrad, graduate, none
  joinDate: { type: Date }, // join date to weceweb portal
  graduationDate: { type: Date },
  totalPoints: { type: Number },
  eventsAttended: [String], // list of event keys
  committees: [String],
  blogposts: [String], // list of blogpost ids
  profileImage: { data: Buffer, contentType: String },
});

// Export the Mongoose model
export default mongoose.model("User", UserSchema);
