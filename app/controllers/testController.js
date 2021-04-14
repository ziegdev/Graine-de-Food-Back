const { Order } = require('../models');

const testController = {

    display: (req, res) => {

        const commande = Order.findAll().then((orders) => {return (console.log('youhouu'))})
    }

}

module.exports = testController;