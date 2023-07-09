const stockProducts = require('./data.json');

const getOutOfStockProducts = () => {
  let nameOutProduct = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].quantityInStock === 0) {
      nameOutProduct.push(stockProducts[index].productName);
    }
  }
  return nameOutProduct;
};
console.log(getOutOfStockProducts());

module.exports = { getOutOfStockProducts };
