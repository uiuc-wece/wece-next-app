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
  getBlogposts,
  getBlogpostById,
  deleteBlogpost,
  createBlogpost,
  updateBlogpost,
} = require("./blogpost.js");
const {
  getFeedposts,
  getFeedpostById,
  deleteFeedpost,
  createFeedpost,
  updateFeedpost,
  updateFeedpostComment,
} = require("./feedpost.js");
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

router.get("/blogposts", getBlogposts);
router.get("/blogpost/:id", getBlogpostById);
router.delete("/blogpost/:id", deleteBlogpost);
router.post("/blogpost", createBlogpost);
router.put("/blogpost/:id", updateBlogpost);

router.get("/feedposts", getFeedposts);
router.get("/feedpost/:id", getFeedpostById);
router.delete("/feedpost/:id", deleteFeedpost);
router.post("/feedpost", createFeedpost);
router.put("/feedpost/:id", updateFeedpost);
router.put("/feedpost/:id", updateFeedpostComment);

router.post("/login", login);
router.post("/register", register);
router.get("/logout", logout);

router.post("/passwordreset/send", sendPasswordResetEmail);
router.post("/passwordreset/check", checkPasswordResetCode);
router.put("/passwordreset/reset", resetPassword);

module.exports = router;
