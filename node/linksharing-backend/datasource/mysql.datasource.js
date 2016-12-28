/**
 * Created by ttnd on 10/10/16.
 */
var Sequelize = require('sequelize');
var mysql = require('mysql');
var sequelize = new Sequelize('linksharingnode', 'root', 'igdefault', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

module.exports = sequelize;