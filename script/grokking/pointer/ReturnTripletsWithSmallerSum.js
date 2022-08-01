export default function main() {
  let arr = [-1, 0, 2, 3],
    target = 3;
  arr.sort((a, b) => a - b);
  let countParis = [];
  for (let index = 0; index < arr.length; index++) {
    countParis.push(...searchPair(arr, index, target - arr[index]));
  }
  console.log(countParis);
}
//O(N∗logN+N Sqr)
function searchPair(arr, firstIndex, targetSum) {
  let left = firstIndex + 1;
  let right = arr.length - 1;
  let paris = [];
  while (left < right) {
    if (arr[left] + arr[right] < targetSum) {
      for (let index = right; index > left; index--) {
        paris.push([arr[firstIndex], arr[left], arr[index]]);
      }
      left++;
    } else {
      right--;
    }
  }
  return paris;
}
