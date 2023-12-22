const router = require('express').Router();
const taskRoutes = require('./task');
const jwtRoutes = require('./jwt');

router.use('/api/v1/task', taskRoutes);
router.use('/api/v1/jwt', jwtRoutes);

module.exports = router;
