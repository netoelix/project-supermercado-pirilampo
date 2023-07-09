const stockProducts = require('./data.json');

const getOutOfStockProducts = (array) => {
  let nameOutProduct = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].quantityInStock === 0) {
      nameOutProduct.push(array[index].productName);
    }
  }
  return nameOutProduct;
};
console.log(getOutOfStockProducts(stockProducts));

module.exports = { getOutOfStockProducts };
