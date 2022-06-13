export default function main(params) {
  console.log("Hello world");
  const l = new LinkedList();
  l.push(10);
  l.push(11);
  l.push(12);
  console.log(l);
  console.log(l.shift());
  console.log(l);
  l.unshift(30);
  console.log(l);
  console.log(l.get(2));
  l.set(2, 90);
  console.log(l.get(2));
  l.insert(2,66)
  console.log(l);
  console.log(l.remove(1));
  console.log(l);
  console.log(l.reverse());
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    this.tail = current.next;
    this.length++;
  }

  pop() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      let temp = this.head;
      this.head = null;
      this.head = null;
      this.length--;
      return temp;
    }
    let currentNode = this.head;
    while (currentNode.next.next) {
      currentNode = currentNode.next;
    }
    let temp = currentNode.next;
    currentNode.next = null;
    this.tail = currentNode;
    this.length--;
    return temp;
  }

  shift() {
    let currentNode = this.head;
    console.log(currentNode);
    this.head = currentNode.next;
    if (!this.head) {
      this.tail = null;
      this.length--;
      return;
    }
    this.length--;
    return currentNode;
  }

  unshift(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  get(index) {
    let currentIndex = 0;
    let currentNode = this.head;

    while (currentNode) {
      if (currentIndex === index) {
        return currentNode;
      }
      currentNode = currentNode.next;
      currentIndex++;
    }
  }

  set(index, val) {
    let node = this.get(index);
    node.val = val;
  }

  insert(index,val){
   // Should handle a bunch of edge cases 
   let newNode = new Node(val)
   let prev = this.get(index)
   let current =  prev.next
   
   newNode.next = current
   prev.next = newNode
  }

  remove(index){
     let prevNode = this.get(index-1)
     let removed = prevNode.next
     prevNode.next = removed.next
     return removed
  }

  reverse(){
      return this.r(null,this.head)
  }
  
  r(right,left){
    if(!left) return right
    let tempNext = left.next
    left.next = right 
    return this.r(left,tempNext)
  }


}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
