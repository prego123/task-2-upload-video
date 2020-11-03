const User = require('../models/User')
const Video = require('../models/Video')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = (req, res, next) =>{
    bcrypt.hash(req.body.password, 10, function(err, hashedPass){
        if (err){
            res.json({
                error :err
            })
        }
        let user= new User({
            name : req.body.name, 
            email : req.body.email,
            phone : req.body.phone,
            password : req.body.password,
        })
        user.save()
        .then(user =>{
            res.json({
                message : 'User added successfully'
            })
        })
        .catch(error =>{
            res.json({
                message : 'An error occured!'
            })
        })
    })
}

const index = async(req, res, next)=>{
    const users = await User.find({})
    .then(user => {
        res.json(users)
    }).catch((error)=>{
        res.json({
            message : 'No user found'
        })
    })
}

const getUser = async(req, res, next) =>{
    const users = await User.findById(eq.value.params.id)
    .then(user => {
        res.json(users)
    })
}

const getUserVideos = async(req, res, next)=>{
    const { id } = req.params
    const user = await User.findById(id).populate('videos')
    .then(user => {
        res.json(user)
    })
}

const newUserVideos = async(req, res, next)=>{
    const { id } = req.params

    const newVideo = new Video()
    if(req.file)
    {
        newVideo.video = req.file.path
    }

    const us = await User.findById(id)

    newVideo.name= us

    await newVideo.save()

    us.video.push(newVideo)
    await us.save()
    .then(user => {
        res.json(us)
    })
}

module.exports ={
    register, index, getUser, getUserVideos, newUserVideos
}