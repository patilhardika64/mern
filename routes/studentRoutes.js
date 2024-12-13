const express = require('express');
const router = express.Router();

const { Student, Marks } = require('../models');
// Create a Student
router.post('/', async (req, res) => {
  try {
    const student = new Student(req.body);
    const result = await student.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all Students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find().populate('department');
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a Student
router.put('/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a Student
router.delete('/:id', async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: 'Student deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/studentall', async (req, res) => {
  try {
    const students = await Student.find()
      .populate('department') // Populate department details
      .lean(); // Use lean() to return plain JavaScript objects for better performance

    const studentData = await Promise.all(
      students.map(async (student) => {
        const marks = await Marks.find({ student: student._id }); // Fetch marks for the student
        const totalMarks = marks.reduce((acc, mark) => acc + mark.marksObtained, 0); // Calculate total marks
        return {
          ...student,
          marks,
          totalMarks,
        };
      })
    );

    res.json(studentData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
