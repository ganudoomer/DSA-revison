export default function main() {
    console.log("Working");
    findLongestSubstring("babbbbaldnk")   
}


function findLongestSubstring(str){
     let longest = 0
     let start = 0 
     let seen = {}
    
     for (let i = 0; i < str.length; i++) {
         const char = str[i];
         if(seen[char]){
             start = i
         }
         longest = Math.max(longest,i-start)
         seen[char] = i 
     }
    
    console.log(longest);

}