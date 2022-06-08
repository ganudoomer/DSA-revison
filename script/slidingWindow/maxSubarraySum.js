export default function main() {
    maxSubarraySum([2,6,9,2,1,8,5,6,9],3)
}

// Sliding Window 
function maxSubarraySum(arr,k) {
    let addCount = 0
    let maxSum = 0 
    let sum = 0
    
    for (let i = 0; i < k; i++) {
        maxSum = arr[i];
    }
    sum = maxSum

    for (let i = k; i < arr.length; i++) {
       sum = sum  - arr[i-k] + arr[i]
       maxSum = Math.max(maxSum,sum)
    }
    console.log(maxSum);

}

