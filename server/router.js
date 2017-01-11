const router = require('koa-router')();
const controller = require('./controllers/auth.controller.js')

router
  .get('/sign-in', controller.signIn);

module.exports = router;
