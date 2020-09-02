const express = require("express");
const router = express.Router();

const addSubscriber = require("./mailerlite.js");

router.post("/subscriber", addSubscriber);

module.exports = router;