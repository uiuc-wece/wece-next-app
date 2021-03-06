var Feedpost = require("../database/models/feedpost.js");
var mongoose = require("mongoose");

async function getFeedposts(req, res, next) {
  try {
    const posts = await Feedpost.find({});
    res.status(200).send(posts);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function getFeedpostById(req, res, next) {
  try {
    const post = await Feedpost.findById(req.params.id);
    res.status(200).send(post);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function deleteFeedpost(req, res, next) {
  try {
    const post = await Feedpost.findByIdAndDelete(req.params.id);

    if (!post) res.status(404).send("No item found");
    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
}

async function createFeedpost(req, res, next) {

  try {
    const post = new Feedpost(req.body);
    await post.save();
    res.status(201).send(post);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function updateFeedpost(req, res, next) {
  try {
    await Feedpost.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = {
  getFeedposts: getFeedposts,
  getFeedpostById: getFeedpostById,
  deleteFeedpost: deleteFeedpost,
  createFeedpost: createFeedpost,
  updateFeedpost: updateFeedpost,
};
