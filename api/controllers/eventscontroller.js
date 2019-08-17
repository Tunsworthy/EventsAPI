'use strict';

var mongoose = require('mongoose'),
  Event = mongoose.model('Events');

exports.list_all_events = function(req, res) {
  Event.find({}, function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};
exports.list_all_status = function(req, res) {
  Event.find({EventStatus: req.params.eventId}, function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};
exports.list_all_code = function(req, res) {
  Event.find({EventCode: req.params.eventId}, function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};



exports.create_a_event = function(req, res) {
  var new_event = new Event(req.body);
  new_event.save(function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};


exports.read_a_event = function(req, res) {
  Event.find({HostID: req.params.eventId}, function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};


exports.update_a_event = function(req, res) {
  Event.findOneAndUpdate({_id: req.params.eventId}, req.body, {new: true}, function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};


exports.delete_a_event = function(req, res) {


  Event.remove({
    _id: req.params.eventId
  }, function(err, event) {
    if (err)
      res.send(err);
    res.json({ message: 'Event successfully deleted' });
  });
};