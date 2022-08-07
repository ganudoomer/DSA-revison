// Did not understand anything
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
export default function main() {
  console.log("hey");
  let head = new Node(2);
  head.next = new Node(4);
  head.next.next = new Node(6);
  head.next.next.next = new Node(8);
  head.next.next.next.next = new Node(10);
  head.next.next.next.next.next = new Node(12);

  let middle = find_the_middle(head);
  let headSecondHalf = reverse(middle);
  let headFirstHalf = head;

  while (headFirstHalf != null && headSecondHalf != null) {
    let temp = headFirstHalf.next;
    headFirstHalf.next = headSecondHalf;
    headFirstHalf = temp;

    temp = headSecondHalf.next;
    headSecondHalf.next = headFirstHalf;
    headSecondHalf = temp;
  }

  if (headFirstHalf != null) {
    headFirstHalf.next = null;
  }

  console.log(head);
}

function reverse(head) {
  let prev = null;
  while (head != null) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}

function find_the_middle(head) {
  let fast = head;
  let slow = head;

  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow == fast) {
      break;
    }
  }
  return slow;
}
