// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
//
// Note: For the purpose of this problem, we define empty string as valid palindrome.
//
// Example 1:
//
// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:
//
// Input: "race a car"
// Output: false
//
function isPalindrome(s) {
  var str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  var half = Math.floor(str.length / 2)
  var lastIndex = str.length - 1
  for (var i = 0; i < half; i++) {
    if (str[i] !== str[lastIndex - i]) {
      return false
    }
  }

  return true
}
