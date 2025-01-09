/**
 * #10 :: Export JS function "transformCollectionToString" to transform collection into string
 * - if array has elements, then return array as string, joined by '|' (pipe character)
 * - otherwise, return an empty string
 * input: array (collection)
 * output: string
 * validate input: throw TypeError with message "expected array but received <type-of-argument>" if input is not an array
 */

/**
 * Transforms an array into a string by joining elements with '|'
 * @param {Array} collection - The array to transform
 * @returns {string} Elements joined by '|' if array has elements, empty string otherwise
 * @throws {TypeError} If input is not an array, throws with message "expected array but received <type-of-argument>"
 */
const transformCollectionToString = (collection) => {
  if (!Array.isArray(collection)) {
    throw new TypeError(`expected array but received ${typeof collection}`);
  }

  return collection.length > 0 ? collection.join('|') : '';
};

export default transformCollectionToString;
