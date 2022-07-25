export default function main() {
  let input = [2, 5, 9, 11],
    target = 11;
  let pointerLeft = 0;
  let pointerRight = input.length - 1;
  let resArr = [];
  while (true) {
    if (pointerLeft >= pointerRight) break;
    let sum = input[pointerLeft] + input[pointerRight];
    if (sum == target) {
      resArr.push(pointerLeft);
      resArr.push(pointerRight);
      break;
    }
    if (sum > target) {
      pointerRight--;
    } else {
      pointerLeft++;
    }
  }
  console.log(resArr);
}
