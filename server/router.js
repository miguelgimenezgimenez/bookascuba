const router = require('koa-router')();
const controller = require('./controllers/auth.controller.js')

router
  .get('/signIn', controller.signIn);

module.exports = router;
