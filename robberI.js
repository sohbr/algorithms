// var rob = function(nums) {
// if (nums.length < 1) return 0
// if (nums.length === 1) return nums[0]
// if (nums.length === 2) return Math.max(nums[0], nums[1])
//
//   let first = nums[0] + rob(nums.slice(2))
//   let second = nums[1] + rob(nums.slice(3))
//
//   return Math.max(first, second)
// }

function rob(nums) {
  if (nums.length < 1) return 0
  if (nums.length === 1) return nums[0]
  if (nums.length === 2) return Math.max(nums[0], nums[1])

  let a = nums[nums.length - 2],
    b = nums[nums.length - 1],
    c = 0

  for (let i = nums.length - 3; i >= 0; i--) {
    let temp = Math.max(nums[i] + b, nums[i] + c)
    c = b
    b = a
    a = temp
  }

  return Math.max(a, b)
}

console.log(rob([12, 1, 13]))
