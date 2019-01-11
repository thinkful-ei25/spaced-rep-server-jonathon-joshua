'use strict';

const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

// ===== Define UserSchema & UserModel =====
const schema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  animals: [{
    esperantoWord: { type: String, required: true},
    esperantoAnswer: { type: String, required: true},
    score: { type: Number, required: true},
    next: {type: Number, required: true},
    index: {type: Number, required: true}
  }],
  animalstwo: [{
    esperantoWord: { type: String, required: true},
    esperantoAnswer: { type: String, required: true},
    score: { type: Number, required: true},
    next: {type: Number, required: true},
    index: {type: Number, required: true}
  }],
  places: [{
    esperantoWord: { type: String, required: true},
    esperantoAnswer: { type: String, required: true},
    score: { type: Number, required: true},
    next: {type: Number, required: true},
    index: {type: Number, required: true}
  }],
  head: {
    animals: { type: Number, default: 0},
    places: {type: Number, default: 0},
  }
});

// Transform output during `res.json(data)`, `console.log(data)` etc.
schema.set('toJSON', {
  virtuals: true,
  transform: (doc, result) => {
    delete result.__v;
    delete result.password;
    delete result.id;
  }
});

// Note: Use `function` (not an `arrow function`) to allow setting `this`
schema.methods.validatePassword = function (pwd) {
  const currentUser = this;
  return bcrypt.compare(pwd, currentUser.password);
};

schema.statics.hashPassword = function (pwd) {
  return bcrypt.hash(pwd, 10);
};

module.exports = mongoose.model('User', schema);