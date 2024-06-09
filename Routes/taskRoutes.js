const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, taskController.getTasksByUser);
router.use(authMiddleware);  

router.get('/', taskController.getTasksByUser);

router.post('/', taskController.createTask);

router.put('/:taskId', taskController.updateTask);

router.delete('/:taskId', taskController.deleteTask);

router.get('/unassigned', taskController.getTasksWithoutOwner);


router.put('/:taskId/assign', taskController.assignOwnerToTask);

module.exports = router;
