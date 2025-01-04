const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    }
    if (arr.length === 0) {
      return 1;
    }
    let result = 1;
    for (let i = 0; i < arr.length; i++) {
      const depth = this.calculateDepth(arr[i]);
      result = Math.max(result, depth + 1);
    }
    return result;
  }
}

module.exports = {
  DepthCalculator,
};
