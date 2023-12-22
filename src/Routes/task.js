const router = require('express').Router();
const taskController = require('../Controller/taskController');

router.post('/add', taskController.addTask);
router.get('/get/:email', taskController.getTask);

module.exports = router;
