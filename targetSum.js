var findTargetSumWays = function(nums, S) {
  return recursiveSum(nums, S, 0, 0)
}

function recursiveSum(nums, target, total, idx, count) {
  if (idx >= nums.length) {
    if (total === target) return 1
    return 0
  }

  let sumResult = recursiveSum(nums, target, total + nums[idx], idx + 1)
  let diffResult = recursiveSum(nums, target, total - nums[idx], idx + 1)

  return sumResult + diffResult
}

console.log(findTargetSumWays([1, 1, 1], 1))
