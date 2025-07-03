//importing the model

const Post = require('../models/post');
const express = require('express');
const router = express.Router();

//Create a new blog
router.post('/', async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all posts (with optional filter by tag or isPublished) --- filtering
router.get('/', async (req, res) => {
  const { tag, published } = req.query;
  const filter = {};
  if (tag) filter.tags = tag;
  if (published) filter.isPublished = published === 'true';

  try {
    const posts = await Post.find(filter);
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single post by id
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ err: 'Post not found' });
    res.send(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a post

router.put('/:id', async (req, res) => {
  try {
    const updated = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Post not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//Delete a post

router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Post.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Post not found' });
    res.json({ message: 'Post deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
