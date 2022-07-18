export default function main() {
   let  array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
   let windowStart = 0
   let maxLength = 0
   let maxRepeatingOnes = 0
   
   for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
       let rightWindowElement = array[windowEnd]
        if(rightWindowElement === 1){
            maxRepeatingOnes++
        }

        if(windowEnd - windowStart + 1 - maxRepeatingOnes > k){
            if(array[windowStart] == 1){
                maxRepeatingOnes-- 
            }
            windowStart++
        }
        maxLength = Math.max(maxLength,windowEnd-windowStart+1)

   }
   console.log(maxLength);
}