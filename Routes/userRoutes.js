const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, userController.getAllUsers);
router.use(authMiddleware);  

router.get('/', userController.getAllUsers);

router.post('/', userController.createUser);

router.put('/:userId', userController.updateUser);


router.delete('/:userId', userController.deleteUser);


router.get('/countByRole', userController.getUserCountByRole);

module.exports = router;
