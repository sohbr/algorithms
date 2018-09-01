// const toTwo = []
// for (let i = 31; i >= 0; i--) {
//   toTwo.push(Math.pow(2, i))
// }

// var reverseBits = function(n) {
//   let num = n
//   let string = ''
//
//   for (let i = 0; i < toTwo.length; i++) {
//     if (num >= toTwo[i]) {
//       string += '1'
//       num -= toTwo[i]
//     } else {
//       string += '0'
//     }
//   }
//
//
//   let value = 0
//
//   for (let j = 0; j < string.length; j++) {
//     let k = 31 - j
//     if (string[j] === '1') {
//       value += toTwo[k]
//     }
//   }
//
//   return value
// }

function reverseBits(n) {
  let buf = []
  let num = 0

  for (let i = 0; i < 32; i++) {
    buf.push(n & 1)
    console.log(buf)
    n = n >> 1
  }

  for (let i = 0; i < buf.length; i++) {
    num = num * 2 + buf[i]
  }

  return num
}

console.log(reverseBits(43261596))
