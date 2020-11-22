import Product from "../Product";
describe("Product", () => {
  it("should return product when name is passed", () => {
    const product = new Product("Apple");
    expect(product).toHaveProperty("price", 35);
    expect(product).toEqual({
      name: "Apple",
      price: 35,
    });
  });
  it("should throw error on unknown product name", () => {
    expect(() => new Product("Orange")).toThrow();
  });
});
