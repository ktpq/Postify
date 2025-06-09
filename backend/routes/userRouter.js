const express = require('express')
const router = express.Router();

const userController = require('../controllers/usersController')

router.delete('/api/users/:id', userController.deleteUser);

module.exports = router;