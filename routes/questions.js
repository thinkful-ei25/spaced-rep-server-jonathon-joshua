'use strict';
const express = require('express');
const router = express.Router();
const question = require('../schema/question');

router.post('/', (req, res, next) => {
  const {category, esperantoWord, esperantoAnswer, score} = req.body;
  let requiredFields = ['category', 'esperantoWord', 'esperantoAnswer', 'score'];
  let map = {}; 
  for(let fields in req.body){
    map[fields] = 1;
  }
  let errorMessage = undefined;

  for(let fields in requiredFields){
    let field = requiredFields[fields];
    if(map[field] !== 1){
      errorMessage === undefined ? errorMessage = field : errorMessage += ', '  + field;
    }
  }
  if(errorMessage !== undefined) {
    const err = new Error(`fields: '${errorMessage}' can not be empty`);
    err.status = 422;
    return next(err);
  }
  requiredFields = ['esperantoWord', 'esperantoAnswer'];
  const checkIfStringFields = requiredFields.find(field => field in req.body && typeof req.body[field] !== 'string');

  if (checkIfStringFields) {
    const err = new Error(`field: '${checkIfStringFields}' must be a string`);
    err.status = 422;
    return next(err);
  }

  const checkIfTrimmed = requiredFields.find(field => req.body[field].trim() !== req.body[field]);

  if (checkIfTrimmed) {
    const err = new Error(`field: '${checkIfTrimmed}' can not have leading or trailing white spaces`);
    err.status = 422;
    return next(err);
  }


  const newAnimal = {
    category: category.trim(),
    esperantoWord: esperantoWord.trim(),
    esperantoAnswer: esperantoAnswer.trim(),
    score
  };
  return question.create(newAnimal)
    .then(result => {
      return res.status(201).location(`/api/users/${result.id}`).json(result);
    })
    .catch(err => {
      if (err.code === 11000) {
        err = new Error('The word already exists');
        err.status = 400;
      }
      next(err);
    });
});

module.exports = router;