const bcrypt = require('bcrypt')

const authController = {}

authController.signIn = function *(next) {
  if(request.user) this.body = request.user
  else this.status = 401
}

module.exports = authController;
