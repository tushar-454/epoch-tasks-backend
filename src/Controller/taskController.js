const Task = require('../Model/Task');

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

module.exports = {
  addTask,
};
