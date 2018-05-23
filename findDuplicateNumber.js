// Given an array nums containing n + 1 integers where each integer is
// between 1 and n (inclusive), prove that at least one duplicate
// number must exist. Assume that there is only one duplicate number,
// find the duplicate one.
//
// Example 1:
//
// Input: [1,3,4,2,2]
// Output: 2
// Example 2:
//
// Input: [3,1,3,4,2]
// Output: 3
// Note:
//
// You must not modify the array (assume the array is read only).
// You must use only constant, O(1) extra space.
// Your runtime complexity should be less than O(n^2).
// There is only one duplicate number in the array,
// but it could be repeated more than once.

//brute force
// function findDuplicate(nums) {
//   for (let i = 0; i < nums.length-1; i++) {
//     for (let j = i+1; j < nums.length; j++) {
//       if (nums[i] === nums[j]) return nums[i];
//     }
//   }
// }

//using hash counter
// function findDuplicate(nums) {
//   let count = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (count[nums[i]]) return nums[i];
//     count[nums[i]] = 1;
//   }
// }

//using pointers, similar to finding the cycle node of
//a singly-linked list
function findDuplicate(nums) {
  let slow = nums[0];
  let fast = nums[nums[0]];

  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }

  let third = 0;

  while (slow !== third) {
    slow = nums[slow];
    third = nums[third];
  }
  return slow;
}


console.log(findDuplicate([4,1,6,6,6,2,3]));
// console.log(findDuplicate([1,2,3,5,5,4]));
// console.log(findDuplicate([3,1,3,4,2]));
