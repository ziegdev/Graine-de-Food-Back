const express = require('express');
const router = express.Router();

const signupController = require('./controllers/signupController');
const promoController = require ('./controllers/promoController');

router.post('/login', signupController.login);
//router.post('/signup', signupController.signup);

router.get('/promos', promoController.promos);

module.exports = router;

