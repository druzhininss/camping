module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      {
        categoryName: 'Палатки',
        parent_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryName: 'Спальники',
        parent_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryName: 'Коврики',
        parent_id: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Палатки
      {
        categoryName: 'Кемпинговые',
        parent_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryName: 'Трекинговые',
        parent_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryName: 'Экстремальные',
        parent_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryName: 'Тенты',
        parent_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Спальники
      {
        categoryName: 'Кемпинговые',
        parent_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryName: 'Трекинговые',
        parent_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryName: 'Экстремальные',
        parent_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Коврики
      {
        categoryName: 'Кемпинговые',
        parent_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryName: 'Трекинговые',
        parent_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
