const mongoose = require('mongoose');

//Post Schema

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  tags: [String],
  publishedAt: { type: Date, default: Date.now },
  isPublished: { type: Boolean, default: false },
});

module.exports = mongoose.model('post', postSchema);
