/**
 * #8 :: Export JS function "formatStringByWordsLength" to check number of words contained in given string
 * - if total number of words is greater than 5, then return uppercase string
 * - otherwise, return lowercase string
 * input: string (sentence)
 * output: string
 * validate input: throw TypeError with message "expected string but received <type-of-argument>" if input is not a string
 */
/**
 * Formats a string based on its word count (uppercase if > 5 words, lowercase otherwise)
 * @param {string} sentence - The input string to format
 * @returns {string} Formatted string in uppercase if > 5 words, lowercase otherwise
 * @throws {TypeError} If input is not a string, throws with message "expected string but received <type-of-argument>"
 */
function formatStringByWordsLength(sentence) {
  if (typeof sentence !== 'string') {
    throw new TypeError(`expected string but received ${typeof sentence}`);
  }

  const wordCount = sentence.trim() === '' ? 0 : sentence.trim().split(/\s+/).length;
  return wordCount > 5 ? sentence.toUpperCase() : sentence.toLowerCase();
}

module.exports = formatStringByWordsLength;
