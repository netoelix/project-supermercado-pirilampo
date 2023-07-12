const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = (nameProduct) => {
  let searchProduct = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (nameProduct === stockProducts[index].productName) {
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
