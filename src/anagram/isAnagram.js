/**
 *
 * @param {string} stringA
 * @param {string} stringB
 * @returns {boolean}
 */
function isAnagram(stringA, stringB) {
  if (stringA.length !== stringB.length) return false;
  /**
   *
   * @param {string} str
   */
  const sanitizeString = (str) => {
    return str
      .toLowerCase()
      .replace(/[^a-z\d]/g, "")
      .split("")
      .sort()
      .join("");
  };
  return sanitizeString(stringA) === sanitizeString(stringB);
}

export default isAnagram;
