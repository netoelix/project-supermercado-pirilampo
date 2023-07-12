const stockProducts = require('./data.json');

const getProductsOnSale = (nameSale) => {
  let onSale = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (nameSale === stockProducts[index].productName) {
      let onSales = {
        description: stockProducts[index].description,
        formattedPrice: `R$ ${stockProducts[index].price}`,
        onSale: stockProducts[index].onSale,
      };
      onSale.push(onSales);
    }
  }
  return onSale;
};
console.log(getProductsOnSale());
module.exports = { getProductsOnSale };
