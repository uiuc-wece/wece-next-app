const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
require("dotenv").config();

require("./database");

const router = require("./routes/index.js");

const port = process.env.PORT || 3003;

// Create our Express application
const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res) {
  const INTERNAL_ERROR_CODE = 500;

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || INTERNAL_ERROR_CODE);
  res.render(err);
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log("Server running on port " + port);
});
