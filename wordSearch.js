var exist = function(board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0]) {
        if (surrounding(word, 1, board, i, j, {})) {
          return true
        }
      }
    }
  }
  return false
}

function surrounding(word, idx, board, x, y, visited) {
  if (idx === word.length) return true

  if (x < 0 || y < 0 || x === board.length || y === board[0].length)
    return false
  if (board[x][y] !== word[idx]) return false
  visited[[x, y]] = true

  if (visited[[x - 1, y]] === undefined) {
    console.log('move up')
    if (surrounding(word, idx + 1, board, x - 1, y, visited)) {
      return true
    } else {
      delete visited[[x - 1, y]]
    }
  }

  if (visited[[x + 1, y]] === undefined) {
    console.log('move down')

    if (surrounding(word, idx + 1, board, x + 1, y, visited)) {
      return true
    } else {
      delete visited[[x + 1, y]]
    }
  }

  if (visited[[x, y - 1]] === undefined) {
    console.log('move left')

    if (surrounding(word, idx + 1, board, x, y - 1, visited)) {
      return true
    } else {
      delete visited[[x, y - 1]]
    }
  }

  if (visited[[x, y + 1]] === undefined) {
    console.log('move right')
    if (surrounding(word, idx + 1, board, x, y + 1, visited)) {
      return true
    } else {
      delete visited[[x, y + 1]]
    }
  }
}

console.log(
  exist(
    [['A', 'B', 'C', 'E'], ['S', 'F', 'E', 'S'], ['A', 'D', 'E', 'E']],
    'ABCESEEEFS'
  )
)

// console.log(
//   exist(
//     [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']],
//     'ADEE'
//   )
// )

// console.log(
//   exist(
//     [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']],
//     'ABCB'
//   )
// )
