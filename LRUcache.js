function listNode(val, key) {
  this.val = val
  this.next = null
  this.prev = null
  this.key = key
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity
  this.hash = {}
  this.count = 0
  this.head = null
  this.tail = new listNode(0)
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!this.hash[key]) return -1

  node = this.hash[key]
  if (node === this.tail && node !== this.head) {
    this.tail = node.prev
    node.prev = null
    this.tail.next = null
    node.next = this.head
    this.head.prev = node
    this.head = node
  } else if (node !== this.head && node !== this.tail) {
    node.next.prev = node.prev
    node.prev.next = node.next
    node.next = this.head
    this.head.prev = node
    node.prev = null
    this.head = node
  }
  return this.hash[key].val
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  //if key exists in hash, reset value
  if (this.hash[key]) {
    this.hash[key].val = value
    let node = this.hash[key]

    //if node isn't the head or tail, then remove from queue and replace as new head
    if (node !== this.head && node !== this.tail) {
      node.next.prev = node.prev
      node.prev.next = node.next
      node.next = this.head
      this.head.prev = node
      node.prev = null
      this.head = node
    } else if (node === this.tail && node !== this.head) {
      this.tail = this.tail.prev
      this.tail.next = null

      node.next = this.head
      this.head.prev = node
      node.prev = null
      this.head = node
    }
  } else {
    this.hash[key] = new listNode(value, key)
    let node = this.hash[key]

    if (this.count === 0) {
      this.head = this.hash[key]
      this.tail = this.head
    } else {
      node = this.hash[key]
      node.next = this.head
      this.head.prev = node
      this.head = node
    }

    this.count++

    if (this.count > this.capacity) {
      delete this.hash[this.tail.key]
      this.tail = this.tail.prev
      this.tail.next.prev = null
      this.tail.next = null
      this.count--
    }
  }
}

let cache = new LRUCache(2)

cache.put(2, 1)
cache.put(2, 2)
cache.get(2)
cache.put(1, 1)
cache.put(4, 1)
cache.get(2)
