"use strict";

const Sequelize = require('sequelize')
const sequelize = require('../config/db.js')
const Event = require('./event.js')
var Appt = sequelize.define('appt', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  cert: {
    type: Sequelize.STRING
  },
  rent: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

Appt.belongsTo(Event)

// Appt.sync().then(function () {
//   // Table created
//   return Appt.create({
//     name: 'JC',
//     email: 'a@a.com',
//     cert: 'Instructor',
//     rent: 'Yes'
//     });
// });

module.exports = Appt
