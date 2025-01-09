/**
 * #9 :: Export JS function "getDistanceMessageFromSumTo100" to generate a random number (in between 0-100) and sum it to given number
 * - if sum result exceeds 100, then return message "Sum with value <random> exceeds in <sum> from number 100"
 * - otherwise, return message "Sum with value <random> is left in <result> from number 100"
 * input: number (value)
 * output: string
 * validate input: throw TypeError with message "expected number but received <type-of-argument>" if input is not a number
 */

/**
 * Generates a random number (0-100), sums it with input, and returns a message about the distance to 100
 * @param {number} value - The number to add to the random value
 * @returns {string} Message indicating how far the sum is from 100
 * @throws {TypeError} If input is not a number, throws with message "expected number but received <type-of-argument>"
 */
function getDistanceMessageFromSumTo100(value) {
  if (typeof value !== 'number') {
    throw new TypeError(`expected number but received ${typeof value}`);
  }

  if (Number.isNaN(value)) {
    throw new TypeError('expected number but received NaN');
  }

  const random = Math.floor(Math.random() * 101); // 0 to 100 inclusive
  const sum = value + random;

  if (sum > 100) {
    return `Sum with value ${random} exceeds in ${sum - 100} from number 100`;
  } else {
    return `Sum with value ${random} is left in ${100 - sum} from number 100`;
  }
}

module.exports = getDistanceMessageFromSumTo100;
