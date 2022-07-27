export default function main() {
  let arr = [-5, 2, -1, -2, 3];
  let triplets = [];
  // Sort the array for better search

  // O( N ∗ logN )
  arr.sort((a, b) => a - b);
  // X+Y+Z==0
  // Y + Z === −X
  // Loop through each value
  for (let index = 0; index < arr.length; index++) {
    // Check if index is zero
    // Check if arr[i] is equal to arr[i-1] (This is to check for duplicate values)
    // If so continue
    if (index > 0 && arr[index] == arr[index - 1]) {
      continue;
    }
    // Find Y in  Y + Z === -X
    // Make a search function that takes in array, target_sum, Left element, and triplets
    search(arr, -arr[index], index + 1, triplets);
  }
}

function search(array, target_sum, left, tripletsArray) {
  let right = array.length - 1;
  let index = 0;
  while (left < right) {
    if (index == 1000) break;
    index++;
    let sum = array[right] + array[left];
    if (sum === target_sum) {
      tripletsArray.push([array[right], array[left], -target_sum]);
      left++;
      right--;
      while (left < right && array[left] === array[left - 1]) {
        console.log("Here");
        left++;
      }

      while (left < right && array[right] === array[right + 1]) {
        console.log("Here");
        right--;
      }
    } else if (sum > target_sum) {
      right--;
    } else {
      left++;
    }
  }
  console.log(tripletsArray);
}

// Make a search function to find the target_sum
