export default function main() {
  let array = [4, 1, 2, -1, 1, -3],
    target = 1;
  array.sort((a, b) => a - b);
  let res = [];
  for (let index = 0; index < array.length - 3; index++) {
    if (index > 0 && array[index] == array[index - 1]) {
      continue;
    }

    for (let j = index + 1; j < array.length - 2; j++) {
      if (j > index + 1 && array[j] == array[j - 1]) {
        continue;
      }
      res.push(...searchPair(array, target, index, j));
    }
  }
  console.log(res);
}

function searchPair(array, targetSum, firstIndex, secondIndex) {
  let left = secondIndex + 1;
  let right = array.length - 1;
  let pairs = [];
  while (left < right) {
    let sum =
      array[firstIndex] + array[secondIndex] + array[right] + array[left];
    if (sum == targetSum) {
      pairs.push([array[left], array[firstIndex], array[secondIndex]]);
      left++;
      right--;

      while (left < right && array[left] == array[left - 1]) {
        left++;
      }
      while (left < right && array[right] == array[right - 1]) {
        right--;
      }
    } else if (sum < targetSum) {
      left++;
    } else {
      right--;
    }
  }
  return pairs;
}
