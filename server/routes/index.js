const express = require("express");
const router = express.Router();

const { addSubscriber, unsubscribe } = require("./mailerlite.js");

router.post("/subscriber", addSubscriber);
router.put("/subscriber", unsubscribe);

module.exports = router;