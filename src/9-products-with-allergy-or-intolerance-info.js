const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = () => {
  let searchProduct = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].allergyOrIntolerance) {
      let productsAllergyOrIntolerance = {
        description: stockProducts[index].description,
        formattedPrice: `R$ ${stockProducts[index].price}`,
        allergyOrIntoleranceMessage: `Pode conter: ${stockProducts[index].allergyOrIntolerance.join(' ')}`,
      };
      searchProduct.push(productsAllergyOrIntolerance);
    }
  }
  return searchProduct;
};
console.log(getProductsWithAllergyOrIntoleranceInfo());
module.exports = { getProductsWithAllergyOrIntoleranceInfo };
