function listNode(val) {
  this.val = val
  this.next = null
}

var detectCycle = function(head) {
  let slow = head,
    fast = head

  while (fast) {
    slow = slow.next
    fast = fast.next
    if (fast !== null) fast = fast.next
    if (fast === slow) {
      slow = head
      while (slow !== fast) {
        slow = slow.next
        fast = fast.next
      }
      return slow
    }
  }

  return null
}

let a = new listNode(1)
let b = new listNode(2)

a.next = b
b.next = a

console.log(detectCycle(a))

