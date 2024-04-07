let array = [3, 5, -4, 8, 11, -1, -10];
let targetSum = 10;
function twoNumberSum(array, targetSum) {
  // Write your code here.
  array.sort((a, b) => a - b);
  left = 0;
  right = array.length - 1;
  while (left < right) {
    let sum = array[left] + array[right];
    if (sum === targetSum) return [array[left], array[right]];
    else if (sum < targetSum) left++;
    else right--;
  }
  return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;

console.log(twoNumberSum(array, targetSum));
