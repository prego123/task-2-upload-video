const mongoose=require('mongoose')
const User = require('./User')
const Schema=mongoose.Schema

const videosSchema= new Schema({
    video : {
        type : String
    },
    name : {
        type : Schema.Types.ObjectId,
        ref : 'User' 
    }
}, {timestamps : true})

const Video = mongoose.model('Videos', videosSchema)
module.exports = Video
