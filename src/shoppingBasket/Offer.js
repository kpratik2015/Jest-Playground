const DISCOUNT_ONE_FOR_EVERY = {
  Lime: 3,
  Melon: 2,
};

function Offer() {
  function countProducts(previous, product) {
    return {
      ...previous,
      [product.name]: {
        count: 1 + (previous[product.name] ? previous[product.name].count : 0),
        price: product.price,
      },
    };
  }
  function checkIfProductHasOffer(product) {
    return DISCOUNT_ONE_FOR_EVERY.hasOwnProperty(product);
  }
  function calculateDiscountedAmount(products) {
    let discount = 0;
    const productCountWithPrice = products.reduce(countProducts, {});
    for (let [product, productInfo] of Object.entries(productCountWithPrice)) {
      if (checkIfProductHasOffer(product)) {
        discount +=
          Math.floor(productInfo.count / DISCOUNT_ONE_FOR_EVERY[product]) *
          productInfo.price;
      }
    }
    return discount;
  }
  return {
    calculateDiscountedAmount,
  };
}

export default Offer;
