const express = require('express');
const router = express.Router();

const signupController = require('./controllers/signupController');
const promoController = require ('./controllers/promoController');
const orderController = require('./controllers/orderController');
router.post('/login', signupController.login);
//router.post('/signup', signupController.signup);

router.get('/promos', promoController.promos);
router.get('/orders', orderController.getOrders);
router.post('/order', orderController.createOrder);

module.exports = router;

