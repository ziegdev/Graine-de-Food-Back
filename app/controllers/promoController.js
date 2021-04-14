const { Promo } = require('../models');

const promoController = {
    promos : (req,res) => {
        Promo.findAll(). then( promos => {
            console.log(promos);
})
}
}

module.exports = promoController;