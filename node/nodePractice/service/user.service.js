var User = require('../domain/user.domain');
exports.saveUser = function (data) {
    var user = new User(data);
    var promise = user.save();
    var result;
    promise.then(function (doc) {
        result = doc;
    })
    return result;
};