export default function main() {
  let str = "aabdecdfdfdc",
    p = "abc";
  let windowStart = 0;
  let substrStart = 0;
  let minLength = str.length + 1;
  let charFrequency = {};
  let matched = 0;

  for (let i = 0; i < p.length; i++) {
    let element = p[i];
    charFrequency[element] = (charFrequency[element] || 0) + 1;
  }

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (rightChar in charFrequency) {
      charFrequency[rightChar] -= 1;
      if (charFrequency[rightChar] >= 0) {
        matched++;
      }
    }

    while (matched == p.length) {
      if (minLength > windowEnd - windowStart + 1) {
        minLength = windowEnd - windowStart + 1;
        substrStart = windowStart;
      }
      const leftChar = str[windowStart];
      windowStart += 1;
      if (leftChar in charFrequency) {
        if (charFrequency[leftChar] === 0) {
          matched -= 1;
        }
        charFrequency[leftChar] += 1;
      }
    }
  }
  if (minLength > str.length) {
    return "";
  }
  console.log(str.substring(substrStart, substrStart + minLength));
}
