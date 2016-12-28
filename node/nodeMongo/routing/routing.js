var userController = require('../controller/user.controller');
module.exports = function (app) {

    app.post("/api/v1/user", function (req, res) {
        var body = req.body;
        console.log(body);
        userController.createUser(body, res);
    });

}