const { timeStamp } = require('console')
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
    }
}, {timeStamps : true})

const User = mongoose.model('User', userSchema)
module.exports = User