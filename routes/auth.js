const express = require('express')
const router = express.Router()

const AuthController = require('../controllers/AuthController')

const { addUserValidation } = require("../validation/users/user.validation")

router.post('/register', addUserValidation ,AuthController.register)
router.post('/login', AuthController.login)

module.exports = router 
