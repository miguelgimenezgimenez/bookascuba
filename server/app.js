'use strict'

const hostname = '127.0.0.1';
const port = 3000;

const app = require('koa')();
const fs = require('fs');
const serve = require('koa-static');
const passport = require('koa-passport');

const db = require('./config/db.js');
const router = require('./router.js');
var User = require('./config/db.js')

app.use(serve('../client'))

// body parser
const bodyParser = require('koa-body');
app.use(bodyParser())

// Sessions
var session = require('koa-session')
app.keys = ['secret']

app.use(function* (next) {
  passport.initialize();
  yield next;
})

const BasicStrategy = require('passport-http').BasicStrategy;

passport.use(new BasicStrategy(
  function(username, password, done) {
    console.log('uername: ', username);
    User.findOne({ username: username }, function (err, user) {
      if (err) {
        console.log('in findOne err');
        return done(err);
      }
      if (!user) {
        console.log('in findOne !user');
        return done(null, false);
      }
      if (bcrypt.compare(password, hash)) {
        console.log('in ok bcrypt compare ');
        return done(null, user)
      }
      console.log('in findOne incorrect password');
      return done(null, false);
    });
  }
));

app.use(function* (next) {
  console.log("body parsing: ", this.request.body);
  yield passport.authenticate('basic');
  console.log(this.request.user);
})

app.use(function* (next) {
   if (this.status === 404) this.body = 'ooopsss';
 });

app.listen(port, hostname, () => {
  console.log(`Server BAS running at http://${hostname}:${port}/`);
});
