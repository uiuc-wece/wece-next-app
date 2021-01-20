var Blogpost = require("../database/models/blogpost.js");
var mongoose = require("mongoose");

function getBlogpost(req, res, next) {}

function deleteBlogpost(req, res, next) {}

function createBlogpost(req, res, next) {}

function updateBlogpost(req, res, next) {}

module.exports = {
  getBlogpost: getBlogpost,
  deleteBlogpost: deleteBlogpost,
  createBlogpost: createBlogpost,
  updateBlogpost: updateBlogpost,
};
