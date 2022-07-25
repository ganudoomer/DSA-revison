export default function main() {
  let arr = [-2, -1, 0, 2, 3];
  let n = arr.length;
  let squares = Array(n).fill(0);
  let highestSquareIndex = n - 1;
  let right = n - 1;
  let left = 0;

  while (left <= right) {
    let rightSum = arr[right] * arr[right];
    let leftSum = arr[left] * arr[left];
    if (leftSum > rightSum) {
      squares[highestSquareIndex] = leftSum;
      left++;
    } else {
      squares[highestSquareIndex] = rightSum;
      right--;
    }
    highestSquareIndex--;
  }
  console.log(squares);
}
