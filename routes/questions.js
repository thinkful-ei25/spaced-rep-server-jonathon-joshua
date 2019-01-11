'use strict';
const express = require('express');
const router = express.Router();
const userQuestion = require('../schema/user'); 

router.get('/head/:id', (req, res) => {
  let id = req.params.id;
  console.log(id);
  
  userQuestion.findById(id, {'_id':0})
    .select('head')
    .then(questions => {
      res.json({
        questions
      });
    })
    .catch(err => {
      res.status(500).json({ message: 'Internal server error' });
    });
});

router.get('/:id', (req, res) => {
  let value = req.query.category;
  let id = req.params.id;
  
  userQuestion.findById(id, {'_id':0})
    .then(user => {
      let position = user.head[value];
      let question = user[value][position];
      res.json({
        question
      });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    });
});

router.put('/:id', (req, res) => {
  let id = req.params.id;
  let body = req.body;
  let category = req.query.category;
  let bodyId = body.id;
  let answer = body.answer;
  let position, temp;
  userQuestion.findById(id)
    .then(result => {
      if(answer){
        result[category].find(val => val.id === bodyId).score *= 2;
      }
      else{
        result[category].find(val => val.id === bodyId).score = 1;
      }
      if(result[category].find(val => val.id === bodyId).score >= result[category].length - 1){
        position = result[category].length - 1;
      }
      else{
        position = result[category].find(val => val.id === bodyId).score;
      }
      temp = result[category].find(val => val.id === bodyId).next;
      result[category].find(val => val.id === bodyId).next = result[category][position].next;
      result[category][position].next = temp;
      result.head[category] = temp;
      console.log(result);
      result.save();
      res.send('200');
    })
    .catch(res.send('400'));
});

module.exports = router;