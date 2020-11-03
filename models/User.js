const { timeStamp } = require('console')
const Videos= require('./Video')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema ({
    name : {
        type : String
    },
    email : {
        type : String
    },
    phone : {
        type : Number
    },
    password : {
        type : String
    },
    video :[{
        type : Schema.Types.ObjectId,
        ref : 'Video'
    }]
}, {timeStamps : true})

const User = mongoose.model('User', userSchema)
module.exports = User