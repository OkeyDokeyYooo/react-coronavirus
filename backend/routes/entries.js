const router = require('express').Router();
let Entry = require('../models/entry.model');

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

router.route('/add').post((req, res) => {       //post method
  // const date = Date.parse(req.body.date);
  _id = req.body._id;
  const trk = req.body.trk;

  const newEntry = new Entry({
    _id,
    trk
  });

  newEntry.save()        //mongoose save method
    .then(() => res.json('Entry added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;