const stockProducts = require('./data.json');

const getUniqueProductsAmount = (array) => {
  console.log(array.length);
};
getUniqueProductsAmount(stockProducts);

module.exports = { getUniqueProductsAmount };
