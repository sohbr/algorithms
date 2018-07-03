// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
//
// Example 1:
//
// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:
//
// Input: "cbbd"
// Output: "bb"

function longestPalindrome(s) {
  if (s.length === 1) return s;
  let longest = "";
  for (let i = 0; i < s.length; i++) {
    let current = checkPalindrome(s, i-1, i+1);
    if (current.length > longest.length) {
      longest = current;
    }

    current = checkPalindrome(s, i, i+1);
    if (current.length > longest.length) {
      longest = current;
    }
  }

  return longest;
}

function checkPalindrome(s, begin, end) {
  while (s[begin] !== undefined && s[end] !== undefined && s[begin] === s[end]) {
    begin -= 1;
    end += 1;
  }
  begin += 1;
  end -= 1;

  return s.slice(begin, end + 1);
}

console.log(longestPalindrome("bb"));
