export default function main() {
    let  str ="abbcabc", pattern="abc"
    // String="bcdxabcdy", Pattern="bcdyabcdx"
    //"aaacb", Pattern="abc"
    // String="aaacb", Pattern="abc"
    let windowStart = 0
    const nSet = new Set(pattern)
    let set = new Set(pattern)

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightEnd = str[windowEnd];
        if(nSet.has(rightEnd)){
           set.delete(rightEnd)
        } else {
            let leftStart = str[windowStart]
            console.log(leftStart);
            if(nSet.has(leftStart)){
                set.add(leftStart)
            }
            windowStart++
        }
        if(set.size == 0) {
            console.log(true);
            return 
        }
    }


}