const { response } = require("express");

const express = require('express')
const router= express.Router()

const VideoController = require('../controllers/VideoController')
const upload = require('../middleware/upload')

router.post('/', upload.single('video') ,VideoController.store)
//router.get('/', VideoController.index)
//router.get('/:id', VideoController.getVideo)



module.exports = router
