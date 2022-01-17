const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Product, CategorySpec, Specification }) {
      this.hasMany(Product, { foreignKey: 'category_id' });
      this.belongsToMany(Specification, { through: CategorySpec, foreignKey: 'category_id', otherKey: 'spec_id' });
    }
  }
  Category.init({
    categoryName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};
