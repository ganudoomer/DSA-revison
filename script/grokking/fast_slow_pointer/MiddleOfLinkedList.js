class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
export default function main() {
  let head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);

  let middle = find_the_middle(head);
  console.log(middle);
}

function find_the_middle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}
