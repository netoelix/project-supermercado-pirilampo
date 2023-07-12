const stockProducts = require('./data.json');

const searchProductsByBrand = (nameBrand) => {
  let searchBrand = { description: '123', formattedPrice: '123' };
  let foundBrand = false;
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (nameBrand === stockProducts[index].brand) {
      searchBrand.description = stockProducts[index].description;
      searchBrand.formattedPrice = `R$${stockProducts[index].price}`;
      foundBrand = true;
    }
  }
  if (!foundBrand) {
    searchBrand = null;
  }
  return searchBrand;
};
console.log(searchProductsByBrand('Hortifruti'));
module.exports = { searchProductsByBrand };
