// Given an array containing n distinct numbers taken
// from 0, 1, 2, ..., n, find the one that is missing from the array.
//
// Example 1
//
// Input: [3,0,1]
// Output: 2
// Example 2
//
// Input: [9,6,4,2,3,5,7,0,1]
// Output: 8
//
// Note:
// Your algorithm should run in linear runtime complexity.
// Could you implement it using only constant extra space complexity?


var missingNumber = function(nums) {
    //find the sum of all numbers in array
    let sum = nums.reduce((acc, el) => acc + el)

    // find the total of all numbers from 0..n
    let total = 0
    for (let i = 1; i <= nums.length; i++) {
        total += i
    }

    //return the difference as the missing number
    return total - sum
}
