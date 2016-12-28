var User = require('../domain/user.domain')
exports.createUser = function (body, res) {
    var user = new User(body);
    user.save(function (err, result) {
        res.send(result);
    })
}