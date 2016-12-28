var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser());
require("./routing/routing")(app);
app.listen(8888);
var mongoose = require('./datasource/datasource');