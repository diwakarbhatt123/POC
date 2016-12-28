var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    name: String,
    age: Number,
    userName: String,
    password: String
});
module.exports = mongoose.model("User", userSchema);