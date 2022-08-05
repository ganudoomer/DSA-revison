class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export default function main() {
  const head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  head.next.next.next.next.next = new Node(6);
  head.next.next.next.next.next.next = head.next.next;
  let slow = has_cycle(head);
  let length = calculate_length(slow);
  console.log(length);
  let startPointer = find_start(head, length);
  console.log(startPointer);
}

function find_start(head, cycle_length) {
  let pointer1 = head;
  let pointer2 = head;

  while (cycle_length > 0) {
    pointer1 = pointer1.next;
    cycle_length--;
  }

  while (pointer1 !== pointer2) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }
  return pointer1;
}

function has_cycle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      return slow;
    }
  }
}

function calculate_length(slow) {
  let current = slow;
  let length = 0;
  while (true) {
    current = current.next;
    length++;
    if (slow === current) {
      return length;
    }
  }
}
