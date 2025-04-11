// Middle Of Linked List

// Definition of linked list node:
class Node {
  constructor(data = 0, next = null) {
    this.data = data;
    this.next = next;
  }
}

function findMiddle(head) {
  // Initialize two pointers: 'slow' and 'fast'
  let slow = head;
  let fast = head;

  // Move 'slow' one step and 'fast' two steps at a time
  // When 'fast' reaches the end, 'slow' will be at the middle
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Return the node pointed by 'slow', which is the middle node
  return slow;
}

module.exports.findMiddle = findMiddle;
