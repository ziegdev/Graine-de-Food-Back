const { DataTypes, Model} = require('sequelize');
const sequelize = require('../database');

class User extends Model {};

User.init({
    email: {
        type: DataTypes.VARCHAR,
        allowNull: false
    },
    password: {
        type: DataTypes.VARCHAR,
        allowNull: false
    },
    lastName: {
        type: DataTypes.VARCHAR,
        allowNull: false
    },
    firstName: {
        type: DataTypes.VARCHAR,
        allowNull: false
    },
    deliveryAddress: {
        type: DataTypes.VARCHAR,
        allowNull: false
    },
    invoiceAddress: {
        type: DataTypes.VARCHAR,
        allowNull: false
    },
    deliveryPostCode: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    invoicePostCode: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    deliveryCity: {
        type: DataTypes.VARCHAR,
        allowNull: false
    },
    invoiceCity: {
        type: DataTypes.VARCHAR,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    points: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    role: {
        type: DataTypes.VARCHAR,
        allowNull: false,
        defaultValue: "USER"
    },
    vegan: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
}, {
    sequilize,
    tableName:"User",
    timestamps:true
});

module.exports = User;