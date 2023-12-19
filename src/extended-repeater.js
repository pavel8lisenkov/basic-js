const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }
  if (options.addition === undefined) {
    options.addition = '';
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|';
  }
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }
  if (options.separator === undefined) {
    options.separator = '+';
  }
  let result = [];
  for (let i = 0; i < options.repeatTimes; i++) {
    let arr = [];
    for (let j = 0; j < options.additionRepeatTimes; j++) {
      arr.push(`${options.addition}`);
    }
    arr = arr.join(`${options.additionSeparator}`);
    result.push(`${str}${arr}`);
  }
  return String(result.join(`${options.separator}`));;
}

module.exports = {
  repeater
};
