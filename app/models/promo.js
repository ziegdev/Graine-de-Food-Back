const { DataTypes, Model} = require('sequelize');
const sequelize = require('../database');

class Promo extends Model {};

Promo.init({
    code: {
        type: DataTypes.VARCHAR,
        allowNull: false
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    endDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    pourcent: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    sequilize,
    tableName:"Promo",
});

module.exports = Promo;