const express = require('express');
const router = express.Router();

const signupController = require('./controllers/signupController');

// 
router.post('/login', signupController.login);
router.post('/signup', signupController.signup);

module.exports = router;

