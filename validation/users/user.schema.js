const joi = require('@hapi/joi')

const schema = {
    user : joi.object({
        name : joi.string().min(3).message("Minimum 3 characters").max(100).required(),
        email : joi.string().email().message("Invalid email").required(),
        phone :joi.number().integer().min(1000000000).message("Invalid mobile number").max(9999999999).message("Invalid mobile number").required(),
        password : joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).message("Atleast 1 uppercase, 1 lowercase, 1 digit, 1 special charcter").required()
    })
}
module.exports = schema;
