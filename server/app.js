'use strict'

const hostname = 'localhost';
const port = 3001;

const app = require('koa')();
const fs = require('fs');
const serve = require('koa-static');
const passport = require('koa-passport');
const bcrypt = require('bcrypt')
const cors = require('koa-cors');
const jwt = require('koa-jwt');


const db = require('./config/db.js');
const router = require('./router.js');
var User = require('./models/user.js')

app.use(serve('../client'))
app.use(cors());


// body parser
const bodyParser = require('koa-body');
app.use(bodyParser())

// Sessions
var session = require('koa-session')
app.keys = ['secret']

app.use(passport.initialize())



const BasicStrategy = require('passport-http').BasicStrategy;
const BearerStrategy = require('passport-http-bearer').Strategy;



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

passport.use(new BearerStrategy(
  function(token, done) {
    User.findOne({ where: {token} })
      .then(function (result) {
        if(!result) return done(null, false);
        return done(null, result.dataValues)
      })
  })
);

app.use(function *(next){
  try {
    yield next;
  } catch (err) {
    if (401 == err.status) {
      this.status = 401;
      this.body = 'Protected resource, use Authorization header to get access\n';
    } else {
      throw err;
    }
  }
});

app.use(router.routes())

app.use(function* (next) {
   if (this.status === 404) this.body = 'ooopsss';
 });

app.listen(port, hostname, () => {
  console.log(`Server BAS running at http://${hostname}:${port}/`);
});
