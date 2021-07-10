/**
 * write a function `canSum(targetSum, numbers)` that takes in a
 * targetSum and an array of numbers as arguments.
 * the function should return a boolean indicating whether or not it
 * is possible to generate the targetSum using numbers from the array.
 *
 * you may use an element of the array as many times as needed.
 * you may assume that all input numbers are nonnegative
 *
 * eg canSum(7, [3, 4, 5, 6, 7]) ==> true
 *  3+4 = 7 and 7 itself
 * canSum(7, [5,6]) ==> false
 */

// low performance
const canSum = (targetSum, numbers) => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (const num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers) === true) {
      return true;
    }
  }
  return false;
};

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));
