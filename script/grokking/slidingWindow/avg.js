export default function main() {
    let  arr = [1, 3, 2, 6, -1, 4, 1, 8, 2]
    let  k = 5    
    let res = []
    let windowSum  = 0
    let windowStart = 0

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd]
        if(windowEnd >= k - 1){
         res.push(windowSum/k)
         windowSum -= arr[windowStart]
         windowStart++
        }           
    }
    console.log(res);
}

// Naive Approach 
// O(N*K)
// for (let i = 0; i <= arr.length-K; i++) {
//     let sum = 0
//     for (let k = i ; k < i+K; k++) {
//        sum+= arr[k]
//     }
//     res.push(sum/K)
// }
// console.log(res);