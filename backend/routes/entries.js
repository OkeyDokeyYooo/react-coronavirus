const router = require('express').Router();
const express = require('express');

let Entry = require('../models/entry.model');

const app = express();

router.route('/').get((req, res) => {       //get method
  Entry.find()       //mongoose method to find all the users; return a promise
    .then(entries => res.json(entries))     //return a json that we got from the database
    .catch(err => res.status(400).json('Error: ' + err));       //error message
});

router.route('/:_id').get((req, res) => {        
  // Entry.find( {_id: req.params._id})
  Entry.findById(req.params._id)
      .then(entry => res.json(entry))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:_id').delete((req, res) => {
    Entry.findByIdAndDelete(req.params._id)
      .then(() => res.json('Entry deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/add').post((req, res) => {       //post method
  // const date = Date.parse(req.body.date);
  _id = req.body._id;
  const trk = req.body.trk;
  const diff = req.body.diff

  const newEntry = new Entry({
    _id,
    trk,
    diff
  });

  newEntry.save()        //mongoose save method
    .then(() => res.json('Entry added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// app.put('/update/:_id', (req, res, next) => {
//   let _id = {
//     _id: ObjectID(req.params._id)
//   };

//   dbase.collection("entries").update({_id: _id}, {$set:{'trk': req.body.trk, 'diff': req.body.diff}}, (err, result) => {
//     if(err) {
//       throw err;
//     }
//     res.send('user updated sucessfully');
//   });
// });

// router.route('/update/:_id').post((req, res) => {
//   // Entry.findById(req.params._id)
//   Entry.find( {_id: req.params._id})
//     .then(entry => {
//       entry._id = req.body._id;
//       entry.trk = req.body.trk;
//       entry.diff = req.body.diff;

//       entry.save()
//         .then(() => res.json('Entry updated!'))
//         .catch(err => res.status(400).json('Error: ' + err));
//     })
//     .catch(err => res.status(400).json('Error: ' + err));
// });

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