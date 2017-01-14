"use strict";

const Sequelize = require('sequelize')
const sequelize = require('../config/db.js')

var User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING
  },
  token: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

User.sync().then(function () {
  // Table created
  const username = 'admin'
  return User.findOne({ where: { username } })
  .then(function (user,err) {
    if(!user) {
      return User.create({
        username: username,
        password: '$2a$10$kgkM8ysm85eNHecJ4bdH8.yGzH0XE7HpfBmsit5JIqD6muFrxLr16',
        token: '123456789'
      });
    }
  })
});

module.exports = User
