function findKth(nums, k) {
  nums.sort((a, b) => b - a)
  return nums[k - 1]
}

console.log(findKth([1, 4, 2, 6], 2))
