// Given a collection of distinct integers, return all possible permutations.
//
// Example:
//
// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]


var permute = function(nums) {
    if(nums.length === 1) return [nums];
    let result = [];
    nums.forEach(num => permute(nums.filter(e => e!==num))
        .forEach(arr => result.push([...arr, num])));
    return result;
};
