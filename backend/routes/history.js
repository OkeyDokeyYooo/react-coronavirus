const router = require('express').Router();
const express = require('express');

let History = require('../models/history.model');

const app = express();

router.route('/').get((req, res) => {       //get method


  History.find({
    "createdAt": {
      $gte: (new Date(new Date()).getTime() - (30 * 24 * 60 * 60 * 1000))
    }
  })       //mongoose method to find all the users; return a promise
    .then(histories => res.json(histories))     //return a json that we got from the database
    .catch(err => res.status(400).json('Error: ' + err));       //error message
});

router.route('/update/:_id').post((req, res) => {
  // Entry.findById(req.params._id)
  Entry.find( {_id: req.params._id})
    .then(entry => {
      entry._id = req.body._id;
      entry.trk = req.body.trk;
      entry.diff = req.body.diff;

      entry.save()
        .then(() => res.json('Entry updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/update/:_id').post((req, res) => {
//   Entry.findOneAndUpdate({_id: req.params.id}, req.body, function (err, entry) {
//     res.json('Entry Updated')
//   })
// });

// router.route('/:_id').get((req, res) => {        
//   // Entry.find( {_id: req.params._id})
//   Entry.findById(req.params._id)
//       .then(entry => res.json(entry))
//       .catch(err => res.status(400).json('Error: ' + err));
//   });

module.exports = router;