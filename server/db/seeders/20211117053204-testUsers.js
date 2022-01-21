module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'Admin',
        password: '$2b$10$82.jMSxOLiGcFohR/r/piOIYsgDgPAdk4F8zhm.dF2TUncsIydSkq',
        email: 'admin@admin.ru',
        phone: '89221112233',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Customer',
        password: '$2b$10$82.jMSxOLiGcFohR/r/piOIYsgDgPAdk4F8zhm.dF2TUncsIydSkq',
        email: 'customer@customer.ru',
        phone: '89223334455',
        role: 'customer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
