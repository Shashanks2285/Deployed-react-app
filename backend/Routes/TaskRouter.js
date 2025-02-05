// routes/TaskRouter.js
const express = require('express');
const TaskRouter = express.Router();
const { addTasks, getTasks, deleteTask } = require('../Controller/TaskController');  // Ensure deleteTask is imported

// Add tasks route
TaskRouter.post('/add', addTasks);

// Get tasks by userId route
TaskRouter.get('/all/:userId', getTasks);


module.exports = TaskRouter;
