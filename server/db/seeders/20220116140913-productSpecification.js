const fs = require('fs').promises;

module.exports = {
  up: async (queryInterface) => {
    const cardData = (await fs.readFile('../server/db/dbData/prodSpec/prodSpecSpalnik.txt', 'utf-8')).split('\n');
    cardData.pop();
    const cards = [];

    for (let i = 0; i < cardData.length; i += 3) {
      const obj = {};
      obj.spec_id = cardData[i];
      obj.product_id = cardData[i + 1];
      obj.specValue = cardData[i + 2];
      obj.createdAt = new Date();
      obj.updatedAt = new Date();

      cards.push(obj);
    }

    await queryInterface.bulkInsert('ProductSpecifications', cards, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('ProductSpecifications', null, {});
  },
};
