const express = require("express");
const router = express.Router();
const { Teacher } = require("../models");

// Create a Teacher
router.post("/", async (req, res) => {
  try {
    const teacher = new Teacher(req.body);
    const result = await teacher.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all Teachers
router.get("/getAllTeachers", async (req, res) => {
  try {
    const teachers = await Teacher.find().populate("department");
    console.log(teachers);
    res.json(teachers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a Teacher
router.put("/:id", async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(teacher);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a Teacher
router.delete("/:id", async (req, res) => {
  try {
    await Teacher.findByIdAndDelete(req.params.id);
    res.json({ message: "Teacher deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
