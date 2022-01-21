const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Product, OrderProduct }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsToMany(Product, { through: OrderProduct, foreignKey: 'order_id', otherKey: 'product_id' });
    }
  }
  Order.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
