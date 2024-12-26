/**
 * #4 :: Export JS function "isGreaterThan" to check whether one number is greater than a given number
 * input: number (value)
 * input: number (threshold)
 * output: boolean
 * validate input: throw TypeError with message "expected number but received <type-of-argument>" if inputs are not numbers
 */
/**
 * Checks whether one number is greater than a given threshold
 * @param {number} value - The value to check
 * @param {number} threshold - The threshold to compare against
 * @returns {boolean} True if value is greater than threshold, false otherwise
 * @throws {TypeError} If any input is not a number, throws with message "expected number but received <type-of-argument>"
 */
const isGreaterThan = (value, threshold) => {
  if (typeof value !== 'number' || typeof threshold !== 'number') {
    throw new TypeError('Both arguments must be numbers');
  }

  // Handle NaN
  if (Number.isNaN(value) || Number.isNaN(threshold)) {
    throw new TypeError('expected number but received NaN');
  }

  return value > threshold;
};

export default isGreaterThan;
