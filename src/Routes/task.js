const router = require('express').Router();
const taskController = require('../Controller/taskController');

router.post('/add', taskController.addTask);
router.get('/get/:email', taskController.getTask);
router.delete('/remove/:id', taskController.delTask);
router.patch('/trash/:id', taskController.trashTask);
router.patch('/status/:id', taskController.handleStatusTask);
router.put('/update/:id', taskController.updateTask);
router.get('/getSpecific', taskController.specificTask);

module.exports = router;
