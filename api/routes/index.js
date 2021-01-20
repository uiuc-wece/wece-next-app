const express = require("express");
const router = express.Router();
const multer = require("multer");

const upload = multer({ dest: "/tmp" });

const { addSubscriber, unsubscribe } = require("./mailerlite.js");
const {
  getUser,
  updateUser,
  updateUserById,
  getAllUsers,
} = require("./user.js");
const {
  getBlogpost,
  deleteBlogpost,
  createBlogpost,
  updateBlogpost,
} = require("./blogpost.js");
const { login, register, logout } = require("./auth.js");
const { requireBoardStatus } = require("../passport/authmiddleware.js");
const {
  sendPasswordResetEmail,
  checkPasswordResetCode,
  resetPassword,
} = require("./passwordreset.js");

router.post("/subscriber", addSubscriber);
router.put("/subscriber", unsubscribe);

router.get("/users", requireBoardStatus, getAllUsers);
router.get("/user", getUser);
router.put("/user", upload.single("profileImage"), updateUser);
router.put("/user/:id", requireBoardStatus, updateUserById);

router.get("/blogpost/:id", getBlogpost);
router.delete("/blogpost/:id", deleteBlogpost);
router.post("/blogpost", createBlogpost);
router.put("/blogpost/:id", updateBlogpost);

router.post("/login", login);
router.post("/register", register);
router.get("/logout", logout);

router.post("/passwordreset/send", sendPasswordResetEmail);
router.post("/passwordreset/check", checkPasswordResetCode);
router.put("/passwordreset/reset", resetPassword);

module.exports = router;
