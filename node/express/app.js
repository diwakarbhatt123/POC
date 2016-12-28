var express = require('express');
var app = express();
app.get('/hello', function (req, res) {
    res.end("This is node routing");
});
var server = app.listen(8888, function () {
    console.log(server.address());
});