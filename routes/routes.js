var express = require("express");
var router = express.Router();
let controller = require("../controller/projectController")

router.post('/',(req,res) => {
    controller.createProjects(req,res);
})

router.get('/',(req,res) => {
    controller.retrieveProjects(req,res);
})

module.exports = router;