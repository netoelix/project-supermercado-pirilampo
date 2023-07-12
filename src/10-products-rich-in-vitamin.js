const stockProducts = require('./data.json');

const getProductsRichInVitamin = () => {
  let productVitamin = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].nutritionalInfo.vitamins) {
      let productVitamins = {
        description: stockProducts[index].description,
        formattedPrice: `R$ ${stockProducts[index].price}`,
        vitaminsInformation: stockProducts[index].nutritionalInfo.vitamins,
      };
      productVitamin.push(productVitamins);
    }
  }
  return productVitamin;
};
console.log(getProductsRichInVitamin());
module.exports = { getProductsRichInVitamin };
