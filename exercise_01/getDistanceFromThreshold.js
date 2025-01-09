/**
 * #1 :: Export JS function "getDistanceFromThreshold" to find how much a number exceeds or is left to reach one value
 * input: number (value)
 * input: number (threshold)
 * output: number
 * validate input: throw TypeError with message "expected number but received <type-of-argument>" if inputs are not numbers
 */
/**
 * Finds how much a number exceeds or is left to reach a threshold value
 * @param {number} value - The number to compare
 * @param {number} threshold - The threshold to compare against
 * @returns {number} The distance from the threshold (positive if exceeds, negative if below)
 * @throws {TypeError} If any input is not a number
 */
const getDistanceFromThreshold = (number, threshold) => {
  if (typeof number !== 'number' || typeof threshold !== 'number') {
    throw new TypeError('Both arguments must be numbers');
  }
  return Math.abs(number - threshold);
};

export default getDistanceFromThreshold;
