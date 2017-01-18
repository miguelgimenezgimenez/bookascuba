"use strict";

const Sequelize = require('sequelize')
const sequelize = require('../config/db.js')

var Event = sequelize.define('event', {
  title: {
    type: Sequelize.STRING
  },
  details: {
    type: Sequelize.STRING
  },
  date: {
    type: Sequelize.DATE
  },
  time: {
    type: Sequelize.DATE
  },
  image: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

// Event.sync().then(function () {
//   // Table created
//   return Event.create({
//     title: 'Los cubos',
//     details: 'Cubitos de la playa',
//     date: '2017-01-20 12:00:00.000 +00:00',
//     time: '2017-01-20 11:00:00.000 +00:00',
//     image: 'http://joashpereira.com/templates/material_one_pager/img/avatar1.png'
//     });
// });

module.exports = Event
