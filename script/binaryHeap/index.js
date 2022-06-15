export default function main() {
  console.log("Binary Heap");
  let maxHeap = new BinaryMaxHeap();

  maxHeap.insert(41);
  maxHeap.insert(39);
  maxHeap.insert(33);
  maxHeap.insert(18);
  maxHeap.insert(27);
  maxHeap.insert(12);
  maxHeap.insert(55);

  console.log(maxHeap);
  console.log(maxHeap.pop());
  console.log(maxHeap.pop());
  console.log(maxHeap.pop());
  console.log(maxHeap.pop());
  console.log(maxHeap.pop());
  console.log(maxHeap.pop());
  console.log(maxHeap.pop());
}

class BinaryMaxHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];

    while (index > 0) {
      // Formula for getting the parent index = floor(index-1/2)
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element <= parent) break;
      // If element is lesser than parent
      // Swap the values
      this.values[parentIndex] = element;
      this.values[index] = parent;
      // Put the parent as new index
      index = parentIndex;
    }
  }

  pop() {
    // Array of one will always be the max 
    let max = this.values[0];
    let popped = this.values.pop();
    this.values[0] = popped;
    this.sinkDown();
    return max;
  }

  sinkDown() {
    let index = 0;
    const element = this.values[index];
    let length = this.values.length;
    // Sink down the value 
    while (true) {
       //  Formula for finding the Left child nodes = 2 X Index + 1 
       //  Formula for finding the Right child nodes = 2 X Index + 1 

      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;
      
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        // Check if left child is greater than element 
        // Add it to swap
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        // Check if right child is greater than element OR if right child greater than left child 
        // Add it to swap
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      // Swap the values
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      // Put SwapIndex as the new index
      // Repeat the process until there is nothing to swap
      index = swap
    }
  }
}
