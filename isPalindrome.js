function ListNode(val) {
  this.val = val
  this.next = null
}

var isPalindrome = function(head) {
  let str = ''
  let node = head
  while (node) {
    str += node.val
    node = node.next
  }

  node = head
  console.log(node)
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] != node.val) return false
    node = node.next
  }

  return true
}

let a = new ListNode(1)
console.log(isPalindrome(a))
