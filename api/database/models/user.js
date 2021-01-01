// Load required packages
const mongoose = require("mongoose");

const accountTypeEnum = {
  SPONSOR: "SPONSOR",
  MEMBER: "MEMBER",
  BOARD: "BOARD",
  CHAIR: "CHAIR",
  ADMIN: "ADMIN",
};

const ThirdPartyProviderSchema = new mongoose.Schema({
  providerName: { type: String, defualt: null },
  providerId: { type: String, default: null },
  providerData: { type: {}, default: null },
});

// Define our user schema
const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, required: true },
    emailIsVerified: { type: Boolean, default: false },
    password: { type: String }, // user defined, encrypted
    thirdPartyAuth: [ThirdPartyProviderSchema],
    accountType: {
      type: String,
      enum: ["SPONSOR", "MEMBER", "BOARD", "CHAIR", "ADMIN"],
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
    profileImage: { type: String },
  },
  { strict: false }
);

// Export the Mongoose model
const User = mongoose.model("User", UserSchema);
module.exports = User;
module.exports.accountTypeEnum = accountTypeEnum;
