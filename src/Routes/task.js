const router = require('express').Router();
const taskController = require('../Controller/taskController');

router.post('/add', taskController.addTask);

module.exports = router;
