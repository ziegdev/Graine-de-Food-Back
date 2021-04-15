const express = require('express');
const router = express.Router();

const signupController = require('./controllers/signupController');
const promoController = require ('./controllers/promoController');

router.post('/login', signupController.login);
//router.post('/signup', signupController.signup);

router.get('/promos', promoController.promos);
router.post('/promo', promoController.createPromo);
router.get('/promo/:code', promoController.getPromoByCode);
router.put('/promo/:code', promoController.updatePromo);
router.delete('/promo/:code', promoController.deletePromo);

module.exports = router;

