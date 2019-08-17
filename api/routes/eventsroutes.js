'use strict';
module.exports = function(app) {
  var Event = require('../controllers/eventsController');

  // Event Routes
  app.route('/events')
    .get(Event.list_all_events)
    .post(Event.create_a_event);


  app.route('/events/:eventId')
    .get(Event.read_a_event)
    .put(Event.update_a_event)
    .delete(Event.delete_a_event);
//all lists Events
app.route('/events/list_all_status/:eventId')
	.get(Event.list_all_status);

app.route('/events/list_all_code/:eventId')
	.get(Event.list_all_code);

};