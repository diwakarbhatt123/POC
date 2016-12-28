var async = require('async');
var tasks = [];
tasks.push(function () {
    var value;
    setTimeout(function () {
        this.value = 21;
    }, 2000);
    return value;
});
tasks.push(function (cb) {
    var val;
    setTimeout(function () {
        this.val = cb() * 21;
    }, 2000);
    return val;
});
async.series(tasks, function (err, data) {
    console.log(err);
})