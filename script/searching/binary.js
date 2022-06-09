export default function main() {
  console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 28));
                            
}

function binarySearch(arr, k) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor(right / 2);

  while(left < right){
      if(arr[middle] === k) return middle
      arr[middle] > k ? right = middle : left = middle;
      middle = Math.floor((right+ left)/2)
  }
  
}
