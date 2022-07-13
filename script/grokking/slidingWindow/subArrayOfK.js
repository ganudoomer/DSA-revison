export default function main() {
    console.log("hey");
    let arr = [2, 1, 5, 1, 3, 2]
    let  k=3   
    // Calculate the max from this sub array with K number of elements 
    let maxSum = 0


    // Naive solution 

    // for (let i = 0; i < arr.length-k; i++) {
    //      let windowSum = 0
    //      for(let j = i; j < i+k;j++){
    //         windowSum += arr[j]
    //      }
    //      maxSum = Math.max(maxSum,windowSum)
    // }

    // O(N) Time 
    // O(1) Space 
    let windowSum = 0 
    let windStart = 0
    for(let i = 0;i < arr.length;i++){
        windowSum += arr[i]
        if(i >= k-1){
         maxSum =  Math.max(windowSum,maxSum)
         windowSum = windowSum - arr[windStart]
         windStart++
        }

    }
    console.log(maxSum);

}