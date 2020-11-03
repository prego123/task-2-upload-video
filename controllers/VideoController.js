const { response } = require('express')
const { cloudinary } = require('../middleware/cloudinary')
const User = require('../models/User')
const Video = require('../models/Video')

const index = async(req, res, next)=>{
    const video = await Video.find({})
    .then((user)=>{
        res.json(video)
    })
}

const store= async(req, res, next) =>{
    const nm = req.body.name 
    const result = await cloudinary.uploader.upload(req.file.path, {
        resource_type : "video", 
        public_id : nm,
        chunk_size : 6000000 ,
        is_audio :true,
        eager : [
            { width: 300, height : 300, crop: "pad", audio_codec : "none"},
            { width : 160, height : 100, crop: "crop", gravity : "south", audio_codec : "none"}
        ], 
        overwrite : true, 
        eager_async : true,
        format : "mp4",
        transformation : [
            { end_offset : "30", }
        ]
    },
    function (error, result) {
        console.log(result, error)
    }
    )
    const user = await User.findById(req.body.name)
    const newvideo = new Video({
        video : result.secure_url
    })
    
    delete newvideo.name

    const nvideo = new Video(newvideo)
    nvideo.name=user
    nvideo.video = result.secure_url
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