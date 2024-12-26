/**
 * #3 :: Export JS function "generateRandomNumberInRange" to generate a rounded random number depending on a limit
 * input: number (limit)
 * output: number
 * validate input: throw TypeError with message "expected number but received <type-of-argument>" if input is not a number
 */
/**
 * Generates a rounded random number within the range [0, limit]
 * @param {number} limit - The upper limit of the random number range (inclusive)
 * @returns {number} A random integer between 0 and limit (inclusive)
 * @throws {TypeError} If input is not a number, throws with message "expected number but received <type-of-argument>"
 */
const generateRandomNumberInRange = (limit) => {
  if (typeof limit !== 'number') {
    throw new TypeError(`expected number but received ${typeof limit}`);
  }

  // Handle NaN
  if (Number.isNaN(limit)) {
    throw new TypeError('expected number but received NaN');
  }

  return Math.floor(Math.random() * limit) + 1;
};

export default generateRandomNumberInRange;
