var request = require('request');
request("http://nodejs.org", function (error, response, body) {
    console.log(body);
})