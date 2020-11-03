const express = require('express')
const router = express.Router()

const AuthController = require('../controllers/AuthController')
const upload = require('../middleware/upload')

const { addUserValidation } = require("../validation/users/user.validation")

router.get('/', AuthController.index)
router.post('/', addUserValidation ,AuthController.register)
router.get('/:id', AuthController.getUser)
router.get('/:id/videos', AuthController.getUserVideos)
router.post('/:id/videos', upload.single('video'),  AuthController.newUserVideos)

module.exports = router 
 