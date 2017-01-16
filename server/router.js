const router = require('koa-router')();
const controller = require('./controllers/auth.controller.js')
const eventsController = require('./controllers/eventsController.js')
const passport = require('koa-passport');


const authenticate = (strategy) => function *(next) {
  const cb = function * (err, user, info, status) {
    delete user.password
    this.user = user
  }

  yield passport.authenticate(strategy, { session: false }, cb.bind(this)).call(this, next)
  yield next
}

router
  .post('/login', authenticate('basic'), controller.signIn)
  .post('/user', authenticate('bearer'), controller.signIn)
  .get('/events', eventsController.getEvents)
  .post('/events', eventsController.postEvent)
  .delete('/deleteAll', eventsController.dropDb)
  .delete('/events/:id', eventsController.deleteEvent)
  .put('/events', eventsController.updateEvent)


// .post('/event',
//   basicAuth,
//   eventsController.create)

module.exports = router;
