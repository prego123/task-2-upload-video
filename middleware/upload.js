const path = require('path')
const multer = require('multer')

var storage = multer.diskStorage({
    destination : function (re, res, cb) {
        cb(null, 'uploads/')
    },
    filename : function(req, file, cb) {
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
})

var upload = multer({
    storage : storage,
    fileFilter : function(req, file, callback){
        if(
            file.mimetype== "video/mp4" ||
            file.mimetype == "video/avi"
        ){
            callback(null, true)
        }
         else{
             console.log("only mp4 & avi file supporter")
             callback(null, false)
         }   
    },
    limits :{
        fileSize : 1024*1024*5
    }
})
module.exports = upload
