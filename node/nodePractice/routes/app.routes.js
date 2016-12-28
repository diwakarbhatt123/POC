var express = require('express');
var router = express.Router();
var userController = require('../controller/user.controller');
router.post("/", function (req, res, next) {
    console.log("This is middleware");
    next();
}, function (req, res) {
    console.log("in route action");
    var data = req.body;
    console.log(data);
    userController.saveUser(data, res);
});
module.exports = router;