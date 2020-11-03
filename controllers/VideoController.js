const { response } = require('express')
const User = require('../models/User')
const Video = require('../models/Video')

const index = async(req, res, next)=>{
    const video = await Video.find({})
    .then((user)=>{
        res.json(video)
    })
}

const store= async(req, res, next) =>{

    const user = await User.findById(req.body.name)
    const newvideo = new Video({
        video : req.file.path
    })
    
    delete newvideo.name

    const nvideo = new Video(newvideo)
    nvideo.name=user
    await nvideo.save() 
    
    user.video.push(nvideo)
    await user.save()
    .then((user)=>{
        res.json({
            message : "Successfully added!"
        })
    })
}

const getVideo= async(req, res, next)=>{
    const { id } = req.params
    const video = await Video.findById(id)
    .then((user)=>{
        res.json(video)
    })
}

module.exports= {
    store, getVideo, index
 }