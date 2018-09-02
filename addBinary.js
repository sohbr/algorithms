// Given two binary strings, return their sum (also a binary string).
//
// The input strings are both non-empty and contains only characters 1 or 0.
//
// Example 1:
//
// Input: a = "11", b = "1"
// Output: "100"
// Example 2:
//
// Input: a = "1010", b = "1011"
// Output: "10101"

function addBinary(a, b) {
  let result = ''
  let carry = false
  a = zerofill(a, Math.max(a.length, b.length))
  b = zerofill(b, a.length)
  let i = a.length - 1

  while (i >= 0) {
    if (a[i] === '1' && b[i] === '1') {
      if (carry) {
        result = '1' + result
      } else {
        result = '0' + result
      }
      carry = true
    } else if (a[i] === '1' || b[i] === '1') {
      if (carry) {
        result = '0' + result
      } else {
        result = '1' + result
      }
    } else if (carry) {
      result = '1' + result
      carry = false
    } else {
      result = '0' + result
    }
    i--
  }

  return carry ? '1' + result : result
}

const zerofill = (str, len) => {
  while (str.length < len) {
    str = '0' + str
  }
  return str
}
