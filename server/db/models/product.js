const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Order, OrderProduct, Category, Specification, ProductSpecification,
    }) {
      this.belongsTo(Category, { foreignKey: 'category_id' });
      this.belongsToMany(Order, { through: OrderProduct, foreignKey: 'product_id', otherKey: 'order_id' });
      this.belongsToMany(Specification, { through: ProductSpecification, foreignKey: 'product_id', otherKey: 'spec_id' });
    }
  }
  Product.init({
    productName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Categories',
        key: 'id',
      },
    },
    imagePath: {
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
