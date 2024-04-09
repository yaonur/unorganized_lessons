let array = [3, 5, -4, 8, 11, -1, -10];
let targetSum = 10;

// O(n^2) time | space O(1)
function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length; i++) {
    let firstNum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      let secondNum = array[j];
      if (firstNum + secondNum === targetSum) return [firstNum, secondNum];
    }
  }
  return [];
}

function twoNumberSumS2(array, targetSum) {
  let nums = {}
  for (const element of array) {
    if (targetSum - element in nums) {
      return [targetSum-element , element]
    } else {
      nums[element] = true
    }
    
  }
}

console.log(twoNumberSum(array, targetSum));
console.log(twoNumberSumS2(array, targetSum));
