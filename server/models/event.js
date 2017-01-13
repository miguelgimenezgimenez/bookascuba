"use strict";

const Sequelize = require('sequelize')
const sequelize = require('../config/db.js')

var Event = sequelize.define('event', {
  title: {
    type: Sequelize.STRING,
  },
  date: {
    type: Sequelize.DATE
  },
  detail: {
    type: Sequelize.STRING,
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

Event.sync().then(function () {
  // Table created
  return Event.create({
    title: 'La moderneta',
    date: '2017-01-13 10:53:59.932 +00:00',
    detail: 'Un buceito en Barcelona'
    });
});

module.exports = Event
