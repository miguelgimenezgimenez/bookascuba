const router = require('koa-router')();
const controller = require('./controllers/auth.controller.js')
const passport = require('koa-passport');

// router.post('/signIn', controller.signIn);

const basicAuth = function *(next) {
  var ctx = this
  yield passport.authenticate('basic', { session: false },
    function * (err, user, info, status) {
      delete user.password
      ctx.user = user
    }
  ).call(this, next)
  yield next
}

router
.post(
  '/sign-in',
  basicAuth,
  controller.signIn)

// .post('/event',
//   basicAuth,
//   eventsController.create)

module.exports = router;
