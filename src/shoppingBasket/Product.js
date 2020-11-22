const PRODUCT_TO_PRICE = Object.freeze({
  Apple: 35,
  Banana: 20,
  Melon: 50,
  Lime: 15,
});

class Product {
  constructor(name) {
    if (!PRODUCT_TO_PRICE.hasOwnProperty(name))
      throw new Error("Invalid Product");
    this.name = name;
    this.price = PRODUCT_TO_PRICE[name];
  }
}

export default Product;
