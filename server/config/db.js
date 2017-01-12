const Sequelize = require('sequelize')
const bcrypt = require('bcrypt')
const saltRounds = 10;


// bcrypt.hash('bananas', saltRounds, (err, hash) => {
//   console.log('hash: ', hash);
// });

var sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'sqlite',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

  // SQLite only
  storage: './database.sqlite'
});

module.exports = sequelize
