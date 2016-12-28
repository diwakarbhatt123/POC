var userService = require('../service/user.service');

exports.createUser = function (body, res) {
    return userService.createUser(body, res);
};