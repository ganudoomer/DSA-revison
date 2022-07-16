
// Get the largest number of char with K distinct chars
export default function main() {
    let  str = "araaci"
    let map  = {}
    let windowStart = 0
    let max = 0
    let k = 2
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        let element = str[windowEnd]
        map[element] = (map[element] || 0) + 1

        while(Object.keys(map).length > k){
            let left = str[windowStart]
            map[left] -= 1 
            if(map[left] == 0){
               delete map[left]
            }
            windowStart += 1
        }

        max = Math.max(max,windowEnd - windowStart + 1)

    }
    console.log(max);

} 