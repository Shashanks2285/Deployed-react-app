// controllers/TaskController.js
const TaskModel = require('../Modal/TaskSchema');

// Add new task(s) for the logged-in user
const addTasks = async (req, res) => {
  try {
    const { tasks, userId } = req.body;  // Array of task objects, userId

    if (!tasks || tasks.length === 0) {
      return res.status(400).json({ message: 'No tasks provided' });
    }

    // Create or update the task list for the user (overwrite previous tasks)
    const existingTask = await TaskModel.findOne({ userId });

    if (existingTask) {
      // If tasks already exist for the user, update the list of tasks
      existingTask.tasks = tasks;
      await existingTask.save();
      return res.status(200).json({
        message: 'Tasks updated successfully!',
        success: true,
      });
    } else {
      // If no existing task list, create a new one
      const newTask = new TaskModel({
        userId,
        tasks,
      });
      await newTask.save();
      return res.status(201).json({
        message: 'Tasks added successfully!',
        success: true,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Error adding tasks',
      success: false,
    });
  }
};

// Get all tasks for the logged-in user
const getTasks = async (req, res) => {
  try {
    const userId = req.params.userId;  // Get userId from URL params
    const taskList = await TaskModel.findOne({ userId });

    if (!taskList) {
      return res.status(404).json({
        message: 'No tasks found for this user.',
        success: false,
      });
    }

    res.status(200).json({
      success: true,
      tasks: taskList.tasks,  // Send back the list of tasks
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Error fetching tasks',
      success: false,
    });
  }
};

module.exports = {
  addTasks,
  getTasks,
};
