const stockProducts = require('./data.json');

const getUniqueProductsName = () => {
  let stockProductsName = [];

  for (let index = 0; index < stockProducts.length; index += 1) {
    stockProductsName.push(stockProducts[index].productName);
  }
  return stockProductsName;
};
console.log(getUniqueProductsName());

module.exports = { getUniqueProductsName };
