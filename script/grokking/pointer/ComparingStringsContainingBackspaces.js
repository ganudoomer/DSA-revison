// Did not understand
export default function main() {
  let str1 = "xy#z",
    str2 = "xzz#";
  let index1 = str1.length - 1;
  let index2 = str2.length - 1;

  while (index1 >= 0 || index2 >= 0) {
    let il = getNextValidCharIndex(str1, index1);
    let i2 = getNextValidCharIndex(str2, index2);

    if (il < 0 && i2 < 0) {
      return false;
    }

    if (il < 0 || i2 < 0) {
      console.log(false);
      return false;
    }

    if (str1[il] !== str2[i2]) {
      console.log(false);
      return false;
    }

    index1 = il - 1;
    index2 = i2 - 1;

    console.log(true);
    return;
  }
  console.log(false);
}

function getNextValidCharIndex(str, index) {
  let backSpaceCount = 0;
  while (index > 0) {
    if (str[index] === "#") {
      backSpaceCount += 1;
    } else if (backSpaceCount > 0) {
      backSpaceCount -= 1;
    } else {
      break;
    }
    index -= 1;
  }
  return index;
}
