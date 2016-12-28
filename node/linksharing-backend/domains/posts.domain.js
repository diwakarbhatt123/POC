/**
 * Created by ttnd on 10/10/16.
 */
var Sequelize = require('sequelize');
var sequalize = require('../datasource/mysql.datasource');
var Posts = sequalize.define('post', {
    description: {
        type: Sequelize.STRING
    },
    url: {
        type: Sequelize.STRING
    },
    filePath: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true
});
Posts.sync({force: true}).then(function (res) {
    console.log(res + " created");
});