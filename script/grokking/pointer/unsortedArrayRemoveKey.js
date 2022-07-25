export default function main() {
  const input = [3, 2, 3, 6, 3, 10, 9, 3],
    key = 3;
  let nextElement = 0;
  let index = 0;
  while (index < input.length) {
    if (input[index] === key) {
      input[nextElement] = input[index];
      nextElement++;
    }
    index++;
  }
  console.log(nextElement);
  console.log(input);
}
