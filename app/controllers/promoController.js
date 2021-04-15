const { Promo } = require('../models');

const promoController = {
    promos : (req,res) => {
        Promo.findAll(). then( promos => {
   
                if(!promos) {
                    throw new Error("Promos not found");
                }
    
                res.json({
                    success: true,
                    promos
                });
            }).catch(error => {
                res.status(500).json({
                    success: false,
                    error: error.message
                });
            });
        },

    createPromo : (req,res) => {
        const newPromo = req.body;
        console.log(newPromo);
        Promo.create(newPromo). then( promo => {
                res.json({
                    success: true,
                    promo
                });
            }).catch(error => {
                res.status(500).json({
                    success: false,
                    error: error.message
                });
            });
        }
};



module.exports = promoController;