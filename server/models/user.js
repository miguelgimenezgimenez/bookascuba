"use strict";

const Sequelize = require('sequelize')

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('user', {
    username: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING
    }
  }, {
    freezeTableName: true // Model tableName will be the same as the model name
  });

  User.sync({force: true}).then(function () {
    // Table created
    return User.create({
      username: 'admin',
      password: '$2a$10$kgkM8ysm85eNHecJ4bdH8.yGzH0XE7HpfBmsit5JIqD6muFrxLr16'
    });
  });

};
