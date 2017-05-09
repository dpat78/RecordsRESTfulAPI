'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecordSchema = new Schema({
  artist: {
    type: String,
  },
   album: {
    type: String,
  },
   genre: {
    type: String,
  },
  release_date: {
    type: String,
  },
 
});


module.exports = mongoose.model('Records', RecordSchema);