const router = require('express').Router();
const taskRoutes = require('./task');

router.use('/api/v1/task', taskRoutes);

module.exports = router;
