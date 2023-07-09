const stockProducts = require('./data.json');

const getUniqueProductsName = (array) => {
  let stockProductsName = [];

  for (let index = 0; index < array.length; index += 1) {
    stockProductsName.push(array[index]);
  }
  console.log(stockProductsName);
  return stockProductsName;
};
console.log(getUniqueProductsName(stockProducts));

module.exports = { getUniqueProductsName };
