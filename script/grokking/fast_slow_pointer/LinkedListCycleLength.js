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
  // Check here
  console.log(find_cycle_and_length(head));
  head.next.next.next.next.next.next = head.next.next;
  // Check here too
  console.log(find_cycle_and_length(head));
}

function find_cycle_and_length(head) {
  let fast = head;
  let low = head;

  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    low = low.next;
    if (low == fast) {
      return calculate_length_of_cycle(low);
    }
  }
  return 0;
}

function calculate_length_of_cycle(slow) {
  let current = slow;
  let currentLength = 0;
  while (true) {
    current = current.next;
    currentLength++;
    if (current == slow) {
      break;
    }
  }
  return currentLength;
}
