'use strict'

const hostname = '127.0.0.1';
const port = 3000;

const app = require('koa')();
const fs = require('fs');
const serve = require('koa-static');
const passport = require('koa-passport');
const bcrypt = require('bcrypt')

const db = require('./config/db.js');
const router = require('./router.js');
var User = require('./models/user.js')

app.use(serve('../client'))

// body parser
const bodyParser = require('koa-body');
app.use(bodyParser())

// Sessions
var session = require('koa-session')
app.keys = ['secret']

app.use(passport.initialize())

const BasicStrategy = require('passport-http').BasicStrategy;

passport.use(new BasicStrategy(
  function(username, password, done) {
    // console.log('username: ', username);
    // console.log('User: ', User);
    var user
    User.findOne({ where: {username} })
      .then(function (result) {
        if(!result) return done(null, false);

        user = result.dataValues
        return bcrypt.compare(password, user.password)
      })
      .then(function (res) {
        if (res) {
          done(null, user)
        } else {
          done(null, false)
        }
      });
  }
));

app.use(router.routes())

app.use(function* (next) {
   if (this.status === 404) this.body = 'ooopsss';
 });

app.listen(port, hostname, () => {
  console.log(`Server BAS running at http://${hostname}:${port}/`);
});
