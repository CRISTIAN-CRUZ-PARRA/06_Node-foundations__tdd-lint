/**
 * #5 :: Export JS function "isAdditionGreaterThanFifty" to check a pair of numbers and return true if their sum is 50 or greater than 50
 * input: number (summand1)
 * input: number (summand2)
 * output: boolean
 * validate input: throw TypeError with message "expected number but received <type-of-argument>" if inputs are not numbers
 */
/**
 * Checks if the sum of two numbers is greater than or equal to 50
 * @param {number} summand1 - The first number to add
 * @param {number} summand2 - The second number to add
 * @returns {boolean} True if sum is greater than or equal to 50, false otherwise
 * @throws {TypeError} If any input is not a number, throws with message "expected number but received <type-of-argument>"
 */
const isAdditionGreaterThanFifty = (first, second) => {
  if (typeof first !== 'number' || typeof second !== 'number') {
    throw new TypeError('Both arguments must be numbers');
  }
  return first + second > 50;
};

export default isAdditionGreaterThanFifty;
