// Given a linked list, remove the n-th node from the end of list and return its head.
//
// Example:
//
// Given linked list: 1->2->3->4->5, and n = 2.
//
// After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:
//
// Given n will always be valid.
//
// Follow up:
//
// Could you do this in one pass?

function ListNode(val) {
  this.val = val
  this.next = null
}

const a = new ListNode(1)
const b = new ListNode(2)
const c = new ListNode(3)
const d = new ListNode(4)
const e = new ListNode(5)

a.next = b
b.next = c
c.next = d
d.next = e

var removeNthFromEnd = function(head, n) {
  let currentNode = head

  while (currentNode) {
    let checkNode = currentNode
    let i = 0
    while (i < n + 1) {
      checkNode = checkNode.next
      i++
    }
    if (checkNode === null) break
    currentNode = currentNode.next
  }

  currentNode.next = currentNode.next.next

  return head
}

console.log(removeNthFromEnd(a, 1))
