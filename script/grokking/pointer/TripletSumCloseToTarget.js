// Did not understand this problem
export default function main() {
  let array = [-2, 0, 1, 2, 1, 1],
    target = 3;
  array.sort((a, b) => a - b);
  let smallest_difference = Infinity;
  for (let index = 0; index < array.length - 2; index++) {
    let left = index + 1;
    let right = array.length - 1;
    let targetDiff = target - array[index] - array[left] - array[right];
    if (targetDiff === 0) {
      console.log("Found");
    }
    if (Math.abs(targetDiff) < Math.abs(smallest_difference)) {
      smallest_difference = targetDiff;
    }
  }
  console.log(target - smallest_difference);
}
