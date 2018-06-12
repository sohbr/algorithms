// Given n non-negative integers a1, a2, ..., an, where each represents
// a point at coordinate (i, ai). n vertical lines are drawn such that
// the two endpoints of line i is at (i, ai) and (i, 0).
// Find two lines, which together with x-axis forms a container,
// such that the container contains the most water.
//
// Note: You may not slant the container and n is at least 2.

function maxArea(height) {
      let max = 0;
      let i = 0;
      let j = height.length - 1;
      while (i < j) {
          let currentArea = Math.min(height[i], height[j]) * (j - i);
          if (currentArea > max) max = currentArea;
          if (height[i] < height[j]) {
              i++;
          } else {
              j--;
          }
      }
      return max;
}

console.log(maxArea([1,2]));
