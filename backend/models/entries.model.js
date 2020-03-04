const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const entriesSchema = new Schema({
    name : {type: String, required: true},
    TotalCases: {type: Number, required: true},
    TotalDeaths: {type: Number, required: true},
    TotalRecovered: {type: Number, required: true}, 
    },{
        timestamps: true,
    });


const Entires = mongoose.model('Entries', entriesSchema);

module.exports = Entires;