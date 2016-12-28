var express = require('express');
var app = express();
var root = require('./routes/app.routes');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('/user', root);
app.listen(8888, function () {
    console.log("App started on port 8888");
});
var mongoose = require('./datasource/mongo.datasource');