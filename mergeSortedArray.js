// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
//
// Note:
//
// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
// Example:
//
// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3
//
// Output: [1,2,2,3,5,6]

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

function merge(nums1, m, nums2, n) {
  //Have pointers at the largest number of each array and the last position in the first array(swap pointer)

  let a = m - 1
  let b = n - 1
  let c = nums1.length - 1

  //Compare the two largest value pointers
  //  1. If nums1[a] > nums2[b], swap values with the swap pointer
  //  2. If nums1[a] < nums2[b], set swap pointer equal to value at nums2[b]

  while (b >= 0) {
    if (nums1[a] > nums2[b]) {
      ;[nums1[a], nums1[c]] = [nums1[c], nums1[a]]
      a--
    } else {
      nums1[c] = nums2[b]
      b--
    }
    c--
  }
}
