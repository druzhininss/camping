const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CategorySpec extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CategorySpec.init({
    category_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Categories',
        key: 'id',
      },
    },
    spec_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Specifications',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'CategorySpec',
  });
  return CategorySpec;
};
