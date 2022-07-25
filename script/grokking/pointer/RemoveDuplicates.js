export default function main() {
  let arr = [2, 3, 3, 3, 6, 9, 9];
  // have a pointer to compare to
  let nextUniqueValue = 1;
  let index = 1;

  while (index < arr.length) {
    //compare the last non duplicate value with the current index
    if (arr[nextUniqueValue - 1] != arr[index]) {
      // Put the value to the next index of the last unique value
      arr[nextUniqueValue] = arr[index];
      // Move the point the nextUniqueValue pointer to next
      nextUniqueValue++;
    }
    index++;
  }
  console.log(nextUniqueValue);
  console.log(arr);
}
