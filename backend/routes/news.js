const router = require('express').Router();
const express = require('express');

let News = require('../models/news.model');

const app = express();

// router.route('/').get((req, res) => {       //get method
//   Entry.find()       //mongoose method to find all the users; return a promise
//     .then(entries => res.json(entries))     //return a json that we got from the database
//     .catch(err => res.status(400).json('Error: ' + err));       //error message
// });

router.route('/:_id').get((req, res) => {        
  // Entry.find( {_id: req.params._id})
  News.findById(req.params._id)
      .then(news => res.json(news))
      .catch(err => res.status(400).json('Error: ' + err));
});

  router.route('/:_id').delete((req, res) => {
    News.findByIdAndDelete(req.params._id)
      .then(() => res.json('News deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/add').post((req, res) => {       //post method
  // const date = Date.parse(req.body.date);
  _id = req.body._id;
  const news = req.body.news;

  const newNews = new News({
    _id,
    news
  });

  newNews.save()        //mongoose save method
    .then(() => res.json('News added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;