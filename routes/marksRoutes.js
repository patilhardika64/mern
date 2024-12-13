const express = require('express');
const router = express.Router();
const { Marks } = require('../models');

// Create a Marks entry
router.post('/', async (req, res) => {
  try {
    const marks = new Marks(req.body);
    const result = await marks.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all Marks
router.get('/', async (req, res) => {
  try {
    const marks = await Marks.find().populate('student subject teacher');
    res.json(marks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
