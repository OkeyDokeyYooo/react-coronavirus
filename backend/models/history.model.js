const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const historySchema = new Schema({
  data: {
    labels: [{type: String}],
    totalCases: [{type: number}],
    newCases: [{type: number}]
  }
});

const History = mongoose.model('History', historySchema);

module.exports = History;