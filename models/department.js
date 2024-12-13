const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DepartmentSchema = new Schema({
  name: { type: String, required: true },
  code: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('Department', DepartmentSchema);
