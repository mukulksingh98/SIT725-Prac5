var model = require('../models/project')
const createProjects = (req,res) => {
    var newProject = req.body;
    model.insertProjects(newProject,(err, result) => {
        if(err) {
            res.json({statusCode:400, message:err})
        }
        else {
            res.json({statusCode:200, message:"Project Added", data: result})
        }
    })
}
const retrieveProjects = (req,res) => {
    model.getProjects((err, result) => {
        if(err) {
            res.json({statusCode:400, message:err})
        }
        else {
            res.json({statusCode:200, message:"Success", data: result})
        }
    })
}

module.exports = {
    retrieveProjects, createProjects
}