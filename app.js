var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors'); // Import CORS middleware

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Import API routes
var studentRoutes = require('./routes/studentRoutes');
var teacherRoutes = require('./routes/teacherRoutes');
var subjectRoutes = require('./routes/subjectRoutes');
var departmentRoutes = require('./routes/departmentRoutes');
var marksRoutes = require('./routes/marksRoutes');

var app = express();

// Connect to the database
require('./db');

// Enable CORS for all routes
app.use(cors());

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

// API routes
app.use('/api/students', studentRoutes);      // Student routes
app.use('/api/teachers', teacherRoutes);      // Teacher routes
app.use('/api/subjects', subjectRoutes);      // Subject routes
app.use('/api/departments', departmentRoutes); // Department routes
app.use('/api/marks', marksRoutes);           // Marks routes

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
