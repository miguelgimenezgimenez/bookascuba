const bcrypt = require('bcrypt')

const authController = {}

authController.signIn = function *(next) {
  if(!this.user) this.status = 401
  this.body = this.user
}

module.exports = authController;
