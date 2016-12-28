var assert = require("chai").assert;
var fun = require('./fun');
describe("Basic assert testing", function () {
    var foo = false;
    it("number should not be nan", function () {
        assert.equal(foo, false);
    });
});