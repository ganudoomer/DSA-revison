export default function main(params) {
  let string = "catfoxcat",
    words = ["cat", "fox"];

  let hashMap = {};

  words.map((word) => {
    hashMap[word] = (hashMap[word] || 0) + 1;
  });

  const resIndexes = [],
    wordCount = words.length,
    wordLength = words[0].length;

  for (let i = 0; i < string.length - wordCount * wordLength + 1; i++) {
    const wordSeen = {};

    for (let j = 0; j < wordCount; j++) {
      let nextWordIndex = i + j * wordLength;
    }
  }
}
