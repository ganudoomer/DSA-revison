export default function main() {
    // Longest Substring with same letters with K Replacement 
    // Need to do this again 
    // Did not understand a single thing 
    let  str = "aabccbb", k=2
    let frequencyCount = {}
    let maxRepeating = 0
    let windowStart = 0
    let maxLength =  0

    for(let windowEnd = 0;windowEnd < str.length;windowEnd++){
        let rightEnd = str[windowEnd]
        frequencyCount[rightEnd] = (frequencyCount[rightEnd] || 0) + 1 
        maxRepeating = Math.max(maxRepeating,frequencyCount[rightEnd])
        
        if((windowEnd - windowStart + 1 - maxRepeating ) > k){
          let leftStart = str[windowStart]
          frequencyCount[leftStart] -= 1
          windowStart += 1 
        }
        maxLength = Math.max(maxLength,windowEnd  - windowStart + 1)
    }
    console.log(maxLength);
}