const stockProducts = require('./data.json');

const searchProductByName = (nameProduct) => {
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (nameProduct === stockProducts[index].productName) {
      return `${stockProducts[index].description} R$${stockProducts[index].price}`;
    }
  }
};
console.log(searchProductByName('Arroz'));
module.exports = { searchProductByName };
