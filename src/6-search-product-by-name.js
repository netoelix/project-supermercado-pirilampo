const stockProducts = require('./data.json');

const searchProductByName = (nameProduct) => {
  let searchProduct = { description: '123', formattedPrice: '123' };
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (nameProduct === stockProducts[index].productName) {
      searchProduct.description = stockProducts[index].description;
      searchProduct.formattedPrice = `R$${stockProducts[index].price}`;
    } else {
      searchProduct = null;
    }
    return searchProduct;
  }
};
console.log(searchProductByName('Arroz'));
module.exports = { searchProductByName };
