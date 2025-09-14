const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')
const { validateUser } = require('../middleware/validation.middleware')

// Routes
router.get('/', userController.getAllUsers)
router.post('/', validateUser, userController.createUser)
router.get('/:id', userController.getUserById)
router.put('/:id', validateUser, userController.updateUser)
router.delete('/:id', userController.deleteUser)

module.exports = router
