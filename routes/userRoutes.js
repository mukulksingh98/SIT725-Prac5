var express = require("express");
var router = express.Router();

router.get('/',(req,res) => {
    getProjects((err,result) => {
            res.json({statusCode: 200, message:"Success", data: result})
    })
})

module.exports = router;