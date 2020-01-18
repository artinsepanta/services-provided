const express = require('express')
const usersController = require('../controllers/users')
const { authenticate } = require('../middleware')
const router = express.Router()

router.get('/', authenticate, usersController.getAllUsers)

router.get('/:id', authenticate, usersController.getUserByUserId)

router.post('/', authenticate, usersController.createUser)

router.put('/:id', authenticate, usersController.updateUserByUserId)

router.delete('/:firstName', authenticate, usersController.deleteUserByFirstName)

module.exports = router