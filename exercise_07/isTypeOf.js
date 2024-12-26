/**
 * #7 :: Export JS function "isTypeOf" to check if type of value matches type received as argument
 * input: any (value)
 * input: 'string' | 'number' | 'boolean' | 'array' (type)
 * output: boolean
 * validate input: throw TypeError with message "expected one of 'string', 'number', 'boolean', 'array' but received <type-of-argument>" if type is not valid
 */
/**
 * Checks if the type of a value matches the specified type
 * @param {*} value - The value to check the type of
 * @param {'string' | 'number' | 'boolean' | 'array'} type - The expected type
 * @returns {boolean} True if value matches the specified type, false otherwise
 * @throws {TypeError} If type is not valid, throws with message "expected one of 'string', 'number', 'boolean', 'array' but received <type-of-argument>"
 */
function isTypeOf(value, type) {
  const validTypes = ['string', 'number', 'boolean', 'array'];
  
  if (!validTypes.includes(type)) {
    throw new TypeError(
      `expected one of 'string', 'number', 'boolean', 'array' but received ${typeof type}`
    );
  }

  if (type === 'array') {
    return Array.isArray(value);
  }

  return typeof value === type;
}

module.exports = isTypeOf;
