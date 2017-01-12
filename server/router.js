const router = require('koa-router')();
const controller = require('./controllers/auth.controller.js')
const passport = require('koa-passport');

// router.post('/signIn', controller.signIn);

router.post('/signIn', function* (next) {
  passport.authenticate('basic', { session: false });
  yield next;
},
function* (next) {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  this.body = this.request;
});

module.exports = router;
