var apptController = {}

var Appt = require('../models/Appt.js')

apptController.getAppts = function * (next) {
  this.body = yield Appt.findAll()
}

apptController.postAppt = function * (next) {
  var apptData = this.request.body
  console.log('in post apptData: ', apptData);
  this.body = yield Appt.create({
    name: apptData.name,
    email: apptData.email,
    cert: apptData.cert,
    rent: apptData.rent,
    eventId: apptData.eventId
  })
  this.status = 201
}

apptController.deleteAppt = function * (next) {
  var apptData = this.request.body;
  console.log('in delete apptData: ', apptData);
  this.body = yield Appt.destroy({
    where:{
      id: this.params.id
    }
  });
  this.status = 200
}

apptController.dropDb = function * (next) {
  this.body = yield Appt.destroy({where:{}});
  this.status = 200
}


module.exports = apptController;
