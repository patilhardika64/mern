const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MarksSchema = new Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher', required: true },
  marksObtained: { type: Number, required: true },
  totalMarks: { type: Number, required: true },
});

module.exports = mongoose.model('Marks', MarksSchema);
