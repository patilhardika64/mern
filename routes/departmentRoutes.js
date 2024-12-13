const express = require("express");
const router = express.Router();
const { Department } = require("../models");

// Create a Department
router.post("/", async (req, res) => {
  try {
    const department = new Department(req.body);
    const result = await department.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all Departments
router.get("/getAllDept", async (req, res) => {
  try {
    const departments = await Department.find();
    console.log(departments);
    res.json(departments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a Department
router.put("/:id", async (req, res) => {
  try {
    const department = await Department.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(department);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a Department
router.delete("/:id", async (req, res) => {
  try {
    await Department.findByIdAndDelete(req.params.id);
    res.json({ message: "Department deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
