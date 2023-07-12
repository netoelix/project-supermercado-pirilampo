const stockProducts = require('./data.json');

const searchProductByName = (nameProduct) => {
  let searchProduct = { description: '123', formattedPrice: '123' };
  let foundProduct = false;
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (nameProduct === stockProducts[index].productName) {
      searchProduct.description = stockProducts[index].description;
      searchProduct.formattedPrice = `R$ ${stockProducts[index].price}`;
      foundProduct = true;
      break;
    }
  }
  if (!foundProduct) {
    searchProduct = null;
  }
  return searchProduct;
};
console.log(searchProductByName());
module.exports = { searchProductByName };
