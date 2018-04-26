var isNumber = function(s) {
  const valid = {
    '0': true,
    '1': true,
    '2': true,
    '3': true,
    '4': true,
    '5': true,
    '6': true,
    '7': true,
    '8': true,
    '9': true,
    e: true,
    '.': true
  }

  let specialCount = 0
  let numCount = 0

  let st = s.trim().split('')

  if (st.length === 0) return false

  for (let i = 0; i < st.length; i++) {
    if (valid[st[i]]) numCount++
    if (valid[st[i]] === undefined) {
      return false
    }
    if (i !== 0 && i !== st.length - 1) {
      if (st[i] === 'e' || st[i] === '.') {
        specialCount += 1
        if (specialCount > 1) return false
      }
    }
    if (i === 0 || i === st.length - 1) {
      if (st[i] === 'e') return false
    }
  }

  if (numCount === 0) return false
  return true
}

console.log(isNumber('0'))
console.log(isNumber(' 0.1 '))
console.log(isNumber('abc'))
console.log(isNumber('1 a'))
console.log(isNumber('2e10'))
