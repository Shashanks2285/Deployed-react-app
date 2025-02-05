// models/TaskSchema.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    tasks: [{ title: { type: String, required: true }, description: { type: String, required: false } }],
  },
  { timestamps: true }
);

const TaskModel = mongoose.model('Task', taskSchema);
module.exports = TaskModel;
