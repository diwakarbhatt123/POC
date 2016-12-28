var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/demo");

(function isConnected() {
    mongoose.connection.on("error", function (err) {
        console.log("An error occured");
    });
    mongoose.connection.on("open", function (err) {
        console.log("Connected to database");
    });
})();