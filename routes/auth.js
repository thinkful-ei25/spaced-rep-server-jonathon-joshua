'use strict';
const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config');

const router = express.Router();


const options = {session: false, failWithError: true};

const localAuth = passport.authenticate('local', options);

function createAuthToken (user) {
  return jwt.sign({ user }, JWT_SECRET, {
    subject: user.username
  });
}

router.post('/login', localAuth, (req, res) => {
  const authToken = createAuthToken(req.user.toJSON());
  res.json({ authToken });
});

module.exports = router;