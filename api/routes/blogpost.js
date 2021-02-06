var Blogpost = require("../database/models/blogpost.js");
var mongoose = require("mongoose");

async function getBlogpost(req, res, next) {
  const posts = await Blogpost.find({});

  try {
    res.send(posts);
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
  const post = new Blogpost(req.body);

  try {
    await post.save();
    res.send(post);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function updateBlogpost(req, res, next) {
  try {
    await Blogpost.findByIdAndUpdate(req.params.id, req.body);
    await Blogpost.save();
    res.send(post);
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = {
  getBlogpost: getBlogpost,
  deleteBlogpost: deleteBlogpost,
  createBlogpost: createBlogpost,
  updateBlogpost: updateBlogpost,
};
