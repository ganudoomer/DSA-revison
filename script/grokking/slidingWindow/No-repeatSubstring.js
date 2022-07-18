// Given a string find the longest non-repeating Chars 
export default function main() {
    let str = "aaaabbbbbccdeeee"
    let charMap = {}
    let maxLength = 0
    let windowStart = 0
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const right = str[windowEnd];
        if(right in charMap){
          // When the windowStart it bigger than the right one 
          // we use Math.max(windowStart,rightIndex)
           windowStart = charMap[right] + 1
        }
        charMap[right] = windowEnd
        maxLength = Math.max(maxLength,windowEnd-windowStart +1 )
        
    }
    console.log(maxLength);
}
