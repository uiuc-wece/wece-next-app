const express = require("express");
const router = express.Router();
const multer = require("multer");

const upload = multer({ dest: "/tmp" });

const { addSubscriber, unsubscribe } = require("./mailerlite.js");
const {
  getUser,
  getEventsSaved,
  getEventsSavedAndAttended,
  getEventsCreated,
  updateUser,
  updateUserById,
  getAllUsers,
  saveEventToUser,
  removeEventFromUser,
  attendEvent,
} = require("./user.js");
const {
  getAllEvents,
  getEventById,
  createEvent,
  createToken,
  checkToken,
  updateEventById,
  deleteById,
} = require("./event.js");
const {
  getBlogpost,
  deleteBlogpost,
  createBlogpost,
  updateBlogpost,
} = require("./blogpost.js");
const { login, register, logout } = require("./auth.js");
const {
  requireBoardStatus,
  requireChairStatus,
} = require("../passport/authmiddleware.js");
const {
  sendPasswordResetEmail,
  checkPasswordResetCode,
  resetPassword,
} = require("./passwordreset.js");

router.post("/subscriber", addSubscriber);
router.put("/subscriber", unsubscribe);

router.get("/users", requireChairStatus, getAllUsers);
router.get("/user", getUser);
router.get("/user/savedevents", getEventsSaved);
router.get("/user/createdevents", getEventsCreated);
router.get("/user/savedattendedevents", getEventsSavedAndAttended);
router.put("/user", upload.single("profileImage"), updateUser);
router.put("/user/:id", requireBoardStatus, updateUserById);
router.put("/user/:id/saveevent", saveEventToUser);
router.put("/user/:id/unsaveevent", removeEventFromUser);
router.put("/user/:id/attendevent", attendEvent);

router.get("/events", getAllEvents);
router.get("/event", getEventById);
router.post("/event", requireChairStatus, createEvent);
router.put("/event/:id/token", requireChairStatus, createToken);
router.put("/event/:id/checktoken", checkToken);
router.put(
  "/event/:id",
  [requireChairStatus, upload.single("eventImage")],
  updateEventById
);
router.delete("/event/:id", requireChairStatus, deleteById);

router.get("/blogpost", getBlogpost);
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
