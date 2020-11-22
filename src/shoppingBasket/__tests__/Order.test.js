import Order from "../Order";

describe("Order", () => {
  let order;
  beforeEach(() => {
    order = new Order();
  });
  it("should calculate total price for given products", () => {
    order.addProduct("Apple").addProduct("Apple");
    expect(order.total()).toBe(70);
  });
});
