module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('CategorySpecs', [
      // Палатки
      {
        category_id: 4,
        spec_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 5,
        spec_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 6,
        spec_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 7,
        spec_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Спальники
      {
        category_id: 8,
        spec_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 9,
        spec_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 10,
        spec_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Коврики
      {
        category_id: 11,
        spec_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 12,
        spec_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('CategorySpecs', null, {});
  },
};
