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
  let category = req.query.category;
  let id = req.params.id;
  
  userQuestion.findById(id, {'_id':0})
    .then(user => {
      let position = user.head[category];
      console.log(user.head[category]);
      let question = user[category][position];
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
  let answer = body.answer;
  let loopScore;
  let newPosition, temp;
  userQuestion.findById(id)
    .then(result => {
      let currentPosition = result.head[category];
      let printPosition = currentPosition;
      let string = '';
      while(printPosition !== Number.MAX_SAFE_INTEGER){
        result[category][printPosition].next === Number.MAX_SAFE_INTEGER ? string += String.fromCharCode(97+printPosition) : string += String.fromCharCode(97+printPosition) + ' -> ';
        printPosition = result[category][printPosition].next;
      }
      console.log(string);
      if(answer){
        result[category][currentPosition].score *= 2;
      }
      else{
        result[category][currentPosition].score = 1;
      }
      loopScore = result[category][currentPosition].score;
      newPosition = currentPosition;
      for(let i = 0; i < loopScore; i++){
        if(result[category][newPosition].next !== Number.MAX_SAFE_INTEGER){
          newPosition = result[category][newPosition].next;
        }
        else{
          break;
        }
      }
      temp = result.head[category];
      //current head value
      result.head[category] = result[category][currentPosition].next;
      console.log(temp + ' Changing to: ' + result.head[category]);
      //head would equal current Questions next value
      result[category][currentPosition].next = result[category][newPosition].next;

      result[category][newPosition].next = temp;
      result.save()
        .then(
          res.send('200')
        )
        .catch(
          res.send('400')
        );
    })
    .catch(
      res.send('400')
    );
});

module.exports = router;