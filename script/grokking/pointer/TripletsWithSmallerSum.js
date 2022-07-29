export default function main() {
  console.log("Hey");
  let arr = [-1, 0, 2, 3],
    target = 3;
  let count = 0;
  arr.sort((a, b) => a - b);

  for (let index = 0; index < arr.length - 2; index++) {
    count += searchPair(arr, target - arr[index], index);
  }
  console.log(count);
}

function searchPair(arr, targetSum, firstIndex) {
  let left = firstIndex + 1;
  let right = arr.length - 1;
  let count = 0;

  while (left < right) {
    if (arr[left] + arr[right] < targetSum) {
      // if arr[left] <= arr[right]
      // then all the elements between right and left
      // are valid
      count = right - left;
      left++;
    } else {
      right--;
    }
  }

  return count;
}
