export default function main() {

   // TIME 
   // O(N+N)
   // O(N)
   // SPACE 
   // O(1)
   let arr = [3,4,1,1,6]
   let  S = 7
   let smallest = Infinity
   let windowSum  = 0
   let windowStart = 0
   for (let index = 0; index < arr.length; index++) {
       windowSum+= arr[index]

       while(windowSum>=S){
         smallest = Math.min(smallest, index - windowStart)
         windowSum -= arr[windowStart]
         windowStart++
         break;
       }
   }
   console.log(smallest);
}