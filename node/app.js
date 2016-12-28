var http = require('http');
var util = require('./util.js');
var express = require('express');
var request = require('request');
var app = express();
const PORT = 3000;
var obj = {
    name: "Diwakar",
    age: 21
};
var server = http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.end(requestNode());
});

function requestNode() {
    request("http://nodejs.org", function (error, response, body) {
        console.log(error);
    })
}

server.listen(PORT, function () {
    console.log("Server listening on: http://localhost:%s", PORT);
});