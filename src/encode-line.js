const { NotImplementedError } = require("../extensions/index.js");

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
  let result = "";
  if (str.length === 0) {
    return result;
  }
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (arr.length === 0 || str[i] === str[i - 1]) {
      arr.push(str[i]);
    } else {
      result += arr.length > 1 ? arr.length.toString() + arr[0] : arr[0];
      arr = [str[i]];
    }
  }
  result += arr.length > 1 ? arr.length.toString() + arr[0] : arr[0];
  return result;
}

module.exports = {
  encodeLine,
};
