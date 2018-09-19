// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.
//
// If the last word does not exist, return 0.
//
// Note: A word is defined as a character sequence consists of non-space characters only.
//
// Example:
//
// Input: "Hello World"
// Output: 5

function lengthOfLastWord(s) {
  let endPointer = s.length - 1

  while (s[endPointer] === ' ') {
    endPointer--
  }

  let arr = s.substring(0, endPointer + 1).split(' ')

  return arr[arr.length - 1].length
}
