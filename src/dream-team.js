const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {

  if (!Array.isArray(arr)) {
    return false;
  }

  let names = arr.filter(function(elem) {
    if (elem === String(elem)) {
      return true;
    } else {
      return false;
    }
  });

  let letters = names.map(function(elem) {
    return elem.trim()[0].toUpperCase();
  }).sort();
  
  let title = letters.join('');

  return title;
}

module.exports = {
  createDreamTeam
};
