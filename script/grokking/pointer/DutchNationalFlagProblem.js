export default function main() {
  let arr = [2, 2, 0, 1, 2, 0];
  let i = 0;
  let low = 0;
  let high = arr.length - 1;
  //  [0,2,0,1.2.2]
  //  [0,2,0,1,2,2]
  //  [0,2,0,1,2,2]
  //  [0,2,0,1,2,2]
  //  [0,2,0,1,2,2]
  //  [0,1,0,2,2,2]
  //  [0,1,0,2,2,2]
  //  [0,0,1,2,2,2]
  while (i <= high) {
    console.log(arr, i, low, high);
    if (arr[i] === 0) {
      swap(i, low);
      i++;
      low++;
    } else if (arr[i] === 2) {
      swap(i, high);
      high--;
    } else {
      i++;
    }
  }
  console.log(arr);
  function swap(i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
