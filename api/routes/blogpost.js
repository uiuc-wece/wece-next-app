var Blogpost = require("../database/models/blogpost.js");
var mongoose = require("mongoose");

async function getBlogposts(req, res, next) {
  try {
    const posts = await Blogpost.find({});
    res.status(200).send(posts);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function getBlogpostById(req, res, next) {
  try {
    const post = await Blogpost.findById(req.params.id);
    res.status(200).send(post);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function deleteBlogpost(req, res, next) {
  try {
    const post = await Blogpost.findByIdAndDelete(req.params.id);

    if (!post) res.status(404).send("No item found");
    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
}

async function createBlogpost(req, res, next) {

  try {
    const post = new Blogpost(req.body);
    await post.save();
    res.status(201).send(post);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function updateBlogpost(req, res, next) {
  try {
    await Blogpost.findByIdAndUpdate(req.params.id, req.body);
    await Blogpost.save();
    res.status(200).send(post);
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = {
  getBlogposts: getBlogposts,
  getBlogpostById: getBlogpostById,
  deleteBlogpost: deleteBlogpost,
  createBlogpost: createBlogpost,
  updateBlogpost: updateBlogpost,
};
