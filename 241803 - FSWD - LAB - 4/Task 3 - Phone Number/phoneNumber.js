// Lab 4 - Task 3: create a phone number from an array of 10 digits
// Aneeq Abdullah

/**
 * Function takes array of numbers and returns
 * @param {array of numbers} numbers
 * @returns string in following format: "(123) 456-7890"
 */
function createPhoneNumber(numbers) {
  // check that we got exactly 10 digits from 0 to 9
  if (numbers.length !== 10) {
    return "Error: array must contain exactly 10 numbers";
  }
  for (const n of numbers) {
    if (!Number.isInteger(n) || n < 0 || n > 9) {
      return "Error: every number must be between 0 and 9";
    }
  }

  const digits = numbers.join("");             // "1234567890"
  const first = digits.slice(0, 3);            // "123"
  const middle = digits.slice(3, 6);           // "456"
  const last = digits.slice(6);                // "7890"

  return `(${first}) ${middle}-${last}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));   // (123) 456-7890
console.log(createPhoneNumber([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));   // (987) 654-3210
console.log(createPhoneNumber([0, 5, 1, 2, 3, 4, 5, 6, 7, 8]));   // (051) 234-5678
console.log(createPhoneNumber([1, 2, 3, 4]));                     // error: too short
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 12]));  // error: 12 is not a digit
