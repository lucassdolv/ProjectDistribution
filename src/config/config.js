const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('eventosLucas','root','root', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;