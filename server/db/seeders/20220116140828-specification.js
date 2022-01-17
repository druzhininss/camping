module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Specifications', [
      // Палатки
      {
        specName: 'Область применения', // Повторяющаяся
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specName: 'Количество мест',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specName: 'Вес', // Повторяющаяся
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specName: 'Размер', // Повторяющаяся
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specName: 'Размер в чехле', // Повторяющаяся
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specName: 'Материал тента',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specName: 'Материал дна',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specName: 'Внутренняя палатка',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specName: 'Материал дуг',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specName: 'Количество входов',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specName: 'Цвет', // Повторяющаяся
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specName: 'Ветроустойчивость',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Спальники
      {
        specName: 'Т предела комфорта',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specName: 'Т комфорта',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specName: 'T экстрима',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specName: 'Сезонность',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specName: 'Внешняя ткань верх',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specName: 'Внешняя ткань низ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specName: 'Внутренняя ткань',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specName: 'Утеплитель',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Коврики
      {
        specName: 'Наполнитель коврика',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specName: 'Материал верха',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specName: 'Материал низа',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specName: 'R-value',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Повторяющиеся или общие
      {
        specName: 'Описание',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specName: 'Бренд',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        specName: 'Цена',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Specifications', null, {});
  },
};
