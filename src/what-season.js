const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let month = date.getMonth();

  if (!arguments.length) {
    return 'Unable to determine the time of year!';
  } else if (!date.getTime) {
    throw new Error('Invalid date!');
  } else if (typeof date.getMonth() !== 'number') {
    throw new Error('Invalid date!');
  } else if (month === 0 || month === 1 || month === 11) {
    return 'winter';
  } else if (month >= 2 && month <= 4) {
    return 'spring';
  } else if (month >= 5 && month <= 7) {
    return 'summer';
  } else {
    return 'autumn';
  }
}

module.exports = {
  getSeason
};
