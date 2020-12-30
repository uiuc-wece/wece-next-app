const express = require("express");
const router = express.Router();

const { addSubscriber, unsubscribe } = require("./mailerlite.js");
const { getUser, updateUser } = require("./user.js");
const {
  getBlogpost,
  deleteBlogpost,
  createBlogpost,
  updateBlogpost,
} = require("./blogpost.js");
const { login, register, logout } = require("./auth.js");

router.post("/subscriber", addSubscriber);
router.put("/subscriber", unsubscribe);

router.get("/user", getUser);
router.put("/user", updateUser);

router.get("/blogpost/:id", getBlogpost);
router.delete("/blogpost/:id", deleteBlogpost);
router.post("/blogpost", createBlogpost);
router.put("/blogpost/:id", updateBlogpost);

router.post("/login", login);
router.post("/register", register);
router.get("/logout", logout);

module.exports = router;
