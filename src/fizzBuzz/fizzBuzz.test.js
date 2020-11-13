const { fizzBuzz } = require("./fizzBuzz");

describe("FizzBuzz ", () => {
  it("should return 1 for 1", () => {
    expect(fizzBuzz(1)).toBe(1);
  });
  it("should return 2 for 2", () => {
    expect(fizzBuzz(2)).toBe(2);
  });
  it("should return 'Fizz' for 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });
  it("should return 'Fizz' for multiples of 3", () => {
    expect(fizzBuzz(6)).toBe("Fizz");
  });
  it("should return 'Buzz' for 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });
  it("should return 'Buzz' for multiples of 5", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
  });
  it("should return 'FizzBuzz' for multiples of 3 & 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
});
