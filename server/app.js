'use strict'

const hostname = '127.0.0.1';
const port = 3000;

const app = require('koa')();
const fs = require('fs');
const serve = require('koa-static');
const passport = require('koa-passport');

const bodyParser = require('koa-body');
const db = require('./config/db.js');
const router = require('./router.js');

const BasicStrategy = require('passport-http').BasicStrategy;

passport.use(new BasicStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      bcrypt.compare(a,b,function(){
        if ok return done(null, user)
        else done(null, false)
      })
    });
  }
));

app.use(bodyParser());
app.use(router.routes());
// app.use(serve('../client'))
app.use(passport.initialize());

app.use(function* (next) {
   if (this.status === 404) this.body = notFound;
 });

app.listen(port, hostname, () => {
  console.log(`Server BAS running at http://${hostname}:${port}/`);
});
