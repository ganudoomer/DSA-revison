// Understood the problem
// Did not understand the solution
export default function main() {
  //   console.log("hey");
  let array = [2, 2, -1, 2];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    let isForward = element >= 0;
    let slow = index;
    let fast = index;

    while (true) {
      slow = find_next_index(array, isForward, slow);
      fast = find_next_index(array, isForward, fast);

      if (fast !== -1) {
        fast = find_next_index(array, isForward, fast);
      }

      if (slow === -1 || fast === -1 || slow === fast) {
        break;
      }

      if (slow !== -1 && slow === fast) {
        return true;
      }
    }
  }
  return false;
}

function find_next_index(arr, isForward, currentIndex) {
  let direction = arr[currentIndex] >= 0;
  if (isForward !== direction) {
    return -1;
  }
  let nextIndex = (currentIndex + arr[currentIndex]) % arr.length;
  if (nextIndex < 0) {
    nextIndex += arr.length;
  }
  if (currentIndex === nextIndex) {
    nextIndex = -1;
  }
  return nextIndex;
}
