const router = require('express').Router();
let Entries = require('../models/entries.model')

router.route('/').get((req, res) => {
    Entries.find()
        .then(entries => res.json(entries))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;