import { verifyPass } from "../verifier";

// describe block is usually describing the name of the feature or name of an entry point somewhere in the code which we would like to test
describe("verifyPass", () => {
  test("no rules, passes", () => {
    const result = verifyPass("any input", []);
    expect(result).toBeTruthy();
  });
  test("one failed rule, fails", () => {
    const result = verifyPass("any input", [(input) => false]);
    expect(result).toBeFalsy();
  });
  test("one passing rule, passes", () => {
    const result = verifyPass("any input", [(input) => true]);
    expect(result).toBeTruthy();
  });
});
