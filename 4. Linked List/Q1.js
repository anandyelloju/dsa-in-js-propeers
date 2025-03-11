// Reverse Linked List

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function reverseLinkedList(head) {
  let itr = head;
  let dnode = new ListNode(-1); // Dummy node
  let temp = dnode;

  while (itr !== null) {
    let nextNode = itr.next; // Store next node
    itr.next = temp.next; // Reverse the link
    temp.next = itr; // Insert current node to the reversed list
    itr = nextNode; // Move to the next node in the original list
  }

  return dnode.next; // New head of the reversed list
}

function printList(head) {
  let result = [];
  let current = head;
  while (current !== null) {
    result.push(current.data);
    current = current.next;
  }
  result.push(-1); // Add -1 at the end to denote the end of the list
  console.log(result.join(" "));
}

function main() {
  let input = readLine().trim();
  if (input === "-1") {
    console.log("-1");
    return;
  }

  let values = input.split(" ").map(Number);
  // Remove the trailing -1 if present
  if (values[values.length - 1] === -1) {
    values.pop();
  }

  // Create the linked list
  let head = null;
  let tail = null;
  for (const value of values) {
    let newNode = new ListNode(value);
    if (head === null) {
      head = newNode;
      tail = head;
    } else {
      tail.next = newNode;
      tail = newNode;
    }
  }

  // Reverse the linked list
  let reversedHead = reverseLinkedList(head);

  // Print the reversed linked list
  printList(reversedHead);
}
