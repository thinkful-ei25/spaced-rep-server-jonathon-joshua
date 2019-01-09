'use strict';
const express = require('express');
const router = express.Router();
const userQuestion = require('../schema/user'); 


router.get('/:id', (req, res) => {
  let value = req.query.category;
  let id = req.params.id;
  console.log(value);
  
  userQuestion.findById(id, {'_id':0})
    .select(value)
    .then(questions => {
      res.json({
        questions
      });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    });
});

module.exports = router;