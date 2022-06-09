export default function main() {
  console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15));
  console.log("hey");
}

function binarySearch(arr, k) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor(right / 2);

  while (left < right) {
    if (arr[middle] === k) return middle;
    if (arr[middle] > k) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
    middle = Math.floor((left + right) / 2);
  }
}
