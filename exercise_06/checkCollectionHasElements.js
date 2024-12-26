/**
 * #6 :: Export JS function "checkCollectionHasElements" to get length of a collection and check whether it is empty or not
 * input: array (collection)
 * output: boolean
 * validate input: throw TypeError with message "expected array but received <type-of-argument>" if input is not an array
 */
/**
 * Checks if an array has any elements
 * @param {Array} collection - The array to check
 * @returns {boolean} True if the array has at least one element, false otherwise
 * @throws {TypeError} If input is not an array, throws with message "expected array but received <type-of-argument>"
 */
const checkCollectionHasElements = (collection) => {
  if (!Array.isArray(collection)) {
    throw new TypeError(`expected array but received ${typeof collection}`);
  }
  return collection.length > 0;
};

export default checkCollectionHasElements;
