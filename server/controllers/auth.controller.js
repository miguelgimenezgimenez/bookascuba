const bcrypt = require('bcrypt')

const authController = {}

authController.signIn = function *(next) {
  console.log('this.request', this.request);
  if(this.request.user) this.body = this.request.user
  else this.status = 401
}

module.exports = authController;
