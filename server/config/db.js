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

module.exports = sequelize
