const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  return str.replace(/([a-z])\1*/g, (str) => str.length > 1 ? str.length + str[0] : str[0]
  );
}

module.exports = {
  encodeLine
};
