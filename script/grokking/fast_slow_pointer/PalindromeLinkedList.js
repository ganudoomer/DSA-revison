class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export default function main() {
  let head = new Node(2);
  head.next = new Node(4);
  head.next.next = new Node(6);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(2);
  // Find the middle
  let middle = find_middle_list(head);
  let secondHalf = reverse(head);
  console.log(secondHalf);
  console.log(middle);

  while (head != null && secondHalf != null) {
    if (head.value !== secondHalf.value) {
      console.log("Not a palindrome");
      break;
    }
    head = head.next;
    secondHalf = secondHalf.next;
    if (head == null || secondHalf == null) {
      console.log("It is a palindrome");
      break;
    }
  }
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

function find_middle_list(head) {
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
