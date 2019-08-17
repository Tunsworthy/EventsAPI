'use strict';
module.exports = function(app) {
  var Event = require('../controllers/hostController');


  //Host 
 app.route('/host/:hostId')
    .get(Event.read_a_host);
    
  app.route('/host/:hostId/:eventstatus')
    .get(Event.list_host_status);

};