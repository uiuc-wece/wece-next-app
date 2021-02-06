const mongoose = require("mongoose");

const mongo_connection = process.env.MONGODB_URL;

mongoose.connect(mongo_connection, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

mongoose.set("useCreateIndex", true);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Database is connected!");
});

module.exports = db;
