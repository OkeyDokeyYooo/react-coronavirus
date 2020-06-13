const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const historySchema = new Schema({
  data: {
    labels: [{type: String}],
    totalCases: [{type: Number}],
    newCases: [{type: Number}]
  }
});

const History = mongoose.model('History', historySchema);

module.exports = History;