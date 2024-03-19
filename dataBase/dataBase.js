const sequelize = require('sequelize');

const connection = new sequelize('projectnode','root','Gw12345!',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;