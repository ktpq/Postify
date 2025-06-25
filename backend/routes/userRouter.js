const express = require('express')
const router = express.Router();

const userController = require('../controllers/usersController')

router.get('/api/users/count-unbanned', userController.getUnbannedUser)
router.get('/api/users/:id', userController.getUserById);


router.put('/api/users/:id', userController.updateUser)
router.delete('/api/users/:id', userController.deleteUser);

module.exports = router;