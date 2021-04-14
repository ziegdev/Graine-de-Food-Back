const { DataTypes, Model} = require('sequelize');
const sequelize = require('../database');

class Order extends Model {};

Order.init({
    startSubscribe: {
        type: DataTypes.VARCHAR,
        allowNull: false
    },
    endSubscribe: {
        type: DataTypes.DATE,
        allowNull: false
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    points: {
        type: DataTypes.INTEGER,
        allowNull: false
    }, 
}, {
        sequilize,
        tableName:"order",
        timestamps:true
    
});

module.exports = Order;