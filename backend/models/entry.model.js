const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const entrySchema = new Schema({
  // date: { type: Date, required: true},
  _id: {type: String, required: true},
  //trk: []
  trk: [{
    id: String,
    name: String,
    TotalCases: Number,
    NewCases: Number,
    TotalDeaths: Number,
    NewDeaths: Number,
    ActiveCases: Number,
    TotalRecovered: Number,
    Serious: Number 
  }]
  }, {
  timestamps: true,
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;