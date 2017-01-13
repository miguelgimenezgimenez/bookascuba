var eventsController = {}

var Event = require('../models/Event.js')

eventsController.getEvents = function * (next) {
  this.body = yield Event.findAll()
}

eventsController.postEvent = function * (next) {
  var eventData = this.request.body
  console.log(Date.parse(eventData.date));
  this.body = yield Event.create({
    title: eventData.title,
    details: eventData.details,
    date: eventData.date,
    time: eventData.time
  })
  this.status = 201
}

module.exports = eventsController;
