import Product from "./Product";
import Offer from "./Offer";

class Order {
  constructor() {
    this.products = [];
    this.offer = Offer();
  }

  addProduct(productName) {
    const product = new Product(productName);
    this.products.push(product);
    return this;
  }

  total() {
    const originalPrice = this.products.reduce(
      (sum, product) => sum + product.price,
      0
    );
    const discount = this.offer.calculateDiscountedAmount(this.products);
    return originalPrice - discount;
  }
}

export default Order;
