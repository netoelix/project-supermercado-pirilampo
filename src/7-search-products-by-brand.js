const stockProducts = require('./data.json');

const searchProductsByBrand = (nameBrand) => {
  let searchBrands = [];
  let foundBrand = false;
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (nameBrand === stockProducts[index].brand) {
      let searchBrand = {
        description: stockProducts[index].description,
        formattedPrice: `R$${stockProducts[index].price}`
      }
      searchBrands.push(searchBrand);
      foundBrand = true;
    }
  }
  if (!foundBrand) {
    searchBrands = null;
  }
  return searchBrands;
};
console.log(searchProductsByBrand('Hortifruti'));
module.exports = { searchProductsByBrand };
