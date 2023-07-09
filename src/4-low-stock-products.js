const stockProducts = require('./data.json');

const getLowStockProducts = () => {
  let produtLittle = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].quantityInStock === 0 || stockProducts[index].quantityInStock <= 10) {
      produtLittle.push(stockProducts[index].productName);
    }
  }
  console.log(produtLittle.length);
  return produtLittle;
};
console.log(getLowStockProducts());

module.exports = { getLowStockProducts };
