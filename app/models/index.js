const User = require('./user');
const Promo = require('./promo');
const Order = require('./order');

User.hasMany(Order, {
    foreignKey: "user_id",
    as: "orders"

});
Order.belongsTo(User, {
    foreignKey: "user_id",
    as: "user"
});

Promo.hasMany(Order, {
    foreignKey: "promo_id",
    as: "orders"

});
Order.belongsTo(Promo, {
    foreignKey: "promo_id",
    as: "promo"
});

module.exports = { User, Order, Promo };