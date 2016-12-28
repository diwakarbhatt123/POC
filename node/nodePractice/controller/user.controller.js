var userService = require('../service/user.service');
exports.saveUser = function (data, res) {
    console.log(userService.saveUser(data));
};