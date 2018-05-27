// Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.
//
// Example:
//
// Given array nums = [-1, 2, 1, -4], and target = 1.
//
// The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

function threeSumClosest(nums, target) {
  let min = Math.abs( nums[1] + nums[2] + nums[0] - target);
  let i, j, k;
  let num1, num2, num3;
  let result = nums[1] + nums[2] + nums[0];

  nums.sort(function(a ,b ){
    return a - b;
  });

  for (i = 0; i < nums.length; i++){
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    num1 = nums[i];
    j = i+1;
    k = nums.length-1;
    while (j < k){
      while (j > i + 1 && j < k && nums[j] === nums[j - 1]) j++;
      while (k < nums.length-1 && j < k && nums[k] === nums[k + 1]) k--;
      if (j === k) break;

      num2 = nums[j];
      num3 = nums[k];
      let temp = num1 + num2 + num3 - target;
      if( temp === 0) return target;
      if(temp > 0){
        k--;
      } else {
        j++;
      }
      if(Math.abs(temp) < min){
        min = Math.abs(temp);
        result = num1 + num2 + num3;
      }
    }
  }
  return result;
}

console.log(threeSumClosest([-1, 2, 1, -4], 1));
