var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/nodePractice");
var db = mongoose.connection;
db.once("open", function () {
    console.log("Connected to mongo!!")
});
db.on("error", function (error) {
    console.log("Could not connect. Error:%s", error);
});