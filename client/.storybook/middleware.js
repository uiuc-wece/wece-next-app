const express = require("express");
const path = require("path");

module.exports = (router) => {
  router.use("/imgs", express.static("public/imgs"));
};
