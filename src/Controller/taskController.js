const Task = require('../Model/Task');

const addTask = async (req, res, next) => {
  try {
    const { title, description, deadline, priroty } = req.body;
    console.log(title, description, deadline, priroty);
    const createTask = new Task({
      title,
      description,
      deadline,
      priroty,
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
