'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
  HostID: {
    type: String,
    required: 'HostID'
  },
  EventName: {
    type: String,
    required: 'EventName',
    max: 20
  },
  EventDescription: {
    type: String,
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  EventStatus: {
    type: [{
      type: String,
      enum: ['Open','Closed']
    }],
    default: ['Open']
  },
  EventCode: {
    type: [{
      type: String,
      enum: ['Warning', 'Critical', 'Cleared']
    }],
    default: ['Warning']
  }
});

module.exports = mongoose.model('Events', EventSchema);