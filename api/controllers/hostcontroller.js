'use strict';

var mongoose = require('mongoose'),
  Event = mongoose.model('Events');

exports.read_a_host = function(req, res) {
  Event.find({HostID: req.params.hostId}, function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};
exports.list_host_status = function(req, res) {
  Event.find({HostID: req.params.hostId,EventStatus: req.params.eventstatus}, function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  }); 
};