const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Specification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Category, CategorySpec, Product, ProductSpecification}) {
      this.belongsToMany(Category, { through: CategorySpec, foreignKey: 'spec_id', otherKey: 'category_id' });
      this.belongsToMany(Product, { through: ProductSpecification, foreignKey: 'spec_id', otherKey: 'product_id' });
    }
  }
  Specification.init({
    specName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Specification',
  });
  return Specification;
};
