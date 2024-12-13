const express = require('express');
const router = express.Router();

// Import all individual routers
router.use('/students', require('./studentRoutes'));
router.use('/teachers', require('./teacherRoutes'));
router.use('/subjects', require('./subjectRoutes'));
router.use('/departments', require('./departmentRoutes'));
router.use('/marks', require('./marksRoutes'));

module.exports = router;
