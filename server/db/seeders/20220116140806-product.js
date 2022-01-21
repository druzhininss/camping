const fs = require('fs').promises;

module.exports = {
  up: async (queryInterface) => {
    const cardData = (await fs.readFile('../server/db/dbData/products/slBagCamp.txt', 'utf-8')).split('\n');
    cardData.pop();
    const cards = [];

    cardData.forEach((text, i) => {
      const obj = {};
      if (i % 2 === 0) {
        obj.productName = text;
        obj.category_id = 8;
        obj.imagePath = cardData[i + 1];
        obj.createdAt = new Date();
        obj.updatedAt = new Date();

        cards.push(obj);
      }
    });
    await queryInterface.bulkInsert('Products', cards, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
