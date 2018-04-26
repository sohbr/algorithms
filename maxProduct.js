function maxProduct(nums) {
  let max = nums[0]
  let high = max,
    low = max

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      let temp = high
      high = low
      low = temp
    }

    high = Math.max(nums[i], high * nums[i])
    low = Math.min(nums[i], low * nums[i])

    if (high > max) max = high
  }

  return max
}

console.log(maxProduct([2, 3, -2, 4]))
