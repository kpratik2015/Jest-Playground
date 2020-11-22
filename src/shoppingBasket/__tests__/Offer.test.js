import Offer from "../Offer";
import Product from "../Product";

describe("Offer", () => {
  let offer;
  beforeEach(() => {
    offer = Offer();
  });
  it("should discount one Melon price for given two Melons", () => {
    const discount = offer.calculateDiscountedAmount([
      new Product("Melon"),
      new Product("Melon"),
    ]);
    expect(discount).toBe(50);
  });
  it("should discount one Lime price for given three Limes", () => {
    const discount = offer.calculateDiscountedAmount([
      new Product("Lime"),
      new Product("Lime"),
      new Product("Lime"),
    ]);
    expect(discount).toBe(15);
  });
});
