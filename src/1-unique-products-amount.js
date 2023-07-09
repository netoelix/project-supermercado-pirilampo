const stockProducts = require('./data.json');

const getUniqueProductsAmount = (array) => array.length;
console.log(getUniqueProductsAmount(stockProducts));

module.exports = { getUniqueProductsAmount };
