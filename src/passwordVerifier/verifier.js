const verifyPass = (input, rules) => {
  if (rules.length === 0) {
    return true;
  }
  return rules[0](input);
};
export { verifyPass };
