'use strict';
const mongoose = require('mongoose');

// ===== Define UserSchema & UserModel =====
const schema = new mongoose.Schema({
  category: { type: String, required: true},
  esperantoWord: { type: String, required: true, unique: true},
  esperantoAnswer: { type: String, required: true},
  score: { type: Number, required: true},
});

// Transform output during `res.json(data)`, `console.log(data)` etc.
schema.set('toJSON', {
  virtuals: true,
  transform: (doc, result) => {
    delete result._id;
    delete result.__v;
  }
});

// Note: Use `function` (not an `arrow function`) to allow setting `this`
module.exports = mongoose.model('Question', schema);