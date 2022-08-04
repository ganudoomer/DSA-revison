class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export default function main() {
  console.log("hey");

  let head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  head.next.next.next.next.next = new Node(6);
  console.log(has_cycle(head));
  // Check here
  head.next.next.next.next.next.next = head.next.next;
  console.log(has_cycle(head));
  // Check here
}

function has_cycle(head) {
  let fast = head;
  let slow = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow == fast) {
      return true;
    }
  }
  return false;
}
