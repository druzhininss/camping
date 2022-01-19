module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      // Палатки
      {
        productName: 'Палатка1 Кемпинговая',
        category_id: 4,
        imagePath: '/tents/camping/Indiana_4.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: 'Палатка2 Трекинговая',
        category_id: 5,
        imagePath: '/tents/tracking/Scout_2.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: 'Палатка3 Экстремальная',
        category_id: 6,
        imagePath: '/tents/extreme/Mirage_4.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: 'Палатка4 Тентовая',
        category_id: 7,
        imagePath: '/tents/awning/Tarp_3x3.2.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Спальники
      {
        productName: 'Спальник1 Кемпинговый',
        category_id: 8,
        imagePath: '/sleeping-bags/camping/Siberia_Wild_Plus.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: 'Спальник2 Трекинговый',
        category_id: 9,
        imagePath: '/sleeping-bags/tracking/Mountain_Compact.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: 'Спальник3 Экстремальный',
        category_id: 10,
        imagePath: '/sleeping-bags/extreme/Tibet_Compact.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Коврики
      {
        productName: 'Коврик1 Кемпинговый',
        category_id: 11,
        imagePath: '/rugs/camping/Alpine_Plus_80.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: 'Коврик2 Трекинговый',
        category_id: 12,
        imagePath: '/rugs/tracking/Travel.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
