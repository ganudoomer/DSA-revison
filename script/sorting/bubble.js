export default  function main() {
   let arr  = [22,42,1,8,90,66]

   for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
         if(arr[j] > arr[j+1]){
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1]  = temp 
         }
      }
   }

  console.log(arr);

}