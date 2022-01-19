const pathToPicture = '../../assets/picturesForProject';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      // Палатки
      {
        productName: 'Палатка1 Кемпинговая',
        category_id: 4,
        imagePath: `${pathToPicture}/tents/camping/Indiana 4.jpg`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: 'Палатка2 Трекинговая',
        category_id: 5,
        imagePath: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: 'Палатка3 Экстремальная',
        category_id: 6,
        imagePath: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: 'Палатка4 Тентовая',
        category_id: 7,
        imagePath: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Спальники
      {
        productName: 'Спальник1 Кемпинговый',
        category_id: 8,
        imagePath: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: 'Спальник2 Трекинговый',
        category_id: 9,
        imagePath: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: 'Спальник3 Экстремальный',
        category_id: 10,
        imagePath: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Коврики
      {
        productName: 'Коврик1 Кемпинговый',
        category_id: 11,
        imagePath: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: 'Коврик2 Трекинговый',
        category_id: 12,
        imagePath: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
