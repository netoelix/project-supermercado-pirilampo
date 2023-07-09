const stockProducts = require('./data.json');

const getProductsAmount = () => {
  let countProduct = 0;
  for (let index = 0; index < stockProducts.length; index += 1) {
    countProduct += stockProducts[index].quantityInStock;
  }
  return countProduct;
};
console.log(getProductsAmount());
module.exports = { getProductsAmount };
