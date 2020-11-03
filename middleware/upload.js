const path = require('path')
const multer = require('multer')

/*var storage = multer.diskStorage({
    destination : function (re, res, cb) {
        cb(null, 'uploads/')
    },
    filename : function(req, file, cb) {
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
})*/

var upload = multer({
    storage : multer.diskStorage({}),
    fileFilter : (req, file, callback)=>{
        if(file.mimetype.match(/mp4|avi|mkv|mov|$i/))
        {
            callback(null, true)
            console.log("Done!")
        }
         else{
             console.log("only mp4 & avi file supporter")
             callback(null, false)
         }   
    }
}) 

module.exports = upload