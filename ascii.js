function ascii(str1, str2) {
  let count = {}
  let extra = ''
  let score = 0

  str1.split('').forEach(letter => {
    if (!count[letter]) count[letter] = 0
    count[letter]++
  })

  str2.split('').forEach(letter => {
    if (!count[letter]) {
      extra += letter
    } else {
      count[letter]--
    }
  })

  Object.keys(count).forEach(letter => {
    if (count[letter] > 0) {
      score += letter.charCodeAt(0) * count[letter]
    }
  })

  extra.split('').forEach(letter => {
    score += letter.charCodeAt(0)
  })

  return score
}

console.log(ascii('cat', 'bat'))
