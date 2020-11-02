const { response } = require('express')
const Employee = require('../models/Videos')

const index = (req, res, next) => {
    Employee.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message : "An error occured!"
        })
    })
}

const show = (req, res, next) => {
    let employeeID = req.body.employeeID
    Employee.findById(employeeID)
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.join({
            message :'An error occured!'
        })
    })
}

const store= (req, res, next) =>{
    let employee = new Employee({
        video : req.file.path
    })
    employee.save()
    .then((response)=>{
        res.json({
            message : 'Employee added successfully'
        })
    })
    .catch(error =>{
        res.json({
            message : 'An error occured!'
        })
    })
}

 module.exports= {
     index, store
 }