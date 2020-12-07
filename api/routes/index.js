const express = require("express");
const router = express.Router();

const { addSubscriber, unsubscribe } = require("./mailerlite.js");
const { getUser, deleteUser, createUser, updateUser } = require("./user.js");
const {
  getBlogpost,
  deleteBlogpost,
  createBlogpost,
  updateBlogpost,
} = require("./blogpost.js");

router.post("/subscriber", addSubscriber);
router.put("/subscriber", unsubscribe);

router.get("/user/:id", getUser);
router.delete("/user/:id", deleteUser);
router.post("/user", createUser);
router.put("/user/:id", updateUser);

router.get("/blogpost", getBlogpost);
router.delete("/blogpost/:id", deleteBlogpost);
router.post("/blogpost", createBlogpost);
router.put("/blogpost/:id", updateBlogpost);

module.exports = router;
