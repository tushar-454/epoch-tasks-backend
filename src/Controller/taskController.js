const Task = require('../Model/Task');

/**
 * here add a task
 * data come from body
 * title,desc,deadline,priroty,email
 */
const addTask = async (req, res, next) => {
  try {
    const { title, description, deadline, priroty, email } = req.body;
    const createTask = new Task({
      title,
      description,
      deadline,
      priroty,
      email,
      createAt: new Date(),
      status: 'todo',
      trash: false,
    });
    const result = await createTask.save();
    res.status(201).json({ message: 'success', data: result });
  } catch (error) {
    next(error);
  }
};

/**
 * get task using email
 * here no get all task function
 */
const getTask = async (req, res, next) => {
  try {
    const email = req.params.email;
    const result = await Task.find({ email });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addTask,
  getTask,
};
