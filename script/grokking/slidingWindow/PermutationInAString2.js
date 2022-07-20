export default function main () {
    let str ="aobxabcif", pattern="abc"
    let windowStart = 0
    let matched = 0
    let map  = {}


    //  Find the Frequency in the Pattern
    for(let i = 0;i <pattern.length;i++){
        let chr = pattern[i]
        map[chr] = (map[chr] || 0) + 1
    }

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar  = str[windowEnd]; 
        // Check if the right char is there in the MAP
        if(rightChar in map){
            //  if there in the map 
            //  then decrement in the map
            map[rightChar] -= 1
            // If it is Zero 
            if(map[rightChar] === 0){
                // We have a match 
                matched += 1 
            }
        }

        // If matches are equal to the unique values in the 
        // Pattern then. We got a match 
        if(matched === Object.keys(map).length) {
            console.log(true);
            return
        }
        
        // Shrink the window
        if(windowEnd >= pattern.length - 1){
           // if window exceeds the pattern size 
           // Then shrink the window 
           let leftChar =  str[windowStart]
           // Shrink the window
           windowStart += 1 
           // Decrement matches if Char Map is Zero
           if(leftChar in map){
             if(map[leftChar] === 0){
                matched -= 1
             }
             // Add back the count 
             map[leftChar] += 1
           }
        }


    }
    // Finally return false 
    console.log(false);

}