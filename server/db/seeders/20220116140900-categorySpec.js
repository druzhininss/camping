module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('CategorySpecs', [
      // Палатки id 1
      {
        category_id: 1,
        spec_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 1,
        spec_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 1,
        spec_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 1,
        spec_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 1,
        spec_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 1,
        spec_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 1,
        spec_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 1,
        spec_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 1,
        spec_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 1,
        spec_id: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 1,
        spec_id: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 1,
        spec_id: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 1,
        spec_id: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 1,
        spec_id: 26,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 1,
        spec_id: 27,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Спальники id 2
      {
        category_id: 2,
        spec_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 2,
        spec_id: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 2,
        spec_id: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 2,
        spec_id: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 2,
        spec_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 2,
        spec_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 2,
        spec_id: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 2,
        spec_id: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 2,
        spec_id: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 2,
        spec_id: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 2,
        spec_id: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 2,
        spec_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 2,
        spec_id: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 2,
        spec_id: 26,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 2,
        spec_id: 27,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Коврик id 3
      {
        category_id: 3,
        spec_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 3,
        spec_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 3,
        spec_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 3,
        spec_id: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 3,
        spec_id: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 3,
        spec_id: 23,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 3,
        spec_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 3,
        spec_id: 24,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 3,
        spec_id: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 3,
        spec_id: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 3,
        spec_id: 26,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_id: 3,
        spec_id: 27,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('CategorySpecs', null, {});
  },
};
