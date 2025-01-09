/**
 * #2 :: Export JS function "getTotalWordsFromString" to get the total number of words contained in one string.
 * input: string (sentence)
 * output: number
 * validate input: throw TypeError with message "expected string but received <type-of-argument>" if input is not a string
 */
/**
 * Gets the total number of words contained in a string
 * @param {string} text - The input string to count words from
 * @returns {number} The total number of words in the string
 * @throws {TypeError} If input is not a string, throws with message "expected string but received <type-of-argument>"
 */
const getTotalWordsFromString = (text) => {
  if (typeof text !== 'string') {
    throw new TypeError(`expected string but received ${typeof text}`);
  }
  return text.trim() ? text.trim().split(/\s+/).length : 0;
};

export default getTotalWordsFromString;
