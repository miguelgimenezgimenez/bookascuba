const router = require('koa-router')();
const controller = require('./controllers/auth.controller.js')
const eventsController = require('./controllers/eventsController.js')

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
  .post('/sign-in', basicAuth, controller.signIn)
  .get('/events', eventsController.getEvents)
  .post('/events', eventsController.postEvent)
  .delete('/deleteAll', eventsController.dropDb)
  .delete('/events/:id', eventsController.deleteEvent)
  .put('/events', eventsController.updateEvent)


// .post('/event',
//   basicAuth,
//   eventsController.create)

module.exports = router;
