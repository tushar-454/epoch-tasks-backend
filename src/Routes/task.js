const router = require('express').Router();
const taskController = require('../Controller/taskController');

router.post('/add', taskController.addTask);
router.get('/get/:email', taskController.getTask);
router.delete('/remove/:id', taskController.delTask);
router.patch('/trash/:id', taskController.trashTask);

module.exports = router;
