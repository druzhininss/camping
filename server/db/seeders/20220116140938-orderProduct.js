module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('OrderProducts', [
      {
        product_id: 1,
        order_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 2,
        order_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 6,
        order_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 8,
        order_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('OrderProducts', null, {});
  },
};
