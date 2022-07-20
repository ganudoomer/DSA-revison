export default function main() {
  let str = "abbcabc",
    p = "abc";
  // Get Frequency of the Pattern
  let windowStart = 0;
  let matched = 0;
  let charFrequencyCounter = {};
  let resultsArr = [];

  // Fill the frequency counter
  for (let i = 0; i < p.length; i++) {
    let char = p[i];
    charFrequencyCounter[char] = (charFrequencyCounter[char] || 0) + 1;
  }

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightElement = str[windowEnd];

    // Check the right element
    if (rightElement in charFrequencyCounter) {
      charFrequencyCounter[rightElement] -= 1;
      if (charFrequencyCounter[rightElement] === 0) {
        matched += 1;
      }
    }

    // Add to results array
    if (matched === Object.keys(charFrequencyCounter).length) {
      resultsArr.push(windowStart);
    }

    // Shrink the window
    if (windowEnd >= p.length - 1) {
      let leftChar = str[windowStart];
      windowStart++;
      // Add the frequency back
      if (leftChar in charFrequencyCounter) {
        if (charFrequencyCounter[leftChar] === 0) {
          // Decrease the matched count
          matched -= 1;
        }
        charFrequencyCounter[leftChar] += 1;
      }
    }
  }
  console.log(resultsArr);
}
